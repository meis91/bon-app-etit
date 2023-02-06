package com.codecool.bonappetit.persistence.repository;

import com.codecool.bonappetit.persistence.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}
