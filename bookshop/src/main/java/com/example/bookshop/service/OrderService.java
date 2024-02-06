/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.bookshop.service;

import com.example.bookshop.entity.Order;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.bookshop.repository.OrderRepository;

/**
 *
 * @author AKITH
 */
@Service
public class OrderService {
    
    @Autowired
    private OrderRepository bookshopRepository;

    public List<Order> getAllBook(){
        return bookshopRepository.findAll();
    }

    public Order getBookById(int order_id){
        Optional<Order> bookOptional = bookshopRepository.findById(order_id);
        return bookOptional.get();
    }

    public Order createBook(Order book) {
        return bookshopRepository.save(book);
    }

    public Order updateBook(Order book) {
        return bookshopRepository.save(book);
    }

    public void deleteBookById(int order_id) {
        bookshopRepository.deleteById(order_id);
    }
}

