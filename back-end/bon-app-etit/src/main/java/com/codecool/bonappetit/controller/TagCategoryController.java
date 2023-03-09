package com.codecool.bonappetit.controller;

import com.codecool.bonappetit.logic.TagCategoryService;
import com.codecool.bonappetit.persistence.entity.TagCategory;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/tags")
@CrossOrigin("http://localhost:3000")
@RequiredArgsConstructor
public class TagCategoryController {

    private final TagCategoryService tagCategoryService;

    @GetMapping
    public List<TagCategory> findAll() {
        return tagCategoryService.findAll();
    }
}
