package com.codecool.bonappetit.persistence.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recipe {
    @Id
    @GeneratedValue
    private long id;
    private String title;
    private String description;
    private String imageName;

    @OneToOne
    @JoinColumn (name = "fk_image_id")
    private Image image;
    @Transient
    private MultipartFile file;
    private int portions;
    @Column(columnDefinition="TEXT")
    private String instructions;
    @OneToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
    private List<IngredientQuantity> quantities;
//    private List<Label> labels;
}
