
import Join from "./join.js"

import Login from "./Login"

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./Nav.js";
import SearchPage from "./SearchPage/index.js";
import React, {createContext, useReducer} from "react";

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
const initialState = { userId: "" };

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
  return (
    <UserIdDisPatch.Provider value={{state, dispatch}}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/post" element={<SearchPage />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </Router>
      </div>
    </UserIdDisPatch.Provider>
  );
}

export default App;
