package com.codecool.bonappetit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController("api")
@CrossOrigin("http://localhost:3000")
public class RecipeController {

    private String name = "bon-app-etit";

    @GetMapping
    @ResponseBody
    public String name() {
        return name;
    }
}
