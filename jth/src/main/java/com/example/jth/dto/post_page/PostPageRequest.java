package com.example.jth.dto.post_page;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.PositiveOrZero;

@RequiredArgsConstructor
@Getter
public class PostPageRequest {
    @PositiveOrZero
    @NotNull
    private final int page;
    @Positive
    @NotNull
    private final int size;
}
