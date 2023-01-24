package com.codecool.bonappetit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class RecipeController {

    private String name = "bon-app-etit";

    @GetMapping
    public String name() {
        return name;
    }
}
