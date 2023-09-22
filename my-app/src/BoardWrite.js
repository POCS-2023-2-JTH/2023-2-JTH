import React, { useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BoardWrite(){ 
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        category: '', 
        title: '',
        contents: '',
    });

    const { title, category, contents } = board;

    const onChange = (event) => {
        const { value, name } = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const saveBoard = async () => {
        await axios.post(`//localhost:8080/post/write`, board).then((res) => {
            alert('등록되었습니다.');
            navigate('/board');
        });
    };

    const exitBoard = () => {
        navigate('/BoardWrite');
    };    

    return(
        <div className="board-mainFrame">
            <div className="board-subFrame">
                <div className="category-box">
                    <select name="category" value={category} onChange={onChange}>
                        <option value="카테고리1">카테고리1</option>
                        <option value="카테고리2">카테고리2</option>
                        <option value="카테고리3">카테고리3</option>
                    </select>
                </div>
                <div className="title-box">
                    <input type="text" name="title" value={title} onChange={onChange} placeholder="제목을 입력하세요"/>
                </div>
                <div className="contents-box">
                    <textarea name="contents" cols="30" rows="10" value={contents} onChange={onChange} placeholder="내용 입력"></textarea>
                </div>
                <div className="board-footer-box">
                    <div className="exit-box">
                        <button onClick={saveBoard}>
                            나가기
                        </button>
                    </div>
                    <div className="post-box">
                        <button onClick={exitBoard}>
                            게시하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
