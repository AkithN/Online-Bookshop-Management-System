package com.example.RegistrationLoginPage.service;

import com.example.RegistrationLoginPage.dto.UserDTO;
import com.example.RegistrationLoginPage.dto.LoginDTO;
import com.example.RegistrationLoginPage.response.LoginResponse;

public interface EmployeeService {
    String addEmployee(UserDTO employeeDTO);

    LoginResponse loginEmployee(LoginDTO loginDTO);

    Object getAllEmployee();
}
