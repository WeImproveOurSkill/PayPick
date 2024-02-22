package com.example.be.common.domain.store.repository;

import com.example.be.common.domain.store.entity.Store;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreRepository extends JpaRepository<Store, Long>,StoreRepositoryCustom {

}
