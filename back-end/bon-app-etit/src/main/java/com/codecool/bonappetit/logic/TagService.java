package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.persistence.entity.Tag;
import com.codecool.bonappetit.persistence.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    public Tag saveIfNew(String name) {
        Tag tag = tagRepository.findByName(name);
        if (tag == null) {
            tag = tagRepository.save(new Tag(0, name));
        }
        return tag;
    }
}
