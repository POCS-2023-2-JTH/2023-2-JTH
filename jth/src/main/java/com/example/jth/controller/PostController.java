package com.example.jth.controller;

import com.example.jth.dto.post_page.PostDTO;
import com.example.jth.dto.post_page.PostPageRequest;
import com.example.jth.dto.post_page.PostPageResponse;
import com.example.jth.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping("/posts")
    public ResponseEntity<PostPageResponse> getPosts(@Valid PostPageRequest request){
        PostPageResponse response = postService.getPosts(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/post/{postId}")
    public ResponseEntity<PostDTO> getPost(@PathVariable @Positive Long postId){
        PostDTO response = postService.getPost(postId);
        return ResponseEntity.ok(response);
    }

}
