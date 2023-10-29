package com.example.jth.dto.update_post;

import com.example.jth.domain.post.Category;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@RequiredArgsConstructor
public class UpdatePostRequest {
    @NotNull
    private final Long postId;
    @NotNull
    private final Category category;
    @NotBlank
    private final String title;
    @NotBlank
    private final String content;
}
