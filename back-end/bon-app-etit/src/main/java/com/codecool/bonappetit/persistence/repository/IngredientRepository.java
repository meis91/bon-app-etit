package com.codecool.bonappetit.persistence.repository;

import com.codecool.bonappetit.persistence.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {

}
