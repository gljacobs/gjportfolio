import React from 'react';
import './style.css';

function Gallery() {
    return (
        <div id="gallery">
            <div className="container">
                <h3>My Projects</h3>
                <div className="row">
                    <div className="card work col">
                        <img src="./images/camp.png" alt="Camp Dad" />
                        <h5><a target="_blank" href="https://gljacobs.github.io/project1/">Camp Dad</a>
                            <a className="gitlink" href="https://github.com/gljacobs/project1" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <img src="./images/gbooks.png" alt="GBooks-Search" />
                        <h5><a target="_blank" href="https://limitless-reaches-94201.herokuapp.com/">Google Book Search</a>
                            <a className="gitlink" href="https://github.com/gljacobs/google-books-search" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <img src="./images/login.png" alt="EZ Login" />
                        <h5><a target="_blank" href="https://ezlogin.herokuapp.com">EZ Login</a>
                            <a className="gitlink" href="https://github.com/gljacobs/simple-login/" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <img src="./images/santa.png" alt="Secret Santa" />
                        <h5><a target="_blank" href="https://gljacobs.github.io/secret-santa/">Secret Santa</a>
                            <a className="gitlink" href="https://github.com/gljacobs/secret-santa" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <img src="./images/clicky.png" alt="Clicky-Game" />
                        <h5><a target="_blank" href="https://gljacobs.github.io/clicky-game/">Clicky Game</a>
                            <a className="gitlink" href="https://github.com/gljacobs/clicky-game" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <img src="./images/drg.png" alt="Dragon Egg Game" />
                        <h5><a target="_blank" href="https://gljacobs.github.io/dragon-egg-game/">Dragon Egg Hunt</a>
                            <a className="gitlink" href="https://github.com/gljacobs/dragon-egg-game" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <img src="./images/friend.png" alt="Friend Finder" />
                        <h5><a target="_blank" href="https://evening-lowlands-50463.herokuapp.com/">Friend Finder</a>
                            <a className="gitlink" href="https://github.com/gljacobs/friendfinder" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <img src="./images/gymate.png" alt="Gymate" />
                        <h5><a target="_blank" href="https://gymate123.herokuapp.com">Gymate</a>
                            <a className="gitlink" href="https://github.com/gljacobs/project2" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <img src="./images/gif.png" alt="GifTastic" />
                        <h5><a target="_blank" href="https://gljacobs.github.io/GifTastic/">GifTastic</a>
                            <a className="gitlink" href="https://github.com/gljacobs/giftastic" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <img src="./images/burger.png" alt="Burger" />
                        <h5><a target="_blank" href="https://damp-lowlands-77901.herokuapp.com/?burger_name=Plain+Burger&devoured=0">Eat The Burger</a>
                            <a className="gitlink" href="https://github.com/gljacobs/burger" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <img src="./images/word.png" alt="Guessing Game" />
                        <h5><a target="_blank" href="https://gljacobs.github.io/Psychic-Game/">Guessing Game</a>
                            <a className="gitlink" href="https://github.com/gljacobs/psychic-game" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <img src="./images/todo.png" alt="React ToDo" />
                        <h5><a target="_blank" href="https://gljacobs.github.io/todolist/">React ToDo</a>
                            <a className="gitlink" href="https://github.com/gljacobs/todolist" target="_blank"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;