package com.example.tortiko.repository;

import com.example.tortiko.model.Order;
import com.example.tortiko.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {
}
