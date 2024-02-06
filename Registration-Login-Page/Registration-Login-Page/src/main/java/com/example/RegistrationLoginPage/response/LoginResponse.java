package com.example.RegistrationLoginPage.response;

public class LoginResponse {

    String message;
    Boolean status;
    String type;

    public LoginResponse(String message, Boolean status, String type) {
        this.message = message;
        this.status = status;
        this.type = type;
    }

    public LoginResponse() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "message='" + message + '\'' +
                ", status=" + status +
                ", type='" + type + '\'' +
                '}';
    }
}
