/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.catalog.service;

import com.example.catalog.dto.BookDto;
import com.example.catalog.entity.Book;
import com.example.catalog.repository.BookRepository;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author sanda
 */
@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ImageService imageService;

    public Book createBook(BookDto bookDto) {
        Book book = new Book();

        // Map properties from eventDTO to event
        book.setTitle(bookDto.getTitle());
        book.setAuthor(bookDto.getAuthor());
        book.setGenre(bookDto.getGenre());
        book.setDescription(bookDto.getDescription());
        book.setPrice(bookDto.getPrice());
        book.setStock(bookDto.getStock());
        book.setIsbn(bookDto.getIsbn());

        // Save the event in the database
        book = bookRepository.save(book);

        return book;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(int book_id) {
        Optional<Book> bookOptional =   bookRepository.findById(book_id);
        return bookOptional.get();
    }
     public List<Book> findBookByName(String title) {
        return bookRepository.findBookByName(title);
    }
     public List<Book> findBookByAuthor(String author) {
        return bookRepository.findBookByAuthor(author);
    }
     public List<Book> findBookByIsbn(String isbn) {
        return bookRepository.findBookByIsbn(isbn);
    }

    public Book createBook(Book book) {
        return  bookRepository.save(book);
    }

    public Book updateBook(Book book) {
        return  bookRepository.save(book);
    }

    public void deleteBookById(int book_id) {
         bookRepository.deleteById(book_id);
    }
    
    
    
}
