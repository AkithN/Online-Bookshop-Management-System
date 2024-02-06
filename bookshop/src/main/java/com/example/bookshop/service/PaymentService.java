package com.example.bookshop.service;


import com.example.bookshop.entity.Payment;
import com.example.bookshop.repository.PaymentRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getAllPayment() {
        return paymentRepository.findAll();
    }

    public Payment processPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public Payment getPaymentById(int payment_id) {
        Optional<Payment> paymentOptional = paymentRepository.findById(payment_id);
        return paymentOptional.get();
    }

    public Payment updatePaymentStatus(Payment payment) {
        return paymentRepository.save(payment);
    }

}
