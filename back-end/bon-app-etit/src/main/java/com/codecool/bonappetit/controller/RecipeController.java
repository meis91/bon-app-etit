package com.codecool.bonappetit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class RecipeController {

    private String name = "bon-app-etit";

    @GetMapping
    @ResponseBody
    public String name() {
        return name;
    }
}
