package com.codecool.bonappetit.controller;

import com.codecool.bonappetit.logic.IngredientService;
import com.codecool.bonappetit.logic.RecipeService;
import com.codecool.bonappetit.persistence.entity.Ingredient;
import com.codecool.bonappetit.persistence.entity.IngredientQuantity;
import com.codecool.bonappetit.persistence.entity.Recipe;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class RecipeController {

    private final RecipeService recipeService;
    private final IngredientService ingredientService;
    private String name = "bon-app-etit";

    @GetMapping
    public String name() {
        return name;
    }

    @GetMapping("/recipes")
    public List<Recipe> getRecipes() {
        return recipeService.getAll();
    }

    @PostMapping("/recipes")
    void addRecipe(@RequestBody Recipe recipe) {
        List<IngredientQuantity> ingredientQuantities = recipe.getQuantities();
        for (IngredientQuantity ingredientQuantity : ingredientQuantities) {
            Ingredient ingredient = ingredientService.saveIngredientIfNew(ingredientQuantity.getIngredient().getName());
            ingredientQuantity.setIngredient(ingredient);
        }
        recipeService.save(recipe);
    }

    @GetMapping("/recipes/{id}")
    public Recipe getRecipeById(@PathVariable Long id) {
        return recipeService.findById(id);
    }

    @GetMapping("/recipes-by-ingredient")
    public List<Recipe> getRecipesByIngredient(@RequestParam String ingredient) {
        List<Recipe> recipes = recipeService.findByIngredient(ingredient);
        return recipes;
    }
}
