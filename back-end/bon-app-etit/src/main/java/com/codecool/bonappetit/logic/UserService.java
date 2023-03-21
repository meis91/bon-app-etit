package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.logic.exception.UserNotFoundException;
import com.codecool.bonappetit.persistence.entity.Recipe;
import com.codecool.bonappetit.persistence.entity.User;
import com.codecool.bonappetit.persistence.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;



    public User findById(long id) {
        System.out.println("uS id = " + id);
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    /*public List<Recipe> findRecipesFromUser(long id) {
        return recipeService.findByUser(findById(id));
    }*/

    public User save(User user) {
        return userRepository.save(user);
    }
}
