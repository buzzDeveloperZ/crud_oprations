import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import UserData from "./components/Users.js";
import UserCreate  from "./components/UserCreate";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<UserData/>} />
          <Route exact path="/create" element={<UserCreate/>}/>
          <Route exact path="/update/:id" element={<UserCreate/>}/>
        </Routes> 
      </div>
    </Router>
  );
};

export default App;
