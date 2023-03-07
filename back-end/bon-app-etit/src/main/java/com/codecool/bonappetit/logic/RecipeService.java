package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.logic.exception.RecipeNotFoundException;
import com.codecool.bonappetit.persistence.entity.Ingredient;
import com.codecool.bonappetit.persistence.entity.IngredientQuantity;
import com.codecool.bonappetit.persistence.entity.Recipe;
import com.codecool.bonappetit.persistence.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
@Service
@RequiredArgsConstructor
public class RecipeService {
    private final RecipeRepository recipeRepository;
    private final IngredientService ingredientService;


    public List<Recipe> getAll() {
        return recipeRepository.findAll();
    }

    public Recipe findById(Long id) { return recipeRepository.findById(id)
            .orElseThrow(() -> new RecipeNotFoundException(id));
    }

    public List<Recipe> findByIngredient(String ingredient) {
        Ingredient searchIngredient = ingredientService.findByName(ingredient);
        System.out.println("searchIngredient = " + searchIngredient);
        return recipeRepository.findByQuantitiesIngredientNameIgnoreCase(ingredient);
    }

    public Recipe save(Recipe recipe) {
        List<IngredientQuantity> ingredientQuantities = recipe.getQuantities();
        for (IngredientQuantity ingredientQuantity : ingredientQuantities) {
            Ingredient ingredient = ingredientService.saveIngredientIfNew(ingredientQuantity.getIngredient().getName());
            ingredientQuantity.setIngredient(ingredient);
        }
        return recipeRepository.saveAndFlush(recipe);
    }

}
