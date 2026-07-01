package com.nyanpan.kudamono.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nyanpan.kudamono.model.CatalogItem;

public interface CatalogRepository extends MongoRepository<CatalogItem, String> {
    
    List<CatalogItem> findByCategory(String category);

    List<CatalogItem> findByNameContainingIgnoreCase(String name);
}
