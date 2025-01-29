package com.vedang.classroom.controller;

import com.vedang.classroom.dto.AnnouncementDTO;
import com.vedang.classroom.model.Announcement;
import com.vedang.classroom.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AnnouncementController {

    private AnnouncementService announcementService;

    @Autowired
    public void setAnnouncementService(AnnouncementService announcementService) {
        this.announcementService = announcementService;
    }

    @PostMapping("/teacher/{id}/announcement")
    public AnnouncementDTO create(@RequestBody Announcement announcement, @PathVariable String id) {
        return announcementService.create(announcement, id);
    }

    @GetMapping("/classroom/{id}/announcement")
    public List<AnnouncementDTO> getAllAnnouncements(@PathVariable String id) {
        return announcementService.get(id);
    }
}
