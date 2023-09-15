package com.example.jth.dto.user_detail;

import com.example.jth.domain.user.Gender;
import com.example.jth.domain.user.User;
import lombok.Getter;

@Getter
public class UserDetailResponse {
    private String name;
    private String userId;
    private String password;
    private Gender gender;
    private String phoneNumber;

    private UserDetailResponse(String name, String userId,
                              String password, Gender gender, String phoneNumber) {
        this.name = name;
        this.userId = userId;
        this.password = password;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
    }

    public static UserDetailResponse from(User user){
        return new UserDetailResponse(
                user.getName(),
                user.getUserId(),
                user.getPassword(),
                user.getGender(),
                user.getPhoneNumber()
        );
    }
}
