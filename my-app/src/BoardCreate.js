import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./BoardCreate.css"; 

export default function BoardCreate(){ 
    const [Id, setId] = useState("");
    const navigate = useNavigate();
    
    const [board, setBoard] = useState({
        category: 'NOTICE', 
        title: '',
        content: '',
        year: '', 
        month: '', 
        day: '',
        userId: '' 
    });

    const { category, title, content, year, month, day, userId } = board;

    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const year = 2023; // 예시로 2023년으로 가정
        const month = 10; // 예시로 10월로 가정
        const day = 25; // 예시로 25일로 가정
    
        const created = new Date(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`).toISOString().split('T')[0]; 
    
        const userId = localStorage.getItem('userId');

        const postData = {
            category,
            title,
            content,
            created,
            userId
        };
    
        axios
        .post('http://15.164.107.242:8080/post/write', postData)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            if (error.response && error.response.data) {
                const { message, status } = error.response.data;
                alert(`에러 메시지: ${message}, 상태 코드: ${status}`);
            }
        });
    
        console.log(board); // 확인용 console
    };
    
    const writeclick = () => {
        navigate("/posts");
    }

    return (
        <div className="main-frame">
            <form onSubmit={handleSubmit} method="POST">
                <div>
                    <select 
                        className="select"
                        id="category" 
                        placeholder="카테고리"
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
                    <input 
                        className="title"
                        placeholder="제목을 입력하세요"
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={(e) => onChange(e)} 
                        name="title"
                        required 
                    />
                </div>
                <div>
                    <textarea 
                        className="content"
                        placeholder="내용입력"
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
                <button className="button"type="submit" onClick={writeclick}>게시</button>  
            </form>
        </div>
    )
}
