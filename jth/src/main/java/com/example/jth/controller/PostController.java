package com.example.jth.controller;

import com.example.jth.dto.add_post.AddPostRequest;
import com.example.jth.dto.add_post.AddPostResponse;
import com.example.jth.dto.post_page.PostDTO;
import com.example.jth.dto.post_page.PostPageRequest;
import com.example.jth.dto.post_page.PostPageResponse;
import com.example.jth.dto.remove_post.DeletePostRequest;
import com.example.jth.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Objects;

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

    @PostMapping("/post/write")
    public ResponseEntity<AddPostResponse> addPost(@Valid AddPostRequest request){
        AddPostResponse response = postService.addPost(request);
        return ResponseEntity.accepted().body(response);
    }

    @PostMapping("/post/delete")
    public ResponseEntity<Objects> deletePost(@Valid DeletePostRequest request){
        postService.deletePost(request);
        return ResponseEntity.accepted().build();
    }

}
