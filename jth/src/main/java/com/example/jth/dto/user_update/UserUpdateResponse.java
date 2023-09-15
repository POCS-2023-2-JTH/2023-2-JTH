package com.example.jth.dto.user_update;

import lombok.Getter;

@Getter
public class UserUpdateResponse {
    private Long id;

    public UserUpdateResponse(Long id) {
        this.id = id;
    }
}
