import React from 'react';
import './style.css';
import M from "materialize-css";

class Skills extends React.Component {
    componentDidMount() {
        var elem = document.querySelector('.carousel');
        var instance = M.Carousel.init(elem, { duration: 150 , indicators: true, padding: 75});
        setInterval(() => {
            instance.next();
        }, 4000)
    };

    render() {
        return (
            <div id="skills">
                <div className="container">
                    <h3>Skills & Technologies</h3>
                    <div className="carousel">
                        <a className="carousel-item" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src="https://www.tuannguyen.tech/wp-content/uploads/2019/01/react.png" alt="react"/></a>
                        <a className="carousel-item" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png" alt="node"/></a>
                        <a className="carousel-item" href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript"/></a>
                        <a className="carousel-item" href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><img src="https://s3-eu-west-1.amazonaws.com/devinterface-web/production/technologies/30/medium/mongodb111.png?1444285573" alt="mongodb"/></a>
                        <a className="carousel-item" href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer"><img src="https://apxsoftwares.com/wp-content/uploads/2019/07/2-2.png" alt="mysql"/></a>
                        <a className="carousel-item" href="https://www.w3schools.com/html/html5_intro.asp" target="_blank" rel="noopener noreferrer"><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="html"/></a>
                        <a className="carousel-item" href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" alt="css"/></a>
                        <a className="carousel-item" href="https://jquery.com/" target="_blank" rel="noopener noreferrer"><img src="https://i.pinimg.com/originals/99/99/c1/9999c1a8c347b81c5cb5df967664c4c3.gif" alt="jquery"/></a>
                        <a className="carousel-item" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><img src="http://www.superone.in/superone.in/wp-content/uploads/2017/07/bootstrap-logo.png" alt="bootstrap"/></a>
                        <a className="carousel-item" href="https://github.com/gljacobs/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" alt="github"/></a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Skills;