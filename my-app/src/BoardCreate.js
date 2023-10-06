import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BoardCreate = () => {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        title: '',
        category: '카테고리1', 
        content: '',
        year: '', 
        month: '', 
        day: '',
        userId: '' 
    });

    const { title, category, content, year, month, day, userId } = board;

    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            const created = new Date(`${year}-${month}-${day}`).toISOString().split('T')[0]; 
    
            const postData = {
                title,
                category,
                content,
                created,
                userId
            };
    
            await axios.post(`/post/write`, postData).then((res) => {
                alert('등록되었습니다.');
            });
        } catch (error) { //백엔드로부터 에러 응답이 오면 프론트단에서 메시지와 상태 코드를 띄워줌
            if (error.response && error.response.data) {
                const { message, status } = error.response.data;
                alert(`에러 메시지: ${message}, 상태 코드: ${status}`);
            }
        }
    };

    return (
        <div>
            <h2>게시글 작성</h2>
            <div>
                <label>카테고리:</label>
                <select 
                    id="category" 
                    value={category} 
                    onChange={(e) => onChange(e)} 
                    name="category"
                    required 
                >
                    <option value="NOTICE">NOTICE</option>
                    <option value="COMMUNITY">COMMUNITY</option>
                    <option value="QUESTION">QUESTION</option>
                </select>
            </div>
            <div>
                <label>제목:</label>
                <input 
                    type="text" 
                    id="title" 
                    value={title} 
                    onChange={(e) => onChange(e)} 
                    name="title"
                    required 
                />
            </div>
            <div>
                <label htmlFor="postContent">내용:</label>
                <textarea 
                    id="content" 
                    value={content} 
                    onChange={(e) => onChange(e)} 
                    name="content"
                    rows="4" 
                    cols="50" 
                    required 
                />
            </div>
            <br />
            <button onClick={handleSubmit}>게시</button>
        </div>
    );
}

export default BoardCreate;
