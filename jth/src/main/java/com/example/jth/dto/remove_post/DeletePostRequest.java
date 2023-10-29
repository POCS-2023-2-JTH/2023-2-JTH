package com.example.jth.dto.remove_post;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotNull;

@Getter
@RequiredArgsConstructor
public class DeletePostRequest {
    @NotNull
    private final Long postId;
    @NotNull
    private final Long userId;
}
