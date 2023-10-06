import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css"


export default function Nav() {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const logoClick = () => {
        navigate("/");
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    };

    const loginClick = () => {
        navigate("/login");
    };

    const joinClick = () => {
        navigate("/join");
    };

    return (
        <nav className="nav">
            <div 
            className="nav__title"
            onClick={logoClick}
            >부기 커뮤니티
            </div>

            <input
                value={searchValue}
                onChange={handleChange}
                className='nav__input'
                type="text"
                placeholder='검색'
            />

            <form className="nav__form">
                <div className="nav__form-el1">
                    <button type="button" className="nav__write-btn">게시글 등록</button>
                </div>
                <div className="nav__form-el">
                    <button 
                    type="button" 
                    className="nav__login-btn"
                    onClick={loginClick}
                    >로그인</button>
                </div>
                <div className="nav__form-el">
                    <button 
                    type="button" 
                    className="nav__join-btn"
                    onClick={joinClick}
                    >회원가입</button>
                </div>
            </form>

        </nav>
    )

}
