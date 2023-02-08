package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.logic.exception.RecipeNotFoundException;
import com.codecool.bonappetit.persistence.entity.Recipe;
import com.codecool.bonappetit.persistence.repository.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class RecipeService {
    private final RecipeRepository recipeRepository;
    public List<Recipe> getAll() {
        return recipeRepository.findAll();
    }

    public Recipe findById(Long id) { return recipeRepository.findById(id)
            .orElseThrow(() -> new RecipeNotFoundException(id));
    }

    public List<Recipe> findByIngredient(String ingredient) {
        return recipeRepository.findByQuantitiesIngredientNameIgnoreCase(ingredient);
    }
}
