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
                        <a className="carousel-item" href="#three!"><img src="data:image/png;base64,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" /></a>
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