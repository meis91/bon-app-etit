package com.codecool.bonappetit.persistence.enums;

public enum TagCategoryName {
    DISHTYPE("Dish Type"),
    RECIPETYPE("Recipe Type"),
    NUTRITIONTYPE("Nutrition Type"),
    CUISINE("Cuisine"),
    SEASON("Season/Special"),
    OTHER("Other");

    private String nameString;

    TagCategoryName(String nameString) {
        this.nameString = nameString;
    }

    public String getNameString() {
        return nameString;
    }
}
