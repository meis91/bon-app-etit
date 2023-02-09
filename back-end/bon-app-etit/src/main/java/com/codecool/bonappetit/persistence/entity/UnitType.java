package com.codecool.bonappetit.persistence.entity;

import com.fasterxml.jackson.annotation.JsonValue;

public enum UnitType {
    GRAM("g"),
    KILOGRAM("kg"),
    TEASPOON("tsp"),
    TABLESPOON("tbsp"),
    PIECE("piece"),
    CUP("c"),
    MILLILITER("ml"),
    CENTILITER("cl"),
    LITER("l");

    @JsonValue
    private final String unitName;

    UnitType(String unitName) {
        this.unitName = unitName;
    }

    public String getUnitName() {
        return unitName;
    }
}
