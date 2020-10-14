package com.example.tortiko.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="products", schema = "public")
public class Product {
    @Id
    @Column(name = "product_id")
    private Long id;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_description")
    private String productDescription;

    @Column(name = "product_photo_url")
    private String productPhotoUrl;


    @Column(name = "product_prices")
    private ArrayList<Integer> productPrices;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public String getProductPhotoUrl() {
        return productPhotoUrl;
    }

    public void setProductPhotoUrl(String productPhotoUrl) {
        this.productPhotoUrl = productPhotoUrl;
    }

    public ArrayList<Integer> getProductPrices() {
        return productPrices;
    }

    public void setProductPrices(ArrayList<Integer> productPrices) {
        this.productPrices = productPrices;
    }
}