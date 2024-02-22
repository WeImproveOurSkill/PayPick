package com.example.be.common.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.web.SecurityFilterChain;


//@EnableWebSecurity
//@Configuration

public class SecurityConfig   {
//
//    protected void configure(HttpSecurity http) throws Exception {
//        http.requiresChannel()
//            .anyRequest()
//            .requiresSecure();
////    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
//        httpSecurity.authorizeHttpRequests((auth) ->
//            auth.anyRequest().authenticated());
//        return httpSecurity.build();
//    }
}
