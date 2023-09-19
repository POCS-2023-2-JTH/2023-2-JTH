package com.example.jth.dto.post_page;

import com.example.jth.domain.post.Post;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class PostPageResponse {
   private final List<PostDTO> posts;
   private final int currentPage;
   private final int prevPage;
   private final int nextPage;
   private final int pageSize;
   private final int totalPage;
   private final long totalElements;


   public PostPageResponse(Page<Post> page, List<PostDTO> posts){
      this.posts=posts;

      currentPage=page.getNumber();
      nextPage=page.hasNext()?page.nextPageable().getPageNumber():Integer.MAX_VALUE;
      prevPage=page.hasPrevious()?page.previousPageable().getPageNumber():-1;
      pageSize=page.getSize();
      totalPage=page.getTotalPages();
      totalElements=page.getTotalElements();
   }
}
