import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";

export default function SearchPage() {

    const [searchResults, setSearchResults] = useState([]);
    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }
    let query = useQuery();
    const searchTerm = query.get("q")
    console.log(searchTerm);

    useEffect(() => {
        if (searchTerm) {
            fetchSearchPosts(searchTerm);
        }
    }, [searchTerm])

    const fetchSearchPosts = async (searchTerm) => {
        try {
            const request = await axios.get(`/post?query=${searchTerm}&page=0&size=10&condition=TITLE`)
            console.log(request);
            setSearchResults(request.posts) // 이건 api나오고 위에 콘솔 찍어보고 나중에 변경
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
