package com.example.jth.dto.add_post;

import com.example.jth.domain.post.Category;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@RequiredArgsConstructor
public class AddPostRequest {
    @NotNull
    private final Category category;
    @NotBlank
    private final String title;

    @NotBlank
    private final String content;

    @NotNull
    private final LocalDate created;

    @NotNull
    private final Long userId;

}
