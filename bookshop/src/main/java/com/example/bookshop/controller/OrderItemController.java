/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.bookshop.controller;

import com.example.bookshop.entity.OrderItem;
import com.example.bookshop.service.OrderItemService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author AKITH
 */
@RestController
public class OrderItemController {
    @Autowired
    private OrderItemService orderItemService;

    @GetMapping(path = "/orders")
    public List<OrderItem> getAllOrderItem() {
        return (List<OrderItem>) orderItemService.getAllOrderItem();
    }

    @GetMapping(path = "/orders/{order_item_id}")
    public OrderItem getOrderItemById(@PathVariable int order_item_id) {
        return (OrderItem) orderItemService.getOrderItemById(order_item_id);
    }

    @PostMapping(path = "/orders")
    public OrderItem createOrderItem(@RequestBody OrderItem orderItem) {
        return orderItemService.createOrderItem(orderItem);
    }

    @PutMapping(path = "/orders")
    public OrderItem updateOrderItem(@RequestBody OrderItem orderItem) {
        return orderItemService.updateOrderItem(orderItem);
    }

    @DeleteMapping(path = "/orders/{order_item_id}")
    public void deleteOrderItemById(@PathVariable int order_item_id) {
        orderItemService.deleteOrderItemById(order_item_id);
    }
}
