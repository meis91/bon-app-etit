package com.codecool.bonappetit.persistence.repository;

import com.codecool.bonappetit.persistence.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long> {
    Tag findByName(String name);
}
