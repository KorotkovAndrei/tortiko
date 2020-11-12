package com.example.tortiko.dto;

import javax.persistence.Column;
import javax.persistence.Id;
import java.util.ArrayList;

public class OrderDTO {
    private String customerName;
    private ArrayList<ArrayList<Integer>> productList;
    private Integer totalPrice;

}
