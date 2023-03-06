package com.codecool.bonappetit.controller;

import com.codecool.bonappetit.logic.ImageService;
import com.codecool.bonappetit.logic.IngredientService;
import com.codecool.bonappetit.logic.RecipeService;
import com.codecool.bonappetit.persistence.entity.Image;
import com.codecool.bonappetit.persistence.entity.Ingredient;
import com.codecool.bonappetit.persistence.entity.IngredientQuantity;
import com.codecool.bonappetit.persistence.entity.Recipe;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class RecipeController {

    private final RecipeService recipeService;
    private final IngredientService ingredientService;
    private final ImageService imageService;
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
    Recipe addRecipe(@RequestBody Recipe recipe) {
        System.out.println("recipe = " + recipe);
        return recipeService.save(recipe);
    }

    @PostMapping("/recipes/image")
    Recipe addRecipeImage(@RequestParam("file") MultipartFile file, @RequestParam("recipe_id") long recipeId) {
        System.out.println("recipeId = " + recipeId);
        return imageService.saveImage(file, recipeId);
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

    @PostMapping()
    public Recipe saveRecipe(@RequestParam Recipe recipe){
        System.out.println("recipe = " + recipe);
        return recipe;
    }
}
