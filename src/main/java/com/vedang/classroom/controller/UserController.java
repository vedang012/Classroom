package com.vedang.classroom.controller;

import com.vedang.classroom.dto.UserDTO;
import com.vedang.classroom.model.User;
import com.vedang.classroom.service.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RestController
public class UserController {

    PasswordEncoder encoder;
    UserService userService;

    @Autowired
    public void setEncoder(PasswordEncoder encoder) {
        this.encoder = encoder;
    }
    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register/student")
    public UserDTO registerStudent(@RequestBody User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole("ROLE_STUDENT");
        return userService.register(user);
    }

    @PostMapping("/register/teacher")
    public UserDTO registerTeacher(@RequestBody User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole("ROLE_TEACHER");
        return userService.register(user);
    }

    @PostMapping("/login/student")
    public String loginStudent(@RequestBody User user, HttpServletResponse response) throws Exception {
        System.out.println(user.toString());
        String jwt = userService.verifyStudent(user);
//        setCookies(jwt, response);
//        return "Success";

        return jwt;
    }


    @PostMapping("/login/teacher")
    public String loginTeacher(@RequestBody User user, HttpServletResponse response) throws Exception {
        System.out.println(user.toString());
        String jwt = userService.verifyTeacher(user);
//        setCookies(jwt, response);
//        System.out.println(jwt);
//        return "Success";

        return jwt;
    }

    public void setCookies(String jwt, HttpServletResponse response) {
        ResponseCookie cookie = ResponseCookie.from("jwt", jwt)
                .httpOnly(true)
                .path("/")
//                .sameSite("none")
                .secure(false)
                .maxAge(60*60)
                .build();


        response.setHeader(HttpHeaders.COOKIE, cookie.toString());

//        response.addCookie(cookie);

//        String cookieValue = String.format("jwt=%s; Secure; Path=/; SameSite=None", jwt);
//        response.addHeader("Set-Cookie", cookieValue);


    }



}
