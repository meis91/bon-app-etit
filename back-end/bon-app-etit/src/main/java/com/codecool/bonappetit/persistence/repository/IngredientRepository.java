package com.codecool.bonappetit.persistence.repository;

import com.codecool.bonappetit.persistence.entity.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {

    Ingredient findByName(String name);

    Ingredient findByNameIsContainingIgnoreCase(String name);
}
