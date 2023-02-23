package com.codecool.bonappetit.security.config;

import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean                                                       //Spring boot searches for SecurityFilterChain, therefore a bean is needed
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .csrf() //Cross-Site-Request-Forgery
                .disable()
                .authorizeHttpRequests()// basically Whitelisting
                .requestMatchers("/api/v1/auth/**", "/api/**")//whiteList all patterns
                .permitAll()
                .anyRequest()//until here
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }
}

/*    From Live Coding Session:
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.csrf().and().cors().disable()
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/messages").permitAll();
                    auth.requestMatchers("/messages/user").hasRole("USER");
                    auth.requestMatchers("/messages/admin").hasRole("ADMIN");
                })
                .httpBasic(Customizer.withDefaults())
                .build();
        }
    }
*/