package com.vedang.classroom.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String email;
    private String password;
    private String role; // Role can be "owner" or "participant"

    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference // Prevent circular reference when serializing owned classrooms
    private List<Classroom> ownedClassrooms = new ArrayList<>(); // Classroom owned by the user (for owners)

    @ManyToMany
    @JoinTable(
            name = "user_classroom",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "classroom_id")
    )
    @JsonManagedReference // Manages the reference on the other side of the relationship for joined classrooms
    private List<Classroom> joinedClassrooms = new ArrayList<>(); // Classroom the user is a participant of (for participants)

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BookmarkedFile> bookmarkedFiles = new ArrayList<>();

    // Getters and setters

    public List<Classroom> getClassrooms() {
        // Return the appropriate list based on the user's role
        if ("ROLE_TEACHER".equals(this.role)) {
            return ownedClassrooms;
        } else {
            return joinedClassrooms;
        }
    }

    public void setClassrooms(List<Classroom> classrooms) {
        if ("ROLE_TEACHER".equals(this.role)) {
            this.ownedClassrooms = classrooms;
        } else {
            this.joinedClassrooms = classrooms;
        }
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Classroom> getOwnedClassrooms() {
        return ownedClassrooms;
    }

    public void setOwnedClassrooms(List<Classroom> ownedClassrooms) {
        this.ownedClassrooms = ownedClassrooms;
    }

    public List<Classroom> getJoinedClassrooms() {
        return joinedClassrooms;
    }

    public void setJoinedClassrooms(List<Classroom> joinedClassrooms) {
        this.joinedClassrooms = joinedClassrooms;
    }

    public List<BookmarkedFile> getBookmarkedFiles() {
        return bookmarkedFiles;
    }

    public void setBookmarkedFiles(List<BookmarkedFile> bookmarkedFiles) {
        this.bookmarkedFiles = bookmarkedFiles;
    }

    // other getters and setters...
}
