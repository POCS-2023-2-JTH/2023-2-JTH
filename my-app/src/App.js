
import Join from "./join.js"

import Login from "./Login"

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Nav from "./Nav.js";
import SearchPage from "./SearchPage/index.js";

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/search" element={<SearchPage/> } />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
