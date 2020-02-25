import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

class App extends React.Component {
  componentDidMount() {
    window.VANTA.NET({
      el: "#header",
      mouseControls: true,
      touchControls: true,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xf0a842,
      backgroundColor: 0x561fb9,
      spacing: 20.00,
      maxDistance: 25.00,
      points: 15.00,
    });
  }
  render() {
    return (
      <div id="app" className="App">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
