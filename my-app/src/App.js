import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from "./join"; 
import Login from "./Login"; 
import BoardCreate from "./BoardCreate"; 
import BoardList from "./BoardList"; 

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/write" element={<BoardCreate />} />
        {/* <Route path="/boardList" element={<BoardList />} /> */}
        {/* <Route path="/board" element={<Board />} /> */}
      </Routes>
  </Router>
  );
}

export default App;
