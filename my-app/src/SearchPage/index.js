import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
            const request = await axios.get(`http://15.164.107.242:8080/post?query=${searchTerm}&page=0&size=10&condition=${searchTerm}`);
            
            setSearchResults(request.data); // 이건 api나오고 위에 콘솔 찍어보고 나중에 변경
            console.log(request.data);
        } catch (error) {
            console.log("error", error);
        }
        
    }

    return (
        <div>
            <div>검색결과</div>
        </div>
    )
}
