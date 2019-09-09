import React from 'react';
import './style.css';
import M from "materialize-css";

class Skills extends React.Component {
    componentDidMount() {
        var elem = document.querySelector('.carousel');
        var instance = M.Carousel.init(elem, { duration: 200 , indicators: true, padding: 75});
    };

    render() {
        return (
            <div id="skills">
                <div className="container">
                    <h3>Skills and Technologies</h3>
                    <div className="carousel">
                        <a className="carousel-item" href="#one!"><img src="https://www.tuannguyen.tech/wp-content/uploads/2019/01/react.png" /></a>
                        <a className="carousel-item" href="#two!"><img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png" /></a>
                        <a className="carousel-item" href="#three!"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" /></a>
                        <a className="carousel-item" href="#four!"><img src="https://s3-eu-west-1.amazonaws.com/devinterface-web/production/technologies/30/medium/mongodb111.png?1444285573" /></a>
                        <a className="carousel-item" href="#five!"><img src="https://apxsoftwares.com/wp-content/uploads/2019/07/2-2.png" /></a>
                        <a className="carousel-item" href="#six!"><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" /></a>
                        <a className="carousel-item" href="#seven!"><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" /></a>
                        <a className="carousel-item" href="#eight!"><img src="https://i.pinimg.com/originals/99/99/c1/9999c1a8c347b81c5cb5df967664c4c3.gif" /></a>
                        <a className="carousel-item" href="#nine!"><img src="http://www.superone.in/superone.in/wp-content/uploads/2017/07/bootstrap-logo.png" /></a>
                        <a className="carousel-item" href="#ten!"><img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" /></a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Skills;