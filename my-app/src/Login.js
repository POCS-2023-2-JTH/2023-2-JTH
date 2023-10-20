import React from 'react'
import axios from 'axios';

export default function Login() {
    //const baseUrl = "http://13.124.86.174:8080";
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post("/" + "login", {
                userId: id,
                userPw: password
            })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='login-mainFrame'>
            <div className='login-subFrame'>
                <div className='title'>부기 커뮤니티</div>
                <div>
                    <form onSubmit={handleSubmit}>
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
                        <button type='submit' className='loginButton' disabled = {isId === false || isPassword === false ? true : false}>로그인</button>
                        <div>
                            아직 계정이 없으신가요?
                            <button type='button' className='joinButton' >회원가입</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
