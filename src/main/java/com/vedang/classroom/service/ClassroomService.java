package com.vedang.classroom.service;

import com.vedang.classroom.dto.UserDTO;
import com.vedang.classroom.model.Classroom;
import com.vedang.classroom.dto.ClassroomDTO;
import com.vedang.classroom.model.User;
import com.vedang.classroom.repository.ClassroomRepo;
import com.vedang.classroom.repository.UserRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClassroomService {

    private ClassroomRepo classroomRepo;

    @Autowired
    public void setClassroomRepo(ClassroomRepo classroomRepo) {
        this.classroomRepo = classroomRepo;

    }

    private UserRepo userRepo;

    @Autowired
    public void setUserRepo(UserRepo userRepo) {
        this.userRepo = userRepo;
    }


    public ClassroomDTO create(Classroom classroom, String email) throws Exception {
        User user = userRepo.findByEmail(email);

        if (user == null) {
            throw new Exception("User not found");
        }

        if (!"ROLE_TEACHER".equals(user.getRole())) {
            throw new Exception("You don't have permission to perform this action");
        }

        classroom.setOwner(user);
        user.getClassrooms().add(classroom);
        Classroom savedClass = classroomRepo.save(classroom);
        return new ClassroomDTO(savedClass.getClassroomId(), savedClass.getName(), savedClass.getTeacherName());
    }

    public List<ClassroomDTO> getJoinedClasses(String email) {
        List<ClassroomDTO> classroomDTOS = new ArrayList<>();

        for (Classroom classroom : userRepo.findByEmail(email).getClassrooms()) {

            classroomDTOS.add(new ClassroomDTO(
                    classroom.getClassroomId(),
                    classroom.getName(),
                    classroom.getTeacherName()
            ));
        }


        return classroomDTOS;
    }



    public List<ClassroomDTO> getCreatedClasses(String email) {
        List<ClassroomDTO> classroomDTOS = new ArrayList<>();
        for (Classroom classroom : classroomRepo.findAllByOwner(userRepo.findByEmail(email))) {
            classroomDTOS.add(new ClassroomDTO(
                    classroom.getClassroomId(),
                    classroom.getName(),
                    classroom.getTeacherName()
            ));
        }

        return classroomDTOS;
    }


    @Transactional
    public ClassroomDTO join(String classroomId) throws Exception {
        Classroom classroom = classroomRepo.findByClassroomId(classroomId);
        User user = userRepo.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName());

        if (!"ROLE_STUDENT".equals(user.getRole())) {
            throw new Exception("Only students can perform this action");
        }
        List<User> joinedUsers = classroom.getParticipants();

        if (joinedUsers.contains(user)) {
            throw new Exception("User has already joined the class");
        }

        joinedUsers.add(user);
        List<Classroom> joinedClasses = user.getClassrooms();
        joinedClasses.add(classroom);
        user.setClassrooms(joinedClasses);
        classroom.setParticipants(joinedUsers);
        userRepo.save(user);
        Classroom newClass = classroomRepo.save(classroom);
        System.out.println("ssup");
        return new ClassroomDTO(
                newClass.getClassroomId(),
                newClass.getName(),
                newClass.getTeacherName()
        );

    }



    public String getTeacherName(String classroomId) {
        return classroomRepo.findByClassroomId(classroomId).getTeacherName();
    }

    public List<UserDTO> getStudents(String classroomId) {
        List<User> users = classroomRepo.findByClassroomId(classroomId).getParticipants();
        List<UserDTO> userDTOS = new ArrayList<>();
        for (User user : users) {
            userDTOS.add(new UserDTO(user.getId(), user.getEmail(), user.getRole()));
        }
        return userDTOS;
    }

    public String getClassroomName(String id) {
        return classroomRepo.findByClassroomId(id).getName();
    }
}
