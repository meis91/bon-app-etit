package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.logic.exception.RecipeNotFoundException;
import com.codecool.bonappetit.persistence.entity.*;
import com.codecool.bonappetit.persistence.repository.RecipeRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Transactional
    public List<Recipe> findByUser(long id) {
        User user = userService.findById(id);
        return recipeRepository.findByUser(user);
    }

    public Recipe updatePicture(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public Optional<Recipe> updateLikes(long id) {
        Optional<Recipe> oRecipe = recipeRepository.findById(id);
        oRecipe.ifPresent((r) -> r.setLikes(r.getLikes() +1 ));
        oRecipe.ifPresent(recipeRepository::save);
        return oRecipe;
    }
}
