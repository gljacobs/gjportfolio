import React from 'react';
import './style.css';

//import img assets
import camp from '../../images/camp.png';
import gbooks from '../../images/gbooks.png';
import ccv1 from '../../images/ccv1.png';
import ezchat from '../../images/ezchat.png';
import login from '../../images/login.png';
import santa from '../../images/santa.png';
import clicky from '../../images/clicky.png';
import drg from '../../images/drg.png';
import friend from '../../images/friend.png';
import hangman from '../../images/hangman.png';
import gymate from '../../images/gymate.png';
import gif from '../../images/gif.png';
import burger from '../../images/burger.png';
import todo from '../../images/todo.png';
import word from '../../images/word.png';



function Gallery() {
    return (
        <div id="gallery">
            <div className="container">
                <h3>My Projects</h3>
                <div className="row">
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/project1/"><img src={camp} alt="Camp Dad" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/project1/">Camp Dad</a>
                            <a className="gitlink" href="https://github.com/gljacobs/project1" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://limitless-reaches-94201.herokuapp.com/"><img src={gbooks} alt="GBooks-Search" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://limitless-reaches-94201.herokuapp.com/">Book Search</a>
                            <a className="gitlink" href="https://github.com/gljacobs/google-books-search" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://chitchatv1.herokuapp.com/"><img src={ccv1} alt="ChitChatv1" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://chitchatv1.herokuapp.com/">ChitChat</a>
                            <a className="gitlink" href="https://github.com/gljacobs/chitchat" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://morning-scrubland-86999.herokuapp.com/"><img src={ezchat} alt="EZ Chat" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://morning-scrubland-86999.herokuapp.com/">EZ Chat</a>
                            <a className="gitlink" href="https://github.com/gljacobs/ezchat" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://ezlogin.herokuapp.com"><img src={login} alt="EZ Login" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://ezlogin.herokuapp.com">EZ Login</a>
                            <a className="gitlink" href="https://github.com/gljacobs/simple-login/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/secret-santa/"><img src={santa} alt="Secret Santa" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/secret-santa/">Secret Santa</a>
                            <a className="gitlink" href="https://github.com/gljacobs/secret-santa" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/clicky-game/"><img src={clicky} alt="Clicky-Game" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/clicky-game/">Clicky Game</a>
                            <a className="gitlink" href="https://github.com/gljacobs/clicky-game" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/dragon-egg-game/"><img src={drg} alt="Dragon Egg Game" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/dragon-egg-game/">Dragon Egg Hunt</a>
                            <a className="gitlink" href="https://github.com/gljacobs/dragon-egg-game" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://evening-lowlands-50463.herokuapp.com/"><img src={friend} alt="Friend Finder" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://evening-lowlands-50463.herokuapp.com/">Friend Finder</a>
                            <a className="gitlink" href="https://github.com/gljacobs/friendfinder" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/gljacobs/Word-Guess"><img src={hangman} alt="Letter Guess" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://github.com/gljacobs/Word-Guess">Node Hangman</a>
                            <a className="gitlink" href="https://github.com/gljacobs/Word-Guess" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/gljacobs/project2"><img src={gymate} alt="Gymate" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://gymate123.herokuapp.com">Gymate</a>
                            <a className="gitlink" href="https://github.com/gljacobs/project2" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/GifTastic/"><img src={gif} alt="GifTastic" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/GifTastic/">GifTastic</a>
                            <a className="gitlink" href="https://github.com/gljacobs/giftastic" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://damp-lowlands-77901.herokuapp.com/"><img src={burger} alt="Burger" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://damp-lowlands-77901.herokuapp.com/">Eat The Burger</a>
                            <a className="gitlink" href="https://github.com/gljacobs/burger" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/Psychic-Game/"><img src={word} alt="Guessing Game" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/Psychic-Game/">Guessing Game</a>
                            <a className="gitlink" href="https://github.com/gljacobs/psychic-game" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                    <div className="card work col">
                        <a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/todolist/"><img src={todo} alt="React ToDo" /></a>
                        <h5><a target="_blank" rel="noopener noreferrer" href="https://gljacobs.github.io/todolist/">React ToDo</a>
                            <a className="gitlink" href="https://github.com/gljacobs/todolist" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square" /></a>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;