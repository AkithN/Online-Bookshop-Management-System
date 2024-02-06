/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.bookshop.service;

import com.example.bookshop.entity.OrderItem;
import com.example.bookshop.repository.OrderItemRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author AKITH
 */
@Service
public class OrderItemService {
    @Autowired
    private OrderItemRepository orderItemRepository;

    public List<OrderItem> getAllOrderItem(){
        return orderItemRepository.findAll();
    }

    public OrderItem getOrderItemById(int order_item_id){
        Optional<OrderItem> OrderItemOptional = orderItemRepository.findById(order_item_id);
        return OrderItemOptional.get();
    }

    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    public OrderItem updateOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }

    public void deleteOrderItemById(int order_item_id) {
        orderItemRepository.deleteById(order_item_id);
    }
}
