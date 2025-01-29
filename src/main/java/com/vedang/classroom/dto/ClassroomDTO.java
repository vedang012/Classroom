package com.vedang.classroom.dto;

public class ClassroomDTO {
    private String classroomId;
    private String name;
    private String teacherName;

    public ClassroomDTO(String classroomId, String name, String teacherName) {
        this.classroomId = classroomId;
        this.name = name;
        this.teacherName = teacherName;
    }

    public String getClassroomId() {
        return classroomId;
    }

    public String getName() {
        return name;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setClassroomId(String classroomId) {
        this.classroomId = classroomId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }
}
