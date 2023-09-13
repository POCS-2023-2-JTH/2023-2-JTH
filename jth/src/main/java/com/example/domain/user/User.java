package com.example.domain.user;

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

    public User(String name, String password, Gender gender, String phoneNumber) {
        this.name = name;
        this.password = password;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
    }
}
