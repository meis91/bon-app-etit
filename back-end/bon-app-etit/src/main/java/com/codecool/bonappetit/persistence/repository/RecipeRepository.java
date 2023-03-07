package com.codecool.bonappetit.persistence.repository;

import com.codecool.bonappetit.persistence.entity.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    List<Recipe> findByQuantitiesIngredientNameIgnoreCase(String name);
}

