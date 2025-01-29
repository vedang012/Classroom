package com.vedang.classroom.model;

import jakarta.persistence.*;

@Entity
public class Announcement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String message;

    @ManyToOne
    @JoinColumn(name = "classroom_id")
    private Classroom classroom;

    public Announcement() {
    }

    public Announcement(int id, String message, Classroom classroom) {
        this.id = id;
        this.message = message;
        this.classroom = classroom;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Classroom getClassroom() {
        return classroom;
    }

    public void setClassroom(Classroom classroom) {
        this.classroom = classroom;
    }
}
