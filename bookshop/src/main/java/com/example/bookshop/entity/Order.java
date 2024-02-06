/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.bookshop.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;

/**
 *
 * @author AKITH
 */
@Entity
@Table(name ="order_tbl")
public class Order implements Serializable {
        
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int order_id;
    
    @Column(name = "customer_id")
    private int customer_id;
    
    @Column(name = "order_date")
    @Temporal(javax.persistence.TemporalType.DATE)
    private Date order_date;

    @Column(name = "total_amount")
    private BigDecimal total_amount;
    
    @Column(name = "order_status")
    private String order_status;

    @Column(name = "shipping_address")
    private String shipping_address;
    
    @Column(name = "payment_method")
    private String payment_method;

    public int getOrder_id() {
        return order_id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public Date getOrder_date() {
        return order_date;
    }

    public void setOrder_date(Date order_date) {
        this.order_date = order_date;
    }

    public BigDecimal getTotal_amount() {
        return total_amount;
    }

    public void setTotal_amount(BigDecimal total_amount) {
        this.total_amount = total_amount;
    }

    public String getStatus() {
        return order_status;
    }

    public void setStatus(String order_status) {
        this.order_status = order_status;
    }

    public String getShipping_address() {
        return shipping_address;
    }

    public void setShipping_address(String shipping_address) {
        this.shipping_address = shipping_address;
    }

    public String getPayment_method() {
        return payment_method;
    }

    public void setPayment_method(String payment_method) {
        this.payment_method = payment_method;
    }
    
    
}
