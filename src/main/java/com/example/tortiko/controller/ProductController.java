package com.example.tortiko.controller;

import com.example.tortiko.model.Product;
import com.example.tortiko.model.ProductDTO;
import com.example.tortiko.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
public class ProductController {

    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository){
        this.productRepository = productRepository;
    }
    @GetMapping("/products/{id}")
    public Product getOne(@PathVariable("id") Product product){
        return product;
    }
    @RequestMapping(value = "/products/getAll", method = RequestMethod.GET)
    public List<Product> productList(){
        return productRepository.findAll();
    }
    @RequestMapping(value = "/upload-product", method = RequestMethod.POST)
    public Product createProduct(@RequestBody ProductDTO productDTO)  {
        Product newProduct = new Product();
        newProduct.setId(new Random().nextLong());
        newProduct.setProductDescription(productDTO.getProductDescription());
        newProduct.setProductName(productDTO.getProductName());
        newProduct.setProductPhotoUrl(productDTO.getProductPhotoUrl());
        newProduct.setProductPrices(countPrice(productDTO.getBasePrice()));
        return productRepository.save(newProduct);
    }
    public ArrayList<Integer> countPrice(Integer basePrice){
        ArrayList<Integer> prices = new ArrayList<>(3);
        prices.add(0,basePrice);
        prices.add(1,basePrice + (int)(basePrice * 0.25));
        prices.add(2,basePrice + (int)(basePrice * 0.5));
        return prices;
    }
}