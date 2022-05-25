package com.example.rgr.exception;

public class UserExistsException extends RuntimeException {
    public UserExistsException(String message){super(message);}
}
