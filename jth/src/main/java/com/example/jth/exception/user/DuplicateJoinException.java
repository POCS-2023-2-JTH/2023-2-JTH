package com.example.jth.exception.user;


import com.example.jth.exception.BusinessException;
import com.example.jth.exception.ErrorCode;

public class DuplicateJoinException extends BusinessException {
    public DuplicateJoinException(String message, ErrorCode errorCode) {
        super(message, errorCode);
    }

    public DuplicateJoinException(ErrorCode errorCode) {
        super(errorCode);
    }
}
