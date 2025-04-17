import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Upload from './components/Upload';
import Dashboard from './components/Dashboard';
import Forums from './components/Forums';
import Login from '../components/Login';

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
 </Routes>
 <Footer />
 </Router>
 );
};

export default App;