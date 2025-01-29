package com.vedang.classroom.repository;

import com.vedang.classroom.model.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementRepo extends JpaRepository<Announcement, Integer> {
    List<Announcement> findByClassroomId(int classroom_id);
}
