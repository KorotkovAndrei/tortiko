package com.example.tortiko.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.ArrayList;

@Entity
@Table(name="orders", schema = "public")
public class Order {

    @Id
    @Column(name = "order_id")
    private Long id;

    @Column(name = "customer_name")
    private String customerName;

    @Column(name = "product_list")
    private ArrayList<ArrayList<Integer>> productList;

    @Column(name = "order_status")
    private String orderStatus;

    @Column(name = "total_price")
    private Integer totalPrice;

    @Column(name = "order_date")
    private String orderDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public ArrayList<ArrayList<Integer>> getProductList() {
        return productList;
    }

    public void setProductList(ArrayList<ArrayList<Integer>> productList) {
        this.productList = productList;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public Integer getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Integer totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(String orderDate) {
        this.orderDate = orderDate;
    }
}
