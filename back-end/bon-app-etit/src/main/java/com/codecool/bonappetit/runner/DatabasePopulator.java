package com.codecool.bonappetit.runner;

import com.codecool.bonappetit.persistence.entity.Recipe;
import com.codecool.bonappetit.persistence.repository.RecipeRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.List;

@Configuration
@ConfigurationProperties(prefix = "datasets")
@PropertySource("classpath:recipes.properties")
public class DatabasePopulator {

    List<Recipe> recipes;

    @Bean
    ApplicationRunner fillDatabase (RecipeRepository recipeRepository) {
        return args -> {
            recipeRepository.saveAll(recipes);
        };
    }


    public void setRecipes(List<Recipe> recipes) {
        this.recipes = recipes;
    }



}
