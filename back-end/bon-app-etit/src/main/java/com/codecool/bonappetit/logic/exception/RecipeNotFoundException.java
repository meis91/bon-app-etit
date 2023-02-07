package com.codecool.bonappetit.logic.exception;

public class RecipeNotFoundException extends RuntimeException {
    public RecipeNotFoundException(Long id) {
        super("Could not find recipe " + id);
    }
}
