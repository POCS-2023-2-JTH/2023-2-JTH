import {React, useEffect, useState} from 'react'
import './UserInformation.css'


function UserInformation() {
    /*
    const user = {
        "name": "김김민재",
        "userId": "mj2252",
        "password": "Anminjae55!",
        "gender": "MALE",
        "phoneNumber": "010-2222-3333"
    }
    */
    const { user, setUser } = useState([]);

    useEffect(() => {
        fetch(`http://13.124.86.174:8080/user/detail/${3}`, {
            method : "GET"
        }).then(res => res.json()).then(res => {
            setUser(res);
        });
    }, []);
    
    return (
        <div className='__userInformation-main'>
            <div className='title'>회원 상세정보</div>
            <div>
                <div>이름</div>
                <div className='__data-form' id='name'>{user.name}</div>

                <div>아이디</div>
                <div className='__data-form' id='userId'>{user.userId}</div>

                <div>비밀번호</div>
                <div className='__data-form' id='password'>{user.password}</div>

                <div>성별</div>
                <div className='__data-form' id='gender'>{user.gender}</div>

                <div>전화번호</div>
                <div className='__data-form' id='phoneNumber'>{user.phoneNumber}</div>
            </div>
            <button type='button'>수정</button>
            <button type='button'>삭제</button>
        </div>
    )
}
export default UserInformation