package com.example.jth.domain.user;

import com.example.jth.domain.post.Post;
import com.example.jth.dto.user_update.UserUpdateRequest;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    List<Post> wrotePosts=new ArrayList<>();

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
