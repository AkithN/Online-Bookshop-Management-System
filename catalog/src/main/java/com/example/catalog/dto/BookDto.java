package com.example.catalog.dto;

import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Column;
import javax.persistence.Lob;

public class BookDto {

    private String title;

    private String author;

    private String genre;

    private String description;

    private double price;
    private int stock;
    private String isbn;
    private MultipartFile Image;

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

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public MultipartFile getImage() {
        return Image;
    }

    public void setImage(MultipartFile image) {
        Image = image;
    }
}
