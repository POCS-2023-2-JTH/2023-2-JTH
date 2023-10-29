package com.example.jth.exception.login;

import com.example.jth.exception.BusinessException;
import com.example.jth.exception.ErrorCode;

public class AuthException extends BusinessException {
    public AuthException(String message, ErrorCode errorCode) {
        super(message, errorCode);
    }

    public AuthException(ErrorCode errorCode) {
        super(errorCode);
    }
}
