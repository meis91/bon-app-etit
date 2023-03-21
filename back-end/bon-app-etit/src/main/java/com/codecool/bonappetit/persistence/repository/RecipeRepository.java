package com.codecool.bonappetit.persistence.repository;

import com.codecool.bonappetit.persistence.entity.Recipe;
import com.codecool.bonappetit.persistence.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    List<Recipe> findByQuantitiesIngredientNameIgnoreCase(String name);

    List<Recipe> findByTitleContainsIgnoreCaseOrQuantitiesIngredientNameContainsIgnoreCaseOrTagsNameContainsIgnoreCase(
            String title, @Param("name") String name1, @Param("name") String name2);

    List<Recipe> findByUser(User user);
}

