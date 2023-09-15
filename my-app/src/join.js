import React from 'react'
import { useState } from "react";
import axios from 'axios';

export default function Join(){ 
    const baseUrl = "http://localhost:8080";

    //초기값 세팅
    const [Name, setName] = useState("");
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordConfirm, setPasswordConfirm] = React.useState("");
    const [Gender, setGender] = useState("male"); // 기본값을 남성으로 설정
    const [Tel, setTel] = useState("");

    // 오류메세지 상태 저장
    const [idMessage, setIdMessage] = React.useState("");
    const [passwordMessage, setPasswordMessage] = React.useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = React.useState("");
    const [phoneMessage, setPhoneMessage] = React.useState("");

    //유효성 검사 
    const [isId, setIsId] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
    const [isPhone, setIsPhone] = React.useState(false);

    //유효성 검사 함수 
    const onChangeName = (e) => { //이름
        setName(e.currentTarget.value)
    }

    const onChangeId = (e) => { //아이디
        const currentId = e.target.value;
        setId(currentId);
        const idRegExp = /^[a-zA-z0-9]{4,12}$/;
     
        if (!idRegExp.test(currentId)) {
          setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
          setIsId(false);
        } else {
          setIdMessage("사용가능한 아이디 입니다.");
          setIsId(true);
        }
    };

    const onChangePassword = (e) => { //비밀번호 
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
          setPasswordMessage("안전한 비밀번호 입니다.");
          setIsPassword(true);
        }
    };
     
    const onChangePasswordConfirm = (e) => { //비밀번호 확인
    const currentPasswordConfirm = e.target.value;
        setPasswordConfirm(currentPasswordConfirm);
        if (Password !== currentPasswordConfirm) {
          setPasswordConfirmMessage("떼잉~ 비밀번호가 똑같지 않아요!");
          setIsPasswordConfirm(false);
        } else {
          setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
          setIsPasswordConfirm(true);
        }
    };

    const onChangePhone = (getNumber) => {
        const currentPhone = getNumber;
        setTel(currentPhone);
        const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
     
        if (!phoneRegExp.test(currentPhone)) {
          setPhoneMessage("올바른 형식이 아닙니다!");
          setIsPhone(false);
        } else {
          setPhoneMessage("사용 가능한 번호입니다:-)");
          setIsPhone(true);
        }
    };

    const addHyphen = (e) => { //전화번호 확인
        const currentNumber = e.target.value;
        setTel(currentNumber);
        if (currentNumber.length === 3 || currentNumber.length === 8) {
            setTel(currentNumber + "-");
          onChangePhone(currentNumber + "-");
        } else {
          onChangePhone(currentNumber);
        }
    };
     
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post(baseUrl + "/" + "join", {
                userName:Name,
                userId:Id, 
                userPw:Password, 

                userTel:Tel
            })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return(
        <div className="join-mainFrame">
            <div className="join-subFrame">
                <form onSubmit={handleSubmit}>
                    <div className="join-name">
                        <label>이름</label>
                        <input
                            type="text"
                            className="join-name-input"
                            placeholder="이름"
                            name="name"
                            value={Name}
                            onChange={onChangeName} 
                        />
                    </div>

                    <div className="join-id">
                        <label>아이디</label>
                        <input
                            type="text"
                            className="join-id-input"
                            placeholder="아이디"
                            name="id"
                            value={Id}
                            onChange={onChangeId}
                        />
                        <p className="message"> {idMessage} </p>
                    </div>

                    <div className="join-pw">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            className="join-pw-input"
                            placeholder="비밀번호"
                            name="pw"
                            value={Password}
                            onChange={onChangePassword}
                        />
                        <p className="message">{passwordMessage}</p>
                    </div>

                    <div className="join-pw-check">
                        <label>비밀번호확인</label>
                        <input
                            type="password"
                            className="join-pw-check-input"
                            placeholder="비밀번호확인"
                            name="pw-check"
                            value={PasswordConfirm}
                            onChange={onChangePasswordConfirm}
                        />
                        <p className="message">{passwordConfirmMessage}</p>
                    </div>

                    <div className="join-gender">
                        <label>성별</label>
                        <select name="gender"
                        name="gender"
                        value={Gender}
                        onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="male">남성</option>
                            <option value="female">여성</option>
                        </select>
                    </div>

                    <div className="join-tel">
                        <label>전화번호</label>
                        <input
                            type="text"
                            className="join-tel-input"
                            placeholder="전화번호"
                            name="tel-check"
                            value={Tel}
                            onChange={addHyphen}
                        />
                         <p className="message">{phoneMessage}</p>
                    </div>

                    <div className="join-btn">
                        <button type="submit">가입하기</button>
                    </div>
                </form>
            </div>
        </div>
    )
}