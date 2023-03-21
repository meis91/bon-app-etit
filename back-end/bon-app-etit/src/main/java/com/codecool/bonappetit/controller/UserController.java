package com.codecool.bonappetit.controller;

import com.codecool.bonappetit.logic.UserService;
import com.codecool.bonappetit.persistence.entity.Recipe;
import com.codecool.bonappetit.persistence.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/users")
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

   /* @GetMapping("/search")
    public List<Recipe> getUsersRecipes(@RequestParam Long id){
        return userService.findRecipesFromUser(id);
    }*/
}
