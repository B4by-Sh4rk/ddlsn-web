import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainText from './components/MainText';
import About from './components/About';
import Contacts from './components/Contacts';
import Profile from './components/Profile';
import Merch from './components/Merch';
import ClassMage from './components/ClassMage';
import ClassSamurai from './components/ClassSamurai';
import ClassWarrior from './components/ClassWarrior';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
      </div>
    </Router>
  );
}

export default App;
