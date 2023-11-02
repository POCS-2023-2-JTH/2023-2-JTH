import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import './Login.css';
import { useNavigate } from "react-router-dom";
import { UserIdDisPatch } from './App'

export default function Login() {
    const { state, dispatch } = useContext(UserIdDisPatch);

    useEffect(() => {
        console.log(state);
    }, [state]);

    const navigate = useNavigate();

    const baseUrl = "http://15.164.107.242:8080";
    //변수 초기화
    const [id, setId] = React.useState("");
    const [password, setPassword] = React.useState("");

    //오류메세지 상태 저장
    const [idMessage, setIdMessage] = React.useState("");
    const [passwordMessage, setPasswordMessage] = React.useState("");

    //유효성 검사를 위한 설정
    const [isId, setIsId] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);

    //아이디 유효성 검사
    const onChangeId = (e) => {
        const currentId = e.target.value;
        setId(currentId);
        const idRegExp = /^[a-zA-z0-9]{4,12}$/;

        if (!idRegExp.test(currentId)) {
            setIdMessage("4-12사이 대소문자 또는 숫자만 입력해주세요!");
            setIsId(false);
        }
        else {
            setIdMessage("");
            setIsId(true)
        }
    };

    //비밀번호 유효성 검사
    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp =
            /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        if (!passwordRegExp.test(currentPassword)) {
            setPasswordMessage(
                "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
            );
            setIsPassword(false);
        } else {
            setPasswordMessage("");
            setIsPassword(true);
        }
    };

    /*
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post(baseUrl + "/login", {
                userId: id,
                password: password
            })
            .then((response) => {
                console.log(response.data)
                dispatch({ type: 'SET_USER_ID', payload: response.data.userId });
                localStorage.setItem('userId', response.data.userId);
                console.log(state)
                loginClick();

            })
            .catch((error) => {
                console.log(error);
            });
    }
    */

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(baseUrl + "/login", {
                userId: id,
                password: password,
            });

            if (response.status === 200) {
                console.log("로그인 성공:", response.data);
                dispatch({ type: 'SET_USER_ID', payload: response.data.userId });
                localStorage.setItem('userId', response.data.userId);
                navigate("/");
            } else {
                console.log("로그인 실패:", response.data);
            }
        } catch (error) {
            console.log("로그인 요청 중 오류 발생:", error);
        }
    }

    /*
    const loginClick = () => {
        navigate("/");
    };
    */

    const joinClick = () => {
        navigate("/join");
    };

    return (
        <div className='login-mainFrame'>
            <div className='login-subFrame'>
                <div className='login-title'>부기 커뮤니티</div>
                <div>
                    <form onSubmit={handleSubmit} method='post'>
                        <div className='form-el'>
                            <input type='text' className='id' placeholder='아이디' name='id' value={id} onChange={onChangeId} />
                            <p className='message'>{idMessage}</p>
                        </div>
                        <br />
                        <div className='form-el'>
                            <input type='password' className='password' placeholder='비밀번호' name='password' value={password} onChange={onChangePassword} />
                            <p className='message'>{passwordMessage}</p>
                        </div>
                        <br />
                        <button
                            type='submit'
                            className='loginButton'
                            disabled={isId === false || isPassword === false ? true : false
                            }
                        >로그인</button>
                        <div className='join-box'>
                            아직 계정이 없으신가요?
                            <button
                                type='button'
                                className='joinButton'
                                onClick={joinClick} >회원가입</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
