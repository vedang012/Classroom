package com.vedang.classroom.model;

import jakarta.persistence.*;

@Entity
public class BookmarkedFile {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int fileId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public BookmarkedFile() {
    }

    public BookmarkedFile(int fileId, User user) {
        this.fileId = fileId;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getFileId() {
        return fileId;
    }

    public void setFileId(int fileId) {
        this.fileId = fileId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
