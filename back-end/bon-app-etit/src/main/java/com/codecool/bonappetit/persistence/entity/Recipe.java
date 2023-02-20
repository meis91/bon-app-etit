package com.codecool.bonappetit.persistence.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
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

    private String image;
    private int portions;
    @Column(columnDefinition="TEXT")
    private String instructions;
//    private String image;
    @OneToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
    private List<IngredientQuantity> quantities;
//    private List<Label> labels;
}
