package com.codecool.bonappetit.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisterRequest {
 /*   private String firstname;
    private String lastname;*/
    private String username;
    private String email;
    private String password;
}
