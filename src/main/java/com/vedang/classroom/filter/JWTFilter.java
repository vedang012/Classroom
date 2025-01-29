package com.vedang.classroom.filter;

import com.vedang.classroom.service.CustomUserDetailService;
import com.vedang.classroom.service.JWTService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JWTFilter extends OncePerRequestFilter {

    private JWTService jwtService;

    @Autowired
    public void setJwtService(JWTService jwtService) {
        this.jwtService = jwtService;
    }

    ApplicationContext context;

    @Autowired
    public void setContext(ApplicationContext context) {
        this.context = context;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        if (request.getRequestURI().startsWith("/login") || request.getRequestURI().startsWith("/register")) {
            filterChain.doFilter(request, response); // Let these requests go through without JWT authentication
            return;
        }

        String authHeader = request.getHeader("authorization");
        String token = null;
        String email = null;


        if (authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);
            System.out.println(token);
            email = jwtService.extractEmailFromToken(token);
        }

//        for (Cookie cookie : request.getCookies()) {
//            if ("jwt".equals(cookie.getName())) {
//                token = cookie.getValue();
//                email = jwtService.extractEmailFromToken(token);
//                System.out.println("this works motherfuckers!!!");
//            }
//        }


        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = context.getBean(CustomUserDetailService.class).loadUserByUsername(email);
            if (jwtService.validToken(token, userDetails)) {
                UsernamePasswordAuthenticationToken authenticationToken =
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }
        }

        filterChain.doFilter(request, response);
    }
}
