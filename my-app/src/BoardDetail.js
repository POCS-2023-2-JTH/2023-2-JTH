import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./BoardDetail.css";

export default function BoardDetail() {
    const [post, setPost] = useState(null);
    const { postId } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://15.164.107.242:8080/post/${postId}`);
                console.log(response.data);  // 응답 데이터를 콘솔에 출력
                setPost(response.data);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            }
        };
    
        console.log('fetching post...');  // 게시글을 불러오는 요청을 시작하는 메시지 출력
        fetchPost();
    }, [postId]);

    if (!post) return null; // 게시글 데이터가 없는 경우 아무것도 렌더링하지 않음

    return (
        <div className="board-box">
            <div className="board-title"> 
                <p>{post.title}</p>
            </div>
            <div className="board-info-main">
                <div className="board-info">
                    <p>{post.userName}</p>
                    <p className="board-created">{post.created}</p>
                </div>
                <div className="board-btn">
                    <button className="board-update">수정</button>
                    <button className="board-delete">삭제</button>
                </div>
            </div>
            <div className="board-content">
                <p>{post.content}</p>
            </div>
        </div>
    );
}