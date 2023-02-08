package com.codecool.bonappetit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class RecipeController {

    private String name = "Bon APPétit";

    @GetMapping
    @ResponseBody
    public String name() {
        return name;
    }
}
