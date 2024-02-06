package com.example.catalog.service;

import com.example.catalog.entity.Book;
import com.example.catalog.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class ImageService {

    @Autowired
    private BookRepository bookRepository;


    public void saveImage(int book_id, byte[] imageData) {
        Optional<Book> optionalBook = bookRepository.findById(book_id);

        Book book = optionalBook.get();
        book.setImage(imageData);
        bookRepository.save(book);

    }
}
