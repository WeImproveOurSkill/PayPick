package com.example.be.common.domain.store.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class StoreResponseListDto {

    private Long storeId;
    private String storeName;
    private String storeEnum;
    private Point storePosition;

}
