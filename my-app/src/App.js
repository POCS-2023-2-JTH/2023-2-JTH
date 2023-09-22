import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Join from "./join"; 
import Login from "./Login"; 
import BoardWrite from "./BoardWrite"; 

function App() {
  return (
  <Router>
      <Routes>
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/boardwrite" element={<BoardWrite />} />
      </Routes>
  </Router>
  );
}

export default App;
