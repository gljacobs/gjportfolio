import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Gallery from './components/Gallery';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Gallery />
    </div>
  );
}

export default App;
