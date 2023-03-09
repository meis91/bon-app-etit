package com.codecool.bonappetit.persistence.entity;

import com.codecool.bonappetit.persistence.enums.TagCategoryName;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TagCategory {

    @Id
    @GeneratedValue
    private long id;

    @Enumerated(value = EnumType.STRING)
    private TagCategoryName tagCategoryName;

    @OneToMany
    private List<Tag> tags;
}
