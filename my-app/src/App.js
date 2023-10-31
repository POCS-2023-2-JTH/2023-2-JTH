
import Join from "./Join"

import Login from "./Login"

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./Nav.js";
import SearchPage from "./SearchPage/index.js";
import React, { createContext, useReducer } from "react";
import UserInformation from "./UserInformation";
import BoardCreate from "./BoardCreate";
import BoardDetail from "./BoardDetail";


const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

    </div>
  )
}

// 액션 유형 정의
const SET_USER_ID = "SET_USER_ID";

// 초기 상태 정의
const initialState = { userId: 0 };

// 리듀서 함수
const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return { ...state, userId: action.payload };
    default:
      return state;
  }
};

export const UserIdDisPatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);
  console.log(state);
  return (
    <UserIdDisPatch.Provider value={{ state, dispatch }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/post" element={<SearchPage />} />
              <Route path="/post/:postId" element={<BoardDetail />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/user/detail/:id" element={<UserInformation />} />
            <Route path="/post/write" element={<BoardCreate />} />

          </Routes>
        </Router>
      </div>
    </UserIdDisPatch.Provider>
  );
}

export default App;
