package com.example.be.common.domain.store.dto;

import com.example.be.common.domain.payway.entity.Payway;
import com.example.be.common.domain.store.entity.Store;
import jakarta.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class StoreDto {
    private Long id;

    private String storeName;

    private String majorCategory;

    private String middleCategory;

    private String storeAddress;

    private List<Payway> paywayList = new ArrayList<>();

    public StoreDto (Store store) {
        this.id = store.getId();
        this.storeName = store.getStoreName();
        this.majorCategory = store.getMajorCategory();
        this.middleCategory = store.getMiddleCategory();
        this.storeAddress = store.getStoreAddress();
        this.paywayList = store.getPaywayList();
    }

}
