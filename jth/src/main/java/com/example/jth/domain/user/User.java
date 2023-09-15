package com.example.jth.domain.user;

import com.example.jth.dto.user_update.UserUpdateRequest;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String userId;
    private String name;
    private String password;
    private Gender gender;
    private String phoneNumber;

    public User(String userId, String name, String password, Gender gender, String phoneNumber) {
        this.userId = userId;
        this.name = name;
        this.password = password;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
    }

    public void update(UserUpdateRequest request){
        this.userId=request.getUserId();
        this.name=request.getName();
        this.password=request.getPassword();
        this.phoneNumber=request.getPhoneNumber();
    }
}
