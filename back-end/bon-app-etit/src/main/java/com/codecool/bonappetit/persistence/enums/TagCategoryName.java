package com.codecool.bonappetit.persistence.enums;

public enum TagCategoryName {
    DISHTYPE("Dish Type"),
    RECIPETYPE("Recipe Type"),
    NUTRITIONTYPE("Nutrition Type"),
    CUISINE("Cuisine"),
    SEASON("Season/Special"),
    OTHER("Other");

    private final String tagCategoryName;

    TagCategoryName(String tagCategoryName) {
        this.tagCategoryName = tagCategoryName;
    }

    public String getTagCategoryName() {
        return tagCategoryName;
    }
}
