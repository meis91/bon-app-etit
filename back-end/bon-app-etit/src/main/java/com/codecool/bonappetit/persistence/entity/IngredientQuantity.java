package com.codecool.bonappetit.persistence.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class IngredientQuantity {
    @Id
    @GeneratedValue
    private long id;
    @OneToOne
    private Ingredient ingredient;
    @Enumerated(EnumType.STRING)
    private UnitType unit;
    private double quantity;
}
