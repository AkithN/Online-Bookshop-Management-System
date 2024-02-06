/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.catalog.repository;

import com.example.catalog.entity.Book;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 *
 * @author sanda
 */
@Repository
public interface BookRepository
extends JpaRepository<Book, Integer>{
    @Query("select bk from Book bk where bk.title=?1")
    List<Book>findBookByName(String title);
    
    @Query("select bk from Book bk where bk.author=?1")
    List<Book>findBookByAuthor(String author);
    
    @Query("select bk from Book bk where bk.isbn=?1")
    List<Book>findBookByIsbn(String isbn);
    
}
