package com.codecool.bonappetit.runner;

import com.codecool.bonappetit.persistence.entity.*;
import com.codecool.bonappetit.persistence.enums.TagCategoryName;
import com.codecool.bonappetit.persistence.enums.UnitType;
import com.codecool.bonappetit.persistence.repository.IngredientRepository;
import com.codecool.bonappetit.persistence.repository.RecipeRepository;
import com.codecool.bonappetit.persistence.repository.TagCategoryRepository;
import com.codecool.bonappetit.persistence.repository.TagRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.List;

//@Configuration
//@ConfigurationProperties(prefix = "datasets")
//@PropertySource("classpath:recipes.properties")
public class DatabasePopulator {

    List<Ingredient> ingredients;
    List<IngredientQuantity> ingredientQuantities;
    List<Recipe> recipes;
    List<Tag> tags;
    List<TagCategory> tagCategories;


    @Bean
    ApplicationRunner fillDatabase(IngredientRepository ingredientRepository,
                                   RecipeRepository recipeRepository,
                                   TagRepository tagRepository,
                                   TagCategoryRepository tagCategoryRepository) {
        return args -> {
//            ingredientRepository.saveAll(ingredients);
//            tagRepository.saveAll(tags);
//            createTagCategories();
//            tagCategoryRepository.saveAll(tagCategories);
//            createIngredientQuantities();
//            setRecipesIngredientsLists();
//            setRecipesTags();
//            recipeRepository.saveAll(recipes);
        };
    }

    private void createTagCategories() {
        TagCategory dishType = TagCategory.builder()
                .tagCategoryName(TagCategoryName.DISHTYPE)
                .tags(List.of(tags.get(0), tags.get(1), tags.get(2)))
                .build();
        TagCategory recipeType = TagCategory.builder()
                .tagCategoryName(TagCategoryName.RECIPETYPE)
                .tags(List.of(tags.get(3), tags.get(4), tags.get(5), tags.get(6)))
                .build();
        TagCategory nutritionType = TagCategory.builder()
                .tagCategoryName(TagCategoryName.NUTRITIONTYPE)
                .tags(List.of(tags.get(7), tags.get(8), tags.get(9), tags.get(10)))
                .build();
        TagCategory cuisine = TagCategory.builder()
                .tagCategoryName(TagCategoryName.SEASON)
                .tags(List.of(tags.get(11), tags.get(12), tags.get(13), tags.get(14), tags.get(15), tags.get(16)))
                .build();
        TagCategory season = TagCategory.builder()
                .tagCategoryName(TagCategoryName.CUISINE)
                .tags(List.of(tags.get(17), tags.get(18), tags.get(19), tags.get(20)))
                .build();
        TagCategory other = TagCategory.builder()
                .tagCategoryName(TagCategoryName.OTHER)
                .tags(List.of(tags.get(21), tags.get(22), tags.get(23)))
                .build();
        setTagCategories(List.of(dishType, recipeType, nutritionType, cuisine, season, other));
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    public void setIngredientQuantities(List<IngredientQuantity> ingredientQuantities) {
        this.ingredientQuantities = ingredientQuantities;
    }

    public void setTags(List<Tag> tags) {
        this.tags = tags;
    }

    public void setRecipes(List<Recipe> recipes) {
        this.recipes = recipes;
    }

    public void setTagCategories(List<TagCategory> tagCategories) {
        this.tagCategories = tagCategories;
    }

    private void createIngredientQuantities() {
        IngredientQuantity i1 = IngredientQuantity.builder()
                .ingredient(ingredients.get(0))
                .unit(UnitType.TEASPOON)
                .quantity(1)
                .build();
        IngredientQuantity i2 = IngredientQuantity.builder()
                .ingredient(ingredients.get(1))
                .unit(UnitType.GRAM)
                .quantity(1)
                .build();
        IngredientQuantity i3 = IngredientQuantity.builder()
                .ingredient(ingredients.get(2))
                .unit(UnitType.PIECE)
                .quantity(5)
                .build();
        IngredientQuantity i4 = IngredientQuantity.builder()
                .ingredient(ingredients.get(3))
                .unit(UnitType.TABLESPOON)
                .quantity(1)
                .build();
        IngredientQuantity i5 = IngredientQuantity.builder()
                .ingredient(ingredients.get(4))
                .unit(UnitType.PIECE)
                .quantity(1)
                .build();
        IngredientQuantity i6 = IngredientQuantity.builder()
                .ingredient(ingredients.get(5))
                .unit(UnitType.PIECE)
                .quantity(2)
                .build();
        IngredientQuantity i7 = IngredientQuantity.builder()
                .ingredient(ingredients.get(6))
                .unit(UnitType.KILOGRAM)
                .quantity(1)
                .build();
        IngredientQuantity i8 = IngredientQuantity.builder()
                .ingredient(ingredients.get(7))
                .unit(UnitType.KILOGRAM)
                .quantity(2)
                .build();
        IngredientQuantity i9 = IngredientQuantity.builder()
                .ingredient(ingredients.get(8))
                .unit(UnitType.GRAM)
                .quantity(500)
                .build();
        IngredientQuantity i10 = IngredientQuantity.builder()
                .ingredient(ingredients.get(9))
                .unit(UnitType.PIECE)
                .quantity(4)
                .build();
        IngredientQuantity i11 = IngredientQuantity.builder()
                .ingredient(ingredients.get(10))
                .unit(UnitType.PIECE)
                .quantity(4)
                .build();
        IngredientQuantity i12 = IngredientQuantity.builder()
                .ingredient(ingredients.get(11))
                .unit(UnitType.GRAM)
                .quantity(80)
                .build();
        IngredientQuantity i13 = IngredientQuantity.builder()
                .ingredient(ingredients.get(12))
                .unit(UnitType.MILLILITER)
                .quantity(100)
                .build();
        IngredientQuantity i14 = IngredientQuantity.builder()
                .ingredient(ingredients.get(13))
                .unit(UnitType.MILLILITER)
                .quantity(20)
                .build();
        IngredientQuantity i15 = IngredientQuantity.builder()
                .ingredient(ingredients.get(14))
                .unit(UnitType.MILLILITER)
                .quantity(20)
                .build();
        IngredientQuantity i16 = IngredientQuantity.builder()
                .ingredient(ingredients.get(15))
                .unit(UnitType.GRAM)
                .quantity(500)
                .build();
        IngredientQuantity i17 = IngredientQuantity.builder()
                .ingredient(ingredients.get(11))
                .unit(UnitType.GRAM)
                .quantity(60)
                .build();
        IngredientQuantity i18 = IngredientQuantity.builder()
                .ingredient(ingredients.get(16))
                .unit(UnitType.GRAM)
                .quantity(500)
                .build();
        IngredientQuantity i19 = IngredientQuantity.builder()
                .ingredient(ingredients.get(17))
                .unit(UnitType.GRAM)
                .quantity(40)
                .build();
        IngredientQuantity i20 = IngredientQuantity.builder()
                .ingredient(ingredients.get(18))
                .unit(UnitType.MILLILITER)
                .quantity(400)
                .build();
        IngredientQuantity i21 = IngredientQuantity.builder()
                .ingredient(ingredients.get(19))
                .unit(UnitType.MILLILITER)
                .quantity(200)
                .build();
        IngredientQuantity i22 = IngredientQuantity.builder()
                .ingredient(ingredients.get(20))
                .unit(UnitType.TABLESPOON)
                .quantity(1)
                .build();
        IngredientQuantity i23 = IngredientQuantity.builder()
                .ingredient(ingredients.get(21))
                .unit(UnitType.GRAM)
                .quantity(50)
                .build();
        IngredientQuantity i24 = IngredientQuantity.builder()
                .ingredient(ingredients.get(22))
                .unit(UnitType.TEASPOON)
                .quantity(1)
                .build();
        IngredientQuantity i25 = IngredientQuantity.builder()
                .ingredient(ingredients.get(23))
                .unit(UnitType.GRAM)
                .quantity(400)
                .build();
        IngredientQuantity i26 = IngredientQuantity.builder()
                .ingredient(ingredients.get(13))
                .unit(UnitType.TABLESPOON)
                .quantity(2)
                .build();
        IngredientQuantity i27 = IngredientQuantity.builder()
                .ingredient(ingredients.get(0))
                .unit(UnitType.TABLESPOON)
                .quantity(2)
                .build();
        setIngredientQuantities(List.of(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11,
                i12, i13, i14, i15, i16, i17, i18, i19, i20, i21, i22, i23, i24, i25, i26, i27));
    }

    private void setRecipesIngredientsLists() {
        Recipe tafelspitz = recipes.get(0);
        tafelspitz.setQuantities(List.of(ingredientQuantities.get(0), ingredientQuantities.get(1),
                ingredientQuantities.get(2), ingredientQuantities.get(3), ingredientQuantities.get(4),
                ingredientQuantities.get(5), ingredientQuantities.get(6), ingredientQuantities.get(7)));
        Recipe saltinbocca = recipes.get(1);
        saltinbocca.setQuantities(List.of(ingredientQuantities.get(8), ingredientQuantities.get(9),
                ingredientQuantities.get(10), ingredientQuantities.get(11), ingredientQuantities.get(12),
                ingredientQuantities.get(13), ingredientQuantities.get(14)));
        Recipe macAndCheese = recipes.get(2);
        macAndCheese.setQuantities(List.of(ingredientQuantities.get(15), ingredientQuantities.get(16),
                ingredientQuantities.get(17), ingredientQuantities.get(18), ingredientQuantities.get(19),
                ingredientQuantities.get(20), ingredientQuantities.get(21), ingredientQuantities.get(22),
                ingredientQuantities.get(23)));
        Recipe pimientosDePadron = recipes.get(3);
        pimientosDePadron.setQuantities(List.of(ingredientQuantities.get(24), ingredientQuantities.get(25),
                ingredientQuantities.get(26)));
    }

    private void setRecipesTags() {
        Recipe tafelspitz = recipes.get(0);
        tafelspitz.setTags(List.of(tags.get(2), tags.get(14), tags.get(17)));
        Recipe saltinbocca = recipes.get(1);
        saltinbocca.setTags(List.of(tags.get(2), tags.get(11), tags.get(18)));
        Recipe macAndCheese = recipes.get(2);
        macAndCheese.setTags(List.of(tags.get(3), tags.get(4), tags.get(7)));
    }
}
