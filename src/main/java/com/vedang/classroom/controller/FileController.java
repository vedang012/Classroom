package com.vedang.classroom.controller;

import com.vedang.classroom.dto.FileDTO;
import com.vedang.classroom.model.File;
import com.vedang.classroom.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FileController {
    private FileService fileService;

    @Autowired
    public void setFileService(FileService fileService) {
        this.fileService = fileService;
    }

    @PostMapping("/teacher/{id}/file")
    public FileDTO create(@RequestBody File file, @PathVariable String id) {
        return fileService.newFile(file, id);
    }

    @GetMapping("/classroom/{id}/file")
    public List<FileDTO> getAllFiles(@PathVariable String id) {
        return fileService.get(id);
    }
}
