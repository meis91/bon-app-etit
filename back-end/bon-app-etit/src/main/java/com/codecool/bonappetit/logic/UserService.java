package com.codecool.bonappetit.logic;

import com.codecool.bonappetit.logic.exception.UserNotFoundException;
import com.codecool.bonappetit.persistence.entity.User;
import com.codecool.bonappetit.persistence.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User findById(long id){
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }
}
