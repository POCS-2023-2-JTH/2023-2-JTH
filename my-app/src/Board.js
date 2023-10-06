import React, { useState } from 'react';
// import BoardCreate from './BoardCreate';
// import BoardList from './BoardList';

const Board = ({ title, category, content }) => {
//   const [posts, setPosts] = useState([]);

//   const handlePostSubmit = (newPost) => {
//     setPosts([...posts, newPost]);
//   }

  return (
    <div>
        <div>
            <h2>{title}</h2>
            <h5>{category}</h5>
            <hr />
            <p>{content}</p>
        </div>
    </div>
  );
}

export default Board;
