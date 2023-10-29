package com.example.jth.controller;

import com.example.jth.domain.post.Category;
import com.example.jth.dto.add_post.AddPostRequest;
import com.example.jth.dto.add_post.AddPostResponse;
import com.example.jth.dto.post_page.PostDTO;
import com.example.jth.dto.post_page.PostPageRequest;
import com.example.jth.dto.post_page.PostPageResponse;
import com.example.jth.dto.remove_post.DeletePostRequest;
import com.example.jth.dto.search_post.SearchPostRequest;
import com.example.jth.dto.update_post.SearchCondition;
import com.example.jth.dto.update_post.UpdatePostRequest;
import com.example.jth.service.PostService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Objects;

@RestController
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @ApiOperation(value = "게시물 조회 api", notes = "페이지 단위 게시물 조회")
    @GetMapping("/posts")
    public ResponseEntity<PostPageResponse> getPosts(@Valid PostPageRequest request) {
        PostPageResponse response = postService.getPosts(request);
        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "게시물 상세 조회 api", notes = "게시물 상세 조회")
    @GetMapping("/post/{postId}")
    public ResponseEntity<PostDTO> getPost(@PathVariable @Positive Long postId) {
        PostDTO response = postService.getPost(postId);
        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "게시물 추가 api", notes = "새로운 게시물 저장(작성)")
    @PostMapping("/post/write")
    public ResponseEntity<AddPostResponse> addPost(@RequestBody @Valid AddPostRequest request) {
        AddPostResponse response = postService.addPost(request);
        return ResponseEntity.accepted().body(response);
    }

    @ApiOperation(value = "게시물 삭제 api", notes = "게시물 삭제")
    @PostMapping("/post/delete")
    public ResponseEntity<Objects> deletePost(@RequestBody @Valid DeletePostRequest request) {
        postService.deletePost(request);
        return ResponseEntity.accepted().build();
    }

    @ApiOperation(value = "게시물 검색 api", notes = "제목, 작성자 이름 기반으로 게시물 조회, 페이지 단위 제공")
    @GetMapping("/post")
    public ResponseEntity<PostPageResponse> searchPosts(@Valid SearchPostRequest request) {
        PostPageResponse response = postService.search(request);
        return ResponseEntity.ok(response);
    }

    @ApiOperation(value = "게시물 수정 api", notes = "게시물 제목, 내용, 분류 수정")
    @PostMapping("/post/update")
    public ResponseEntity<Objects> updatePost(@RequestBody @Valid UpdatePostRequest request){
        postService.updatePost(request);
        return ResponseEntity.accepted().build();
    }

    @ApiOperation(value = "게시물 분류 제공 api", notes = "게시물 분류(카테고리) 제공")
    @GetMapping("/category")
    public ResponseEntity<Category[]> getCategories(){
        return ResponseEntity.ok(Category.values());
    }

    @ApiOperation(value = "게시물 검색 조건 제공 api", notes = "게시물 검색 조건 제공")
    @GetMapping("/search-condition")
    public ResponseEntity<SearchCondition[]> getSearchConditions(){
        return ResponseEntity.ok(SearchCondition.values());
    }
}
