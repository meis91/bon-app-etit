package com.codecool.bonappetit.persistence.repository;

import com.codecool.bonappetit.persistence.entity.Ingredient;
import com.codecool.bonappetit.persistence.entity.IngredientQuantity;
import com.codecool.bonappetit.persistence.entity.Recipe;
import com.codecool.bonappetit.persistence.enums.UnitType;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class RecipeRepositoryTest {

   @Autowired
   IngredientRepository ingredientRepository;
   @Autowired
   RecipeRepository recipeRepository;

    @AfterEach
    void after() {
        recipeRepository.deleteAll();
    }

    @Test
    void findByQuantitiesIngredientNameIgnoreCase() {
        Ingredient i1 = new Ingredient(0, "Cucumber");
        Ingredient i2 = new Ingredient(0, "Tomato");
        Ingredient i3 = new Ingredient(0, "Onion");

        ingredientRepository.saveAll(List.of(i1, i2, i3));

        IngredientQuantity iq1 = new IngredientQuantity(0, i1, UnitType.PIECE, 1);
        IngredientQuantity iq2 = new IngredientQuantity(0, i2, UnitType.GRAM, 4);
        IngredientQuantity iq3 = new IngredientQuantity(0, i2, UnitType.KILOGRAM, 2);
        IngredientQuantity iq4 = new IngredientQuantity(0, i3, UnitType.TABLESPOON, 2);

        Recipe r1 = new Recipe(0, "R1", "Desc 1", 2, "Instr", List.of(iq1, iq2));
        Recipe r2 = new Recipe(0, "R2", "Desc 2", 4, "Instr", List.of(iq3, iq4));

        recipeRepository.saveAll(List.of(r1, r2));

        assertAll(
                () -> test(List.of(), ""),
                () -> test(List.of(r1), "cucumber"),
                () -> test(List.of(r1, r2), "tomato")
        );
    }

        private void test(List<Recipe> expected, String ingredient) {
            List<Recipe> result = recipeRepository.findByQuantitiesIngredientNameIgnoreCase(ingredient);
            assertIterableEquals(expected, result);
        }

}