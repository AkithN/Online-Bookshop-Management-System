/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.bookshop.controller;

import com.example.bookshop.entity.Order;
import com.example.bookshop.service.OrderService;
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
public class OrderController {
    
    @Autowired
    private OrderService orderService;

    @GetMapping(path = "/books")
    public List<Order> getAllBook() {
        return (List<Order>) orderService.getAllBook();
    }

    @GetMapping(path = "/books/{order_id}")
    public Order getBookById(@PathVariable int order_id) {
        return (Order) orderService.getBookById(order_id);
    }

    @PostMapping(path = "/books")
    public Order createBook(@RequestBody Order book) {
        return orderService.createBook(book);
    }

    @PutMapping(path = "/books")
    public Order updateBook(@RequestBody Order book) {
        return orderService.updateBook(book);
    }

    @DeleteMapping(path = "/books/{order_id}")
    public void deleteBookById(@PathVariable int order_id) {
        orderService.deleteBookById(order_id);
    }
    
}
