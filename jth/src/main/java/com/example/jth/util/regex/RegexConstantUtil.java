package com.example.jth.util.regex;

public abstract class RegexConstantUtil {
    public static final String NAME_REGEX="^[가-힣A-Za-z]{2,10}$";
    public static final String USER_ID_REGEX="^[a-z][a-z0-9]{5,19}$";
    public static final String PASSWORD_REGEX="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
    public static final String PHONE_NUMBER_REGEX="^010-\\d{4}-\\d{4}$";
}
