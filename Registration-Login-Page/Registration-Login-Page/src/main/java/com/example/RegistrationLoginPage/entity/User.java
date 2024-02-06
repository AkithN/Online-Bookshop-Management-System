package com.example.RegistrationLoginPage.entity;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    @Column(name = "id", length = 50)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "name", length = 255)
    private String name;
    @Column(name = "email", length = 255)
    private String email;
    @Column(name = "type", length = 255)
    private String type;

    @Column(name = "password", length = 255)
    private String password;

    public User(int id, String name, String email, String type, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.type = type;
        this.password = password;
    }

    public User() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
