package com.codecool.bonappetit.controller;

import com.codecool.bonappetit.logic.RecipeService;
import com.codecool.bonappetit.persistence.entity.Recipe;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:3000")
public class RecipeController {

    private final RecipeService recipeService;
    private String name = "bon-app-etit";

//    @GetMapping
//    public String name() {
//        return name;
//    }

    @GetMapping
    public List<Recipe> getAll() {
        return recipeService.getAll();
    }
}
