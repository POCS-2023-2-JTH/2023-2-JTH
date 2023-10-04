package com.example.jth.service;

import com.example.jth.domain.post.Post;
import com.example.jth.domain.user.User;
import com.example.jth.dto.add_post.AddPostRequest;
import com.example.jth.dto.add_post.AddPostResponse;
import com.example.jth.dto.post_page.PostDTO;
import com.example.jth.dto.post_page.PostPageRequest;
import com.example.jth.dto.post_page.PostPageResponse;
import com.example.jth.dto.remove_post.DeletePostRequest;
import com.example.jth.dto.search_post.SearchPostRequest;
import com.example.jth.dto.update_post.SearchCondition;
import com.example.jth.dto.update_post.UpdatePostRequest;
import com.example.jth.exception.ErrorCode;
import com.example.jth.exception.post.PostNotFoundException;
import com.example.jth.exception.user.UserNotFoundException;
import com.example.jth.repository.PostRepository;
import com.example.jth.repository.UserRepository;
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
    private final UserRepository userRepository;

    public PostPageResponse getPosts(PostPageRequest request) {
        PageRequest pageRequest = PageRequest.of(request.getPage(), request.getSize());
        Page<Post> page = postRepository.findAll(pageRequest);
        List<PostDTO> posts = mapPostToPostDTO(page);

        return new PostPageResponse(page, posts);
    }

    public PostDTO getPost(Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("해당 게시글이 존재하지 않습니다.", ErrorCode.POST_NOT_FOUND));

        return new PostDTO(
                post.getId(),
                post.getCategory(),
                post.getTitle(),
                post.getContent(),
                post.getCreated(),
                post.getUser().getId(),
                post.getUser().getName()
        );
    }

    @Transactional
    public AddPostResponse addPost(AddPostRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new UserNotFoundException("존재하지 않는 회원입니다.", ErrorCode.USER_NOT_FOUND));
        Post post = Post.from(request, user);
        Long id = postRepository.save(post).getId();
        return new AddPostResponse(id);
    }

    @Transactional
    public void deletePost(DeletePostRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new UserNotFoundException("존재하지 않는 회원입니다.", ErrorCode.USER_NOT_FOUND));
        Post post = postRepository.findById(request.getPostId())
                .orElseThrow(() -> new PostNotFoundException("해당 게시글이 존재하지 않습니다.", ErrorCode.POST_NOT_FOUND));
        user.getWrotePosts().remove(post);
        postRepository.delete(post);
    }

    public PostPageResponse search(SearchPostRequest request){
        PageRequest pageRequest = PageRequest.of(request.getPage(), request.getSize());
        SearchCondition condition=request.getCondition();
        String query=request.getQuery();

        Page<Post> page=condition.equals(SearchCondition.TITLE)?
                postRepository.findAllByTitleContaining(query, pageRequest):
                postRepository.findAllByUsername(query, pageRequest);

        List<PostDTO> posts = mapPostToPostDTO(page);

        return new PostPageResponse(page, posts);
    }

    @Transactional
    public void updatePost(UpdatePostRequest request){
        Post post = postRepository.findById(request.getPostId())
                .orElseThrow(() -> new PostNotFoundException("해당 게시글이 존재하지 않습니다.", ErrorCode.POST_NOT_FOUND));
        post.update(request);
    }

    private List<PostDTO> mapPostToPostDTO(Page<Post> page){
        return page.getContent().stream().map(post -> new PostDTO(
                post.getId(),
                post.getCategory(),
                post.getTitle(),
                post.getContent(),
                post.getCreated(),
                post.getUser().getId(),
                post.getUser().getName()
        )).collect(Collectors.toList());
    }
}
