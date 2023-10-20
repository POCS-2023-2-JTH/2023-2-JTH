import React from 'react';

const BoardList = ({ posts }) => {
  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <div>
              <strong>제목:</strong> {post.title}
            </div>
            <div>
              <strong>카테고리:</strong> {post.category}
            </div>
            <div>
              <strong>내용:</strong> {post.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;



