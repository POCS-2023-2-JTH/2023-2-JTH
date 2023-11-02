import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigation } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css"

export default function SearchPage() {

    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }
    let query = useQuery();
    const searchTerm = query.get("query")
    console.log(searchTerm);

    useEffect(() => {
        if (searchTerm) {
            fetchSearchPosts(searchTerm);
        }
    }, [searchTerm])

    const fetchSearchPosts = async (searchTerm) => {

        try {
            const request = await axios.get(`http://15.164.107.242:8080/post?query=${searchTerm}&page=0&size=10&condition=TITLE`);

            setSearchResults(request.data.posts); // 이건 api나오고 위에 콘솔 찍어보고 나중에 변경
            console.log(request.data.posts);
        } catch (error) {
            console.log("error", error);
        }

    }

    const postClicked = (postId) => {
        navigate(`/post/${postId}`)
    }

    return (
        <div>
            <h2>게시글 목록</h2>
            <ul>
                {searchResults.length > 0 ? (
                    searchResults.map((post, index) => (
                        <li key={index}>
                            <div className='post_div' onClick={() => postClicked(post.id)}>
                                <p className='__post-category'>{post.category}</p>
                                <p className='__post-title'>{post.title}</p>
                                <p className='__post-content'>{post.content}</p>
                                <p className='__post-userName'>{post.userName}</p>
                                <p className='__post-created'>{post.created}</p>
                            </div>

                        </li>
                    ))
                ) : (
                    <p>검색 결과 없음</p>
                )}
            </ul>
        </div>
    );
}
