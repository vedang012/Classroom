package com.vedang.classroom.service;

import com.vedang.classroom.dto.AnnouncementDTO;
import com.vedang.classroom.model.Announcement;
import com.vedang.classroom.model.Classroom;
import com.vedang.classroom.repository.AnnouncementRepo;
import com.vedang.classroom.repository.ClassroomRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnnouncementService {

    private AnnouncementRepo announcementRepo;

    @Autowired
    public void setAnnouncementRepo(AnnouncementRepo announcementRepo) {
        this.announcementRepo = announcementRepo;
    }

    private ClassroomRepo classroomRepo;

    @Autowired
    public void setClassroomRepo(ClassroomRepo classroomRepo) {
        this.classroomRepo = classroomRepo;
    }

    public AnnouncementDTO create(Announcement announcement, String id) {
        Classroom classroom = classroomRepo.findByClassroomId(id);
        classroom.getAnnouncements().add(announcement);
        announcement.setClassroom(classroom);
        Announcement announcement1 = announcementRepo.save(announcement);
        return new AnnouncementDTO(announcement1.getId(), announcement1.getMessage());
    }

    public List<AnnouncementDTO> get(String id) {
        Classroom classroom = classroomRepo.findByClassroomId(id);
        List<Announcement> announcementList = announcementRepo.findByClassroomId(classroom.getId());
        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();

        for (Announcement announcement : announcementList) {
            announcementDTOS.add(new AnnouncementDTO(announcement.getId(), announcement.getMessage()));
        }

        return announcementDTOS;

    }
}
