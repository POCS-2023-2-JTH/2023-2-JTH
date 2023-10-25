import React from 'react'
import { useState } from "react";
import axios from 'axios';

export default function BoardCreate(){ 
    const [Id, setId] = useState("");
    
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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
        
    //     try {
    //         const created = new Date(`${year}-${month}-${day}`).toISOString().split('T')[0]; 
    
    //         const postData = {
    //             category,
    //             title,
    //             content,
    //             created,
    //             userId
    //         };
    
    //         await axios
    //         .post('http://13.124.86.174:8080/post/write', postData)
    //         .then((response) => {
    //             console.log(response.data)
    //         });
    //     } catch (error) { //백엔드로부터 에러 응답이 오면 프론트단에서 메시지와 상태 코드를 띄워줌
    //         if (error.response && error.response.data) {
    //             const { message, status } = error.response.data;
    //             alert(`에러 메시지: ${message}, 상태 코드: ${status}`);
    //         }
    //     }
    //     console.log(board); //확인용 console
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     const created = new Date(`${year}-${month}-${day}`).toISOString().split('T')[0]; 
    
    //     const postData = {
    //         category,
    //         title,
    //         content,
    //         created,
    //         userId
    //     };
    
    //     axios
    //     .post('http://13.124.86.174:8080/post/write', postData)
    //     .then((response) => {
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         if (error.response && error.response.data) {
    //             const { message, status } = error.response.data;
    //             alert(`에러 메시지: ${message}, 상태 코드: ${status}`);
    //         }
    //     });
    
    //     console.log(board); // 확인용 console
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const year = 2023; // 예시로 2023년으로 가정
        const month = 10; // 예시로 10월로 가정
        const day = 25; // 예시로 25일로 가정
    
        const created = new Date(`${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`).toISOString().split('T')[0]; 
    
        const postData = {
            category,
            title,
            content,
            created,
            userId
        };
    
        axios
        .post('http://13.124.86.174:8080/post/write', postData)
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
    
    

    return (
        <div>
            <form onSubmit={handleSubmit} method="POST">
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
                    <label>내용:</label>
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
                <button type="submit">게시</button>  
            </form>
        </div>
    )
}
