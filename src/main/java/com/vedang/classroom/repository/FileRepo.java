package com.vedang.classroom.repository;

import com.vedang.classroom.model.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FileRepo extends JpaRepository<File, Integer> {
    List<File> findByClassroomId(int id);
}
