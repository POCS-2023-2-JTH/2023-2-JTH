package com.example.jth.dto.join;

import lombok.Getter;


@Getter
public class JoinResponse {
    private Long id;

    public JoinResponse(Long id) {
        this.id = id;
    }
}
