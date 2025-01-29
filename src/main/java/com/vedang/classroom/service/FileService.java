package com.vedang.classroom.service;

import com.vedang.classroom.dto.FileDTO;
import com.vedang.classroom.model.Classroom;
import com.vedang.classroom.model.File;
import com.vedang.classroom.repository.ClassroomRepo;
import com.vedang.classroom.repository.FileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FileService {

    private FileRepo fileRepo;

    @Autowired
    public void setFileRepo(FileRepo fileRepo) {
        this.fileRepo = fileRepo;
    }

    ClassroomRepo classroomRepo;

    @Autowired
    public void setClassroomRepo(ClassroomRepo classroomRepo) {
        this.classroomRepo = classroomRepo;
    }

    public FileDTO newFile(File file, String id) {
        Classroom classroom = classroomRepo.findByClassroomId(id);
        classroom.getFiles().add(file);
        file.setClassroom(classroom);
        File file1 = fileRepo.save(file);
        return new FileDTO(file1.getId(), file1.getUrl(), file1.getName(), file1.getType());
    }

    public List<FileDTO> get(String id) {
        Classroom classroom = classroomRepo.findByClassroomId(id);
        List<File> files = fileRepo.findByClassroomId(classroom.getId());
        List<FileDTO> fileDTOS = new ArrayList<>();

        for (File file : files) {
            fileDTOS.add(new FileDTO(file.getId(), file.getUrl(), file.getName(), file.getType()));
        }

        return fileDTOS;
    }
}
