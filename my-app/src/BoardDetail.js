import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./BoardDetail.css";

export default function BoardDetail() {
    const [post, setPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);  // 편집 가능 여부를 나타내는 state
    const { postId } = useParams();

    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://15.164.107.242:8080/post/${postId}`);
            console.log(response.data);  // 응답 데이터를 콘솔에 출력
            setPost(response.data);
        } catch (error) {
            console.error('Failed to fetch post:', error);
        }
    };

    useEffect(() => {
        console.log('fetching post...');  // 게시글을 불러오는 요청을 시작하는 메시지 출력
        fetchPost();
    }, [postId]);

    const startEditing = () => {
        setIsEditing(true);
    };

    const moveToUpdate = async () => {
        if (!isEditing) {
            startEditing();
            return;
        }
        
        try {
            const response = await axios.post('http://15.164.107.242:8080/post/update', {
                postId: postId,
                category: post.category,  // 카테고리는 변경되지 않음
                title: post.title,  // 수정된 제목
                content: post.content  // 수정된 내용
            });
            
            if (response.status === 200) {
                alert('게시글이 성공적으로 수정되었습니다.');
                setIsEditing(false);  // 수정이 완료되면 편집 모드를 종료
                fetchPost();  // 수정 완료 후 게시글 정보를 다시 불러옴
            }
        } catch (error) {
            console.error('Failed to update post:', error);
        }
    };

    if (!post) return null; // 게시글 데이터가 없는 경우 아무것도 렌더링하지 않음

    return (
        <div className="board-box">
            <div className="board-title"> 
                {isEditing ? 
                    <input type="text" defaultValue={post.title} onChange={(e) => setPost({...post, title: e.target.value})} /> :
                    <p>{post.title}</p>
                }
            </div>
            <div className="board-info-main">
                <div className="board-info">
                    <p>{post.userName}</p>
                    <p className="board-created">{post.created}</p>
                </div>
                <div className="board-btn">
                    <button onClick={moveToUpdate} className="board-update">{isEditing ? "완료" : "수정"}</button>
                    <button className="board-delete">삭제</button>
                </div>
            </div>
            <div className="board-content">
                {isEditing ? 
                    <textarea defaultValue={post.content} onChange={(e) => setPost({...post, content: e.target.value})} /> :
                    <p>{post.content}</p>
                }
            </div>
        </div>
    );
}
