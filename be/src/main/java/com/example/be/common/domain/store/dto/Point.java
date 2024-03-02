package com.example.be.common.domain.store.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Point {

    //latitude, x
    private double latitude;
    //longitude, y
    private double longitude;
}
