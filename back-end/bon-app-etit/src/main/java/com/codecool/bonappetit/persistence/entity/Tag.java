package com.codecool.bonappetit.persistence.entity;

import com.codecool.bonappetit.persistence.enums.TagCategory;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Tag {
    @Id
    @GeneratedValue
    private long id;

    @Column(unique = true)
    private String name;

    @Enumerated(EnumType.STRING)
    private TagCategory tagCategory;
}
