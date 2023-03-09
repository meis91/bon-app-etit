package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.logic.exception.RecipeNotFoundException;
import com.codecool.bonappetit.persistence.entity.Ingredient;
import com.codecool.bonappetit.persistence.entity.IngredientQuantity;
import com.codecool.bonappetit.persistence.entity.Recipe;
import com.codecool.bonappetit.persistence.entity.User;
import com.codecool.bonappetit.persistence.repository.RecipeRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
@Service
@RequiredArgsConstructor
public class RecipeService {
    private final RecipeRepository recipeRepository;
    private final IngredientService ingredientService;
    private final UserService userService;

    public List<Recipe> getAll() {
        return recipeRepository.findAll();
    }

    public Recipe findById(Long id) { return recipeRepository.findById(id)
            .orElseThrow(() -> new RecipeNotFoundException(id));
    }

    @Transactional
    public List<Recipe> findByIngredient(String ingredient) {
        return recipeRepository.findByQuantitiesIngredientNameIgnoreCase(ingredient);
    }

    public Recipe save(Recipe recipe) {
        System.out.println("recipe.getUserId() = " + recipe.getUserId());
        User user = userService.findById(recipe.getUserId());
        recipe.setUser(user);
        List<IngredientQuantity> ingredientQuantities = recipe.getQuantities();
        for (IngredientQuantity ingredientQuantity : ingredientQuantities) {
            Ingredient ingredient = ingredientService.saveIngredientIfNew(ingredientQuantity.getIngredient().getName());
            ingredientQuantity.setIngredient(ingredient);
        }
        return recipeRepository.save(recipe);
    }

    @Transactional
    public List<Recipe> findBySearchTerm(String searchTerm) {
        return recipeRepository.findByTitleContainsIgnoreCaseOrQuantitiesIngredientNameContainsIgnoreCaseOrTagsNameContainsIgnoreCase(searchTerm, searchTerm, searchTerm);
    }

    public Recipe update(Recipe recipe) {
        return recipeRepository.save(recipe);
    }
}
