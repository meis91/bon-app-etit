package com.codecool.bonappetit.controller;

import com.codecool.bonappetit.logic.UserService;
import com.codecool.bonappetit.persistence.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/search")
    public User getUser(@RequestParam Long id){
        return userService.findById(id);
    }
}
