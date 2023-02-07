package com.codecool.bonappetit.persistence.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IngredientQuantity {
    @Id
    @GeneratedValue
    private Long ingredientQuantityId;
    @OneToOne
    private Ingredient ingredient;
    private UnitType unit;
    private double quantity;
}
