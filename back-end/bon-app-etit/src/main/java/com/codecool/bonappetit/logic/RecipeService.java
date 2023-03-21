package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.logic.exception.RecipeNotFoundException;
import com.codecool.bonappetit.persistence.entity.*;
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

    private final TagService tagService;

    public List<Recipe> getAll() {
        return recipeRepository.findAll();
    }

    public Recipe findById(Long id) { return recipeRepository.findById(id)
            .orElseThrow(() -> new RecipeNotFoundException(id));
    }

/*    @Transactional
    public List<Recipe> findByIngredient(String ingredient) {
        return recipeRepository.findByQuantitiesIngredientNameIgnoreCase(ingredient);
    }*/

    public Recipe save(Recipe recipe) {
        User user = userService.findById(recipe.getUserId());
        recipe.setUser(user);
        List<IngredientQuantity> ingredientQuantities = recipe.getQuantities();
        for (IngredientQuantity ingredientQuantity : ingredientQuantities) {
            Ingredient ingredient = ingredientService.saveIngredientIfNew(ingredientQuantity.getIngredient().getName());
            ingredientQuantity.setIngredient(ingredient);
        }
        List<Tag> tags = recipe.getTags();
        for (Tag tag : tags) {
            tag.setId(tagService.saveIfNew(tag.getName()).getId());
        }
        return recipeRepository.saveAndFlush(recipe);
    }

    @Transactional
    public List<Recipe> findBySearchTerm(String searchTerm) {
        return recipeRepository.findByTitleContainsIgnoreCaseOrQuantitiesIngredientNameContainsIgnoreCaseOrTagsNameContainsIgnoreCase(searchTerm, searchTerm, searchTerm);
    }

    public Recipe update(Recipe recipe) {
        User user = userService.findById(recipe.getUserId());
        recipe.setUser(user);
        return recipeRepository.save(recipe);
    }

    @Transactional
    public List<Recipe> findByUser(long id) {
        User user = userService.findById(id);
        return recipeRepository.findByUser(user);
    }

    public Recipe updatePiture(Recipe recipe) {
        return recipeRepository.save(recipe);
    }
}
