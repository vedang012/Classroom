package com.vedang.classroom.repository;

import com.vedang.classroom.model.Classroom;
import com.vedang.classroom.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClassroomRepo extends JpaRepository<Classroom, Integer> {
    List<Classroom> findAllByOwner(User user);

    Classroom findByClassroomId(String classroomId);
}
