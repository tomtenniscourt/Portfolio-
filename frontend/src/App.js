import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Tictactoe from "./Tictactoe";
import Joke from "./Joke";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div class="static-content">
          <h1>Tom Court</h1>
          <img
            class="profile-picture"
            src="https://i.imgur.com/JrRNitO.jpeg"
            alt="Tom's profile picture"
            style={{ width: "200px", height: "auto" }}
          />
          <h2>Software Engineer</h2>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tictactoe" element={<Tictactoe />} />
          <Route path="/joke" element={<Joke />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
