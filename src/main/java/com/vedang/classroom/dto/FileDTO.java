package com.vedang.classroom.dto;

public class FileDTO {
    private int id;
    private String url;
    private String name;
    private String type;

    public FileDTO(int id, String url, String name, String type) {
        this.id = id;
        this.url = url;
        this.name = name;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
