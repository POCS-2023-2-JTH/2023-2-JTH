import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Board.css";

export default function Board() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://15.164.107.242:8080/posts?page=0&size=10');
                setPosts(response.data.posts);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };

        fetchPosts();
    }, []);

    if (!posts) return null;  // posts가 아직 정의되지 않았다면 아무것도 렌더링하지 않음

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <p>번호:{post.id}</p>
                    <p>카테고리:{post.category}</p>
                    <p>제목:{post.title}</p>
                    <p>작성자: {post.userName}</p>
                    <p>등록일: {post.created}</p>
                </div>
            ))}
        </div>
    );
}
