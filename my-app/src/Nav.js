import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css"
import axios from 'axios';
import { UserIdDisPatch } from './App'

export default function Nav() {
    const [searchValue, setSearchValue] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { state, dispatch } = useContext(UserIdDisPatch);
    const navigate = useNavigate();

    useEffect(() => {
        if (state.userId !== 0) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [state.userId]);

    const logoClick = () => {
        navigate("/");
    };

    const handleChange = async (e) => {
        if (e.target.value === '') {
            setSearchValue(e.target.value);
            //searchValue.trim();
            navigate("/");
        }
        else {
            setSearchValue(e.target.value);
            //navigate(`/post?query=${e.target.value}`);
            navigate(`post?query=${e.target.value}&page=0&size=10&condition=TITLE`);
        }
        /*
        await axios
            .get(`http://13.124.86.174:8080/post?query=${e.target.value}&page=0&size=10&condition=${e.target.value}`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
            */
    };


    const boardWrite = () => {
        navigate("/post/write");
    }

    const loginClick = () => {
        navigate("/login");
    };

    const joinClick = () => {
        navigate("/join");
    };

    const myPageClick = () => {
        navigate(`/user/detail/${state.userId}`); //여기 바꿔
    };

    return (
        <div className="nav_box">
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
                        <button
                            type="button"
                            className="nav__write-btn"
                            onClick={boardWrite}
                            disabled={isLoggedIn === false || isLoggedIn === false ? true : false
                            }>
                            게시글 등록</button>
                    </div>

                    {isLoggedIn ? (
                        <button
                            type="button"
                            className="myPage-btn"
                            onClick={myPageClick}
                        >마이페이지</button>
                    ) : (
                        <>
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
                        </>
                    )}

                </form>

            </nav>
        </div>
    )

}
