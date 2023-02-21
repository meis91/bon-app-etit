package com.codecool.bonappetit.security.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        final String authHeader = request.getHeader("Authorization");
        final String jwt;
        final String userEmail;
        final String authHeaderStartString = "Bearer "; // TODO This is not from video! Remove if doesnt work

        if (authHeader == null || !authHeader.startsWith(authHeaderStartString)) {
            filterChain.doFilter(request, response);
            return;
        }
        jwt = authHeader.substring(authHeaderStartString.length());
        userEmail = jwtService.extractUsername(jwt);
    }
}
