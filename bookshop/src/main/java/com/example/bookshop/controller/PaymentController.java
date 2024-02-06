package com.example.bookshop.controller;


import com.example.bookshop.entity.Payment;
import com.example.bookshop.service.PaymentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController

public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping(path = "/payments")
    public List<Payment> getAllPayments() {
        return (List<Payment>) paymentService.getAllPayment();
    }
    
    @PostMapping(path = "/payments")
    public Payment processPayment(@RequestBody Payment payment) {
        return paymentService.processPayment(payment);
    }

    
    @GetMapping(path = "/payments/{payment_id}")
    public
         Payment getPaymentById(@PathVariable int payment_id) {
        return  paymentService.getPaymentById(payment_id);
    }
    
    @PutMapping(path = "/payments")
    public Payment updatePaymentStatus(@RequestBody Payment payment) {
        return paymentService.updatePaymentStatus(payment);
    }

    
}
