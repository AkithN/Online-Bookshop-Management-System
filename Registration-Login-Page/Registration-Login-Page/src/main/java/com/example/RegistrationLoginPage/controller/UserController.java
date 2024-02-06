package com.example.RegistrationLoginPage.controller;

import com.example.RegistrationLoginPage.dto.UserDTO;
import com.example.RegistrationLoginPage.dto.LoginDTO;
import com.example.RegistrationLoginPage.entity.User;
import com.example.RegistrationLoginPage.response.LoginResponse;
import com.example.RegistrationLoginPage.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/users")

public class UserController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping(path = "/signUp")
    public String saveEmployee(@RequestBody UserDTO employeeDTO) {
        return employeeService.addEmployee(employeeDTO);
    }

    @PostMapping(path = "/signIn")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO) {
        LoginResponse loginResponse = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping(path = "/find")
    public List<User> getAllUsers() {
        return (List<User>) employeeService.getAllEmployee();
    }
}
