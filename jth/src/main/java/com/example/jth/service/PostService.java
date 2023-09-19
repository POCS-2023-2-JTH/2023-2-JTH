package com.example.jth.service;

import com.example.jth.domain.post.Post;
import com.example.jth.dto.post_page.PostDTO;
import com.example.jth.dto.post_page.PostPageRequest;
import com.example.jth.dto.post_page.PostPageResponse;
import com.example.jth.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    public PostPageResponse getPosts(PostPageRequest request){
        PageRequest pageRequest = PageRequest.of(request.getPage(), request.getSize());
        Page<Post> page = postRepository.findAll(pageRequest);
        List<PostDTO> posts = page.getContent().stream().map(post -> new PostDTO(
                post.getCategory(),
                post.getTitle(),
                post.getContent(),
                post.getCreated(),
                post.getUser().getId(),
                post.getUser().getName()
        )).collect(Collectors.toList());

        return new PostPageResponse(page, posts);
    }
}
