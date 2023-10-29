package com.example.jth.exception.user;

import com.example.jth.exception.BusinessException;
import com.example.jth.exception.ErrorCode;

public class UserNotFoundException extends BusinessException {
    public UserNotFoundException(String message, ErrorCode errorCode) {
        super(message, errorCode);
    }

    public UserNotFoundException(ErrorCode errorCode) {
        super(errorCode);
    }
}
