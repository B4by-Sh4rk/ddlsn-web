import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainText from './components/MainText';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Profile from './pages/Profile';
import Merch from './pages/Merch';
import ClassMage from './pages/ClassMage';
import ClassSamurai from './pages/ClassSamurai';
import ClassWarrior from './pages/ClassWarrior';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainText />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/ClassMage" element={<ClassMage />} />
          <Route path="/ClassSamurai" element={<ClassSamurai />} />
          <Route path="/ClassWarrior" element={<ClassWarrior />} />
        </Routes>
        <Header />
      </div>
    </Router>
  );
}

export default App;
