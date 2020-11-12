package com.example.tortiko.dto;

import java.util.ArrayList;

public class OrderDTO {
    private String customerName;
    private ArrayList<CustomerProductOrder> productList;
    private Integer totalPrice;

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public ArrayList<CustomerProductOrder> getProductList() {
        return productList;
    }

    public void setProductList(ArrayList<CustomerProductOrder> productList) {
        this.productList = productList;
    }

    public Integer getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Integer totalPrice) {
        this.totalPrice = totalPrice;
    }
}
