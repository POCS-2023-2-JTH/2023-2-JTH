package com.example.jth.domain.post;

import com.example.jth.domain.user.User;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Post {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(value = EnumType.STRING)
    private Category category;
    private String title;
    private String content;
    private LocalDate created;

    @ManyToOne
    private User user;

    public Post(Category category, String title, String content, LocalDate created, User user) {
        this.category = category;
        this.title = title;
        this.content = content;
        this.created = created;
        this.user = user;
    }
}
