import React from 'react';
import Particles from 'react-particles-js';

//import components
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

class App extends React.Component {
 
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
