import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from "./join"; 
import Login from "./Login"; 
import BoardCreate from "./BoardCreate"; 
import BoardDetail from "./BoardDetail"; 
import Board from "./Board";

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Board />} />
        <Route path="/post/write" element={<BoardCreate />} />
        <Route path="/post/:postId" element={<BoardDetail />} />
      </Routes>
  </Router>
  );
}

export default App;