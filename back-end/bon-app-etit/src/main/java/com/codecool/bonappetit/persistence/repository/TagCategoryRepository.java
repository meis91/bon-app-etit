package com.codecool.bonappetit.persistence.repository;

import com.codecool.bonappetit.persistence.entity.TagCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagCategoryRepository extends JpaRepository<TagCategory, Long> {
}
