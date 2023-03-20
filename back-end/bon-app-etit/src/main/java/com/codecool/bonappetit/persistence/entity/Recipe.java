package com.codecool.bonappetit.persistence.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
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
    @OneToOne
    private Image image;
    private int portions;
    @Column(columnDefinition="TEXT")
    private String instructions;

    @OneToMany(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
    private List<IngredientQuantity> quantities;
    @Transient
    private long userId;
    @ManyToOne
    private User user;
    @ManyToMany
    private List<Tag> tags;

    private int likes;
}
