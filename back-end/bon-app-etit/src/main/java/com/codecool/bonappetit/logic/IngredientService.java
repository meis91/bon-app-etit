package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.persistence.entity.Ingredient;
import com.codecool.bonappetit.persistence.repository.IngredientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class IngredientService {

    private final IngredientRepository ingredientRepository;

    public Ingredient saveIngredientIfNew(String name) {
        Ingredient ingredient = ingredientRepository.findByName(name);
        if (ingredient == null) {
            ingredient = ingredientRepository.save(new Ingredient(0, name));
        }
        return ingredient;
    }
}
