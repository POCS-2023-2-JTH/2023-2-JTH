import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Board.css";

export default function Board() {
    const [posts, setPosts] = useState(null);
    const navigate = useNavigate();

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

    if (!posts) return null;

    const handlePostClick = (id) => {
        navigate(`/post/${id}`);
    }

    return (
        <div className="board-box">
            <div className="board-total-box">
                <p className="board-all">
                    전체
                </p>
                {/* <p className="board-num"> 
                숫자
              </p> */}
            </div>
            <div className="warning-box">
                <p className="warning-text">
                    *비방이나 욕설이 담긴 게시물, 게인정보가 포함된 게시물, 신고된 게시물의 경우 별도의 안내 없이 미노출 처리될 수 있습니다.
                </p>
            </div>
            <div className="real-board-box">
                <div className="line"></div>
                <div className="board-info-box">
                    <div className="real-board-name">
                        <p className="num-text">번호</p>
                    </div>
                    <div className="real-board-category">
                        <p className="cate-text">카테고리</p>
                    </div>
                    <div className="real-board-title">
                        <p className="title-text">제목</p>
                    </div>
                    <div className="real-board-userName">
                        <p className="userName-text">작성자</p>
                    </div>
                    <div className="real-board-created">
                        <p className="created-text">등록일</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="line-list">
                    {posts.map((post) => (
                        <div key={post.id} onClick={() => handlePostClick(post.id)}>
                            <span>{post.id}</span>
                            <span>{post.category}</span>
                            <span className="title-span">{post.title}</span>
                            <span>{post.userName}</span>
                            <span>{post.created}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
