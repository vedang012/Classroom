package com.vedang.classroom.service;

import com.vedang.classroom.dto.UserDTO;
import com.vedang.classroom.model.User;
import com.vedang.classroom.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    private UserRepo userRepo;
    private AuthenticationManager authenticationManager;
    private JWTService jwtService;

    @Autowired
    public void setUserRepo(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Autowired
    public void setAuthenticationManager(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Autowired
    public void setJwtService(JWTService jwtService) {
        this.jwtService = jwtService;
    }

    public UserDTO register(User user) {
        User user1 = userRepo.save(user);
        return new UserDTO(user1.getId(), user1.getEmail(), user1.getRole());
    }

    public String verifyStudent(User user) throws Exception {
        try {

            Authentication authentication =
                    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));



            if (authentication.isAuthenticated()) {

                if (!user.getRole().equals("ROLE_STUDENT")) {
                    throw new Exception("Authentication Failed. No Student account found.");
                }

                return jwtService.createJwtToken(user.getEmail());
            }

            throw new Exception("Authentication Failed. Please register first");
        } catch (IllegalArgumentException | BadCredentialsException e) {
            System.out.println("Authentication failed: " + e.getMessage());
            throw new Exception("Authentication Failed: Invalid credentials");
        }
    }

    public String verifyTeacher(User user) throws Exception {

        System.out.println("hi jwt");

        try {
            Authentication authentication =
                    authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));

            System.out.println("hi again");

            if (authentication.isAuthenticated()) {
                if (!user.getRole().equals("ROLE_TEACHER")) {
                    System.out.println("failed auth");
                    throw new Exception("Authentication Failed. No Teacher account found.");
                }

                System.out.println("we here");
                return jwtService.createJwtToken(user.getEmail());
            }

            System.out.println("failed auth 2");
            throw new Exception("Authentication Failed. Please register first");
        } catch (IllegalArgumentException | BadCredentialsException e) {
            System.out.println("Authentication failed: " + e.getMessage());
            throw new Exception("Authentication Failed: Invalid credentials");
        }
    }
}
