import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Login from "./Login.js";
import Register from "./Register.js";
import back from "./background1.jpg";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${back})`,
        height: "100%",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Register" exact element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
