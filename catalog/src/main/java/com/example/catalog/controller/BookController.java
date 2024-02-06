/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.catalog.controller;

import com.example.catalog.entity.Book;
import com.example.catalog.service.BookService;
import com.example.catalog.service.ImageService;
import com.example.catalog.dto.BookDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;

/**
 *
 * @author sanda
 */
@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
    @Autowired
    private BookService bookService;

    @Autowired
    private ImageService imageService;


    @PostMapping
    public Book createBook(@ModelAttribute BookDto bookDto, @RequestParam("image") MultipartFile image) {
        Book book =bookService.createBook(bookDto);

        try {
            // Save the image using the image service and event ID
            imageService.saveImage(book.getBook_id(), image.getBytes());
        } catch (IOException e) {
            // Handle the exception
        }

        return book;
    }

    @PutMapping("/{book_id}") // Define the endpoint with the eventID path variable
    public Book updateBook(@PathVariable int book_id, @RequestBody BookDto updatedBookDto) {
        Book existingBook = bookService.getBookById(book_id);

        // Update the existing event with the new details from updatedEventDTO
        existingBook.setTitle(updatedBookDto.getTitle());
        existingBook.setAuthor(updatedBookDto.getAuthor());
        existingBook.setDescription(updatedBookDto.getDescription());
        existingBook.setGenre(updatedBookDto.getGenre());
        existingBook.setIsbn(updatedBookDto.getIsbn());
        existingBook.setPrice(updatedBookDto.getPrice());
        existingBook.setStock(updatedBookDto.getStock());
        // Update other event properties as needed

        // Save the updated event
        return bookService.updateBook(existingBook);
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{book_id}")
    public Book getBookById(@PathVariable int book_id) {
        return bookService.getBookById(book_id);
    }

    @GetMapping(params = "title")
    public List<Book> findBookByName(@RequestParam String title) {

        return bookService.findBookByName(title);
    }

    @GetMapping(params = "author")
    public List<Book> findBookByAuthor(@RequestParam String author) {
        return bookService.findBookByAuthor(author);
    }

    @GetMapping(params = "isbn")
    public List<Book> findBookByIsbn(@RequestParam String isbn) {
        return bookService.findBookByIsbn(isbn);
    }

    @PutMapping
    public Book updateBook(@PathVariable int book_id, @RequestBody Book book) {
        book.setBook_id(book_id);
        return bookService.updateBook(book);
    }

    @DeleteMapping("/{book_id}")
    public void deleteBookById(@PathVariable int book_id) {
        bookService.deleteBookById(book_id);
    }
            
            }
