import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import './App.css';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Header />
        <AboutSection />
        {/* Add more sections or components as needed */}
      </div>
  );
}

export default App;
