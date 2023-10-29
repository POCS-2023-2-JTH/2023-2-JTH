package com.example.jth.exception.login;

import com.example.jth.exception.BusinessException;
import com.example.jth.exception.ErrorCode;

public class PasswordNotEqualException extends BusinessException {
    public PasswordNotEqualException(String message, ErrorCode errorCode) {
        super(message, errorCode);
    }

    public PasswordNotEqualException(ErrorCode errorCode) {
        super(errorCode);
    }
}
