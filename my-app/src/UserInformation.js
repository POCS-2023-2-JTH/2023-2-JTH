import { React, useEffect, useState, useContext } from 'react'
import { UserIdDisPatch } from './App'
import axios from 'axios';
import "./UserInformation.css";

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
    const { state, dispatch } = useContext(UserIdDisPatch);
    const [user, setUser] = useState({});

    /*
    console.log("1번째");
    useEffect(() => {
        console.log(user+"아예안받아와지나????");
    }, [user]);
    console.log(state.userId);
*/

    /*
    useEffect(() => {
        fetch(`http://15.164.107.242:8080/user/detail/${state.userId}`, {
            method : "GET"
        }).then(res => res.json()).then(res => {
            setUser(res);
            console.log("설마여기도안되냐");
        });
    }, []);
    */
    /*
    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`http://15.164.107.242:8080/user/detail/${userId}`);
            
            setUser(response.data);
            console.log("이부분실행되나연");
        }

        const userId = localStorage.getItem('userId');
        const newState = {'userId': userId};
        dispatch({ type: 'SET_USER_ID', payload: newState });
        fetchPost();
    }, []);
    */

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const userId = localStorage.getItem('userId');

                if (userId) {
                    const response = await axios.get(`http://15.164.107.242:8080/user/detail/${userId}`);
                    setUser(response.data);
                }
            } catch (error) {
                console.error("오류 발생:", error);
            }
        }

        fetchPost();
    }, []);

    console.log(user);

    return (
        <div className='__userInformation-main'>
            <div className='user-title'>회원 상세정보</div>
            <div className="user-detail-main">
                <div className="user-box">
                    <div className='text'>이름</div>
                    <div className='__data-form' id='name'>{user.name}</div>
                </div>

                <div className="user-box">
                    <div className='text'>아이디</div>
                    <div className='__data-form' id='userId'>{user.userId}</div>
                </div>

                <div className="user-box">
                    <div className='text'>성별</div>
                    <div className='__data-form' id='gender'>{user.gender}</div>
                </div>
                <div className="user-box">
                    <div className='text'>전화번호</div>
                    <div className='__data-form' id='phoneNumber'>{user.phoneNumber}</div>
                </div>
            </div>
        </div>
    )
}
export default UserInformation