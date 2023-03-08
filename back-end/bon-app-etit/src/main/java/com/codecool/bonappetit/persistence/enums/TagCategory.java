package com.codecool.bonappetit.persistence.enums;

public enum TagCategory {
    DISHTYPE("Dish Type"),
    RECIPETYPE("Recipe Type"),
    NUTRITIONTYPE("Nutrition Type"),
    CUISINE("Cuisine"),
    SEASON("Season/Special"),
    OTHER("Other");

    private final String tagCategoryName;

    TagCategory(String tagCategoryName) {
        this.tagCategoryName = tagCategoryName;
    }

    public String getTagCategoryName() {
        return tagCategoryName;
    }
}
