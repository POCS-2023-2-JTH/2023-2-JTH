package com.example.jth.dto.search_post;

import com.example.jth.dto.update_post.SearchCondition;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;

@Getter
@RequiredArgsConstructor
public class SearchPostRequest {
    @NotBlank
    private final String query;
    @PositiveOrZero
    @NotNull
    private final Integer page;
    @Positive
    @NotNull
    private final Integer size;

    @NotNull
    private final SearchCondition condition;
}
