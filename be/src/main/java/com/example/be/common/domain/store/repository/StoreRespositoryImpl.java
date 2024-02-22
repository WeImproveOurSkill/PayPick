package com.example.be.common.domain.store.repository;

import static com.example.be.common.domain.store.entity.QStore.store;

import com.example.be.common.domain.store.dto.StoreResponseListDto;
import com.example.be.common.domain.store.entity.QStore;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class StoreRespositoryImpl implements StoreRepositoryCustom{

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public List<StoreResponseListDto> findAllStoreInMap(double leftX, double leftY, double rightX,
        double rightY) {
        List<StoreResponseListDto> storeResponseListDtos = jpaQueryFactory
            .select(Projections.constructor(StoreResponseListDto.class,
                store.id,
                store.storeName,
                store.latitude,
                store.longitude
            )).where(
                (store.latitude.between(leftY, rightY)).and(store.longitude.between(leftX, rightX))
            ).stream().toList();
        return storeResponseListDtos;
    }
}
