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
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 50,
                                density: {
                                    enable: true,
                                    value_area: 1000
                                }
                            },
                            color: {
                                value: '#f0a842'
                            },
                            shape: {
                                type: 'circle',
                                stroke: {
                                    width: 1,
                                    color: '#f0a842'
                                },
                                polygon: {
                                    nb_sides: 5
                                },
                            },
                            opacity: {
                                value: 0.8,
                                random: false,
                                anim: {
                                    enable: false,
                                    speed: 1,
                                    opacity_min: 0.1,
                                    sync: false
                                }
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    enable: false,
                                    speed: 40,
                                    size_min: 0.1,
                                    sync: false
                                }
                            },
                            line_linked: {
                                enable: true,
                                distance: 150,
                                color: '#ffffff',
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 6,
                                direction: 'none',
                                random: false,
                                straight: false,
                                out_mode: 'out',
                                bounce: false,
                                attract: {
                                    enable: false,
                                    rotateX: 600,
                                    rotateY: 1200
                                }
                            }
                        },
                        interactivity: {
                            detect_on: 'canvas',
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: 'repulse'
                                },
                                onclick: {
                                    enable: true,
                                    mode: 'repulse'
                                },
                                resize: true
                            },
                            modes: {
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                },
                            }
                        },
                        retina_detect: true
                    }}
                />
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
