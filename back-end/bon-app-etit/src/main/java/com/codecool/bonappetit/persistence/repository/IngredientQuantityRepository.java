package com.codecool.bonappetit.persistence.repository;

import com.codecool.bonappetit.persistence.entity.IngredientQuantity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientQuantityRepository extends JpaRepository<IngredientQuantity, Long> {
}
