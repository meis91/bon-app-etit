package com.codecool.bonappetit.persistence.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Image {

    @Id
    @GeneratedValue
    private Long id;
    private String fileName;
    private String fileType;
    @OneToOne
    private Recipe recipe;
    @Lob
    private byte[] data;

    public Image(String fileName, String fileType, byte[] data, Recipe recipe) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
        this.recipe = recipe;
    }
}
