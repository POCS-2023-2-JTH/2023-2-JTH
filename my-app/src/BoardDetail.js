import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function BoardDetail() {
    const [post, setPost] = useState(null);
    const { postId } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://15.164.107.242:8080/post/${postId}`);
                console.log(response.data);  // 응답 데이터를 콘솔에 출력
                setPost(response.data);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            }
        };
    
        console.log('fetching post...');  // 게시글을 불러오는 요청을 시작하는 메시지 출력
        fetchPost();
    }, [postId]);

    if (!post) return null; // 게시글 데이터가 없는 경우 아무것도 렌더링하지 않음

    return (
        <div>
            <p>id: {post.id}</p>
            <p>category: {post.category}</p>
            <p>title: {post.title}</p>
            <p>content: {post.content}</p>
            <p>created: {post.created}</p>
            <p>userId: {post.userId}</p>
            <p>userName: {post.userName}</p>
        </div>
    );
}


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// export default function BoardDetail() {
//     const [post, setPost] = useState(null);
//     const [token, setToken] = useState(null);
//     const { postId } = useParams();

//     useEffect(() => {
//         const login = async () => {
//             try {
//                 const response = await axios.post('http://15.164.107.242:8080/login', {
//                     userId: "mmm333",
//                     password: "Anminjae55%"
//                 });
                
//                 const token = response.data.token;
//                 setToken(token);  // token 값을 저장
//                 console.log(response.data+"response.data야!!");
//                 // setToken(response.data.token);
//             } catch (error) {
//                 console.error('Failed to login:', error);
//             }
//         };

//         login();
//     }, []);

//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const response = await axios.get(`http://15.164.107.242:8080/post/${postId}`, {
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     }
//                 });

//                 console.log(response.data);  // 응답 데이터를 콘솔에 출력

//                 setPost(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch post:', error);
//             }
//         };

//         console.log('useEffect called');  // useEffect 훅이 호출될 때 콘솔에 메시지 출력
//         console.log('token:', token);  // 토큰 값 출력

//         if (token) {
//             console.log('fetchPost called');  // fetchPost 함수가 호출될 때 콘솔에 메시지 출력
//             fetchPost();
//         }
//     }, [postId, token]);

//     if (!post) return console.log("암것두 업다 ㅋ "); //확인용

//     return (
//         <div>
//             <p>id: {post.id}</p>
//             <p>category: {post.category}</p>
//             <p>title: {post.title}</p>
//             <p>content: {post.content}</p>
//             <p>created: {post.created}</p>
//             <p>userId: {post.userId}</p>
//             <p>userName: {post.userName}</p>
//         </div>
//     );
// }
