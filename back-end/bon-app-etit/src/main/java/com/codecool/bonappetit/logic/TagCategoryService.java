package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.persistence.entity.TagCategory;
import com.codecool.bonappetit.persistence.repository.TagCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TagCategoryService {

    private final TagCategoryRepository tagCategoryRepository;

    public List<TagCategory> findAll() {
        return tagCategoryRepository.findAll();
    }
}
