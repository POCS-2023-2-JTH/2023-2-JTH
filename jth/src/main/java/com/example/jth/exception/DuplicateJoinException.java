package com.example.jth.exception;


public class DuplicateJoinException extends RuntimeException{
    private ErrorCode errorCode;

    public DuplicateJoinException(String message, ErrorCode errorCode){
        super(message);
        this.errorCode=errorCode;
    }

    public DuplicateJoinException(ErrorCode errorCode){
        super(errorCode.getMessage());
        this.errorCode=errorCode;
    }

    public ErrorCode getErrorCode() {
        return errorCode;
    }
}
