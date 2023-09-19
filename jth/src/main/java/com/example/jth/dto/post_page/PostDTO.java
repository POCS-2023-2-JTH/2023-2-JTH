package com.example.jth.dto.post_page;

import com.example.jth.domain.post.Category;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;

@RequiredArgsConstructor
@Getter
public class PostDTO {
    private final Long id;
    private final Category category;
    private final String title;
    private final String content;
    private final LocalDate created;
    private final Long userId;
    private final String userName;
}
