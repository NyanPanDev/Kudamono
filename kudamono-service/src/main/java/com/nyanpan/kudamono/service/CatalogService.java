package com.nyanpan.kudamono.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nyanpan.kudamono.model.CatalogItem;
import com.nyanpan.kudamono.repository.CatalogRepository;

@Service
public class CatalogService {
    
    private final CatalogRepository catalogRepository;

    public CatalogService(CatalogRepository catalogRepository) {
        this.catalogRepository = catalogRepository;
    }

    public List<CatalogItem> getAllCatalogItems() {
        return catalogRepository.findAll();
    }

    public List<CatalogItem> getCatalogItemsByCategory(String category) {
        return catalogRepository.findByCategory(category);
    }

    public CatalogItem saveCatalogItem(CatalogItem catalogItem) {
        return catalogRepository.save(catalogItem);
    }
}
