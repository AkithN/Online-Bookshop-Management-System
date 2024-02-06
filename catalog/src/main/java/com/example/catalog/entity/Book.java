/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.catalog.entity;

import java.util.Date;
import javax.persistence.*;

/**
 *
 * @author sanda
 */
@Entity
@Table(name="book_tbl") 
public class Book {
    @Id
    @Column(name = "book_id",length = 50)
    @GeneratedValue(strategy=GenerationType.AUTO)
     private int book_id;

    @Column(name="title",length = 255)
     private String title;

    @Column (name="author",length = 255)
     private String author;

    @Column (name="genre",length = 255)
     private String genre;

    @Column(name="description",length = 1000)
     private String description;

    @Column (name="price",length = 255)
     private double price;
    @Column(name="stock_qty")
     private int stock;
    @Lob
    @Column(name="cover_image")
    private byte[] Image;
    @Column(name="isbn",length = 13)
     private String isbn;

    public int getBook_id() {
        return book_id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public byte[] getImage() {
        return Image;
    }

    public void setImage(byte[] image) {
        Image = image;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }
}
