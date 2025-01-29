package com.vedang.classroom.controller;

import com.vedang.classroom.dto.UserDTO;
import com.vedang.classroom.model.Classroom;
import com.vedang.classroom.dto.ClassroomDTO;
import com.vedang.classroom.service.ClassroomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClassroomController {

    private ClassroomService classroomService;

    @Autowired
    public void setClassroomService(ClassroomService classroomService) {
        this.classroomService = classroomService;
    }

    public String getEmail() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @PostMapping("/teacher/classroom/new")
    public ClassroomDTO create(@RequestBody Classroom classroom) throws Exception {
        return classroomService.create(classroom, getEmail());
    }

    @GetMapping("/classroom/get/created-classes")
    public List<ClassroomDTO> getCreatedClasses(){
        return classroomService.getCreatedClasses(getEmail());
    }

    @GetMapping("/classroom/get/joined-classes")
    public List<ClassroomDTO> getJoinedClasses(){
        return classroomService.getJoinedClasses(getEmail());
    }

    @PostMapping("/classroom/{id}/join")
    public ClassroomDTO join(@PathVariable String id) throws Exception {
        return classroomService.join(id);
    }

    @GetMapping("/classroom/{id}/teacher")
    public String getTeacherName(@PathVariable String id) {
        return classroomService.getTeacherName(id);
    }

    @GetMapping("/classroom/{id}/name")
    public String getClassroomName(@PathVariable String id) {
        return classroomService.getClassroomName(id);
    }

    @GetMapping("/classroom/{id}/students")
    public List<UserDTO> getJoinedStudents(@PathVariable String id) {
        return classroomService.getStudents(id);
    }

}
