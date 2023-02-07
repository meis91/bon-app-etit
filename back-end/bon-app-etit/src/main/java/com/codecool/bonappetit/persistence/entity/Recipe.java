package com.codecool.bonappetit.persistence.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity(name = "recipe")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recipe {
    @Id
    @GeneratedValue
    private Long recipeId;
    private String name;
    private String description;
    private int portions;
    @Column(columnDefinition="TEXT")
    private String instructions;
//    private String image;
    @OneToMany(cascade = {CascadeType.ALL})
    private List<IngredientQuantity> ingredientList;
//    private List<Label> labels;
}
