package com.example.jth.repository;

import com.example.jth.domain.post.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    Page<Post> findAll(Pageable pageable);
    Page<Post> findAllByTitleContaining(String query, Pageable pageable);

    @Query("select p from Post p where p.user.name =:query")
    Page<Post> findAllByUsername(@Param("query") String query, Pageable pageable);
}
