package com.example.RegistrationLoginPage.service.implement;

import com.example.RegistrationLoginPage.dto.UserDTO;
import com.example.RegistrationLoginPage.dto.LoginDTO;
import com.example.RegistrationLoginPage.entity.User;
import com.example.RegistrationLoginPage.repository.UserRepository;
import com.example.RegistrationLoginPage.response.LoginResponse;
import com.example.RegistrationLoginPage.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeImplements implements EmployeeService {

    @Autowired
    private UserRepository employeeRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addEmployee(UserDTO employeeDTO) {

        User employee = new User(

                employeeDTO.getId(),
                employeeDTO.getName(),
                employeeDTO.getEmail(),
                employeeDTO.getType(),

                this.passwordEncoder.encode(employeeDTO.getPassword())

        );

        employeeRepository.save(employee);


        return employee.getName();
    }

    public List<User> getAllEmployee() {
        return employeeRepository.findAll();
    }

    @Override
    public LoginResponse loginEmployee(LoginDTO loginDTO) {
        User employee1 = employeeRepository.findByEmail(loginDTO.getEmail());
        if (employee1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = employee1.getPassword();
            String type = employee1.getType();
            boolean isPasswordRight = passwordEncoder.matches(password, encodedPassword);
            if (isPasswordRight) {
                Optional<User> employee = employeeRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (employee.isPresent()) {
                    System.out.println(type);
                    return new LoginResponse("Login Successfully", true, type);
                } else {
                    return new LoginResponse("Login Failed.....", false, null);
                }
            } else {
                return new LoginResponse("Password Not Match", false, null);
            }
        } else {
            return new LoginResponse("Email Not Match", false, null);
        }
    }
}
