import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Upload from "./components/Upload";
import Dashboard from "./Components/Dashboard";
import Forums from "./Components/Fourms";
import Login from "./Components/Login";
import Activity from "./Components/Activity";
import "./index.css";
import Performance from "./Components/Performance";
import Indi from "./Components/Indi";
import Comp from "./Components/Comp";
import Career from "./Components/Career";
import Game from "./Components/Game";
import StudentDetails from "./Components/StudentDetails";
import Comm from "./Components/Comm";



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/login" element={<Login />} />
        <Route path="/show" element={<Activity />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/indi" element={<Indi />} />
        <Route path="/comp" element={<Comp />} />
        <Route path="/career" element={<Career />} />
        <Route path="/game" element={<Game />} />
        <Route path="/comm" element={<Comm />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
