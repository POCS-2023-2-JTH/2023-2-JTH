package com.example.jth.exception.post;

import com.example.jth.exception.BusinessException;
import com.example.jth.exception.ErrorCode;

public class PostNotFoundException extends BusinessException {
    public PostNotFoundException(String message, ErrorCode errorCode) {
        super(message, errorCode);
    }

    public PostNotFoundException(ErrorCode errorCode) {
        super(errorCode);
    }
}
