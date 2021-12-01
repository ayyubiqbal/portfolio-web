import React from 'react';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Ayyub Iqbal</span>
                </h1>
                <p className="h-sub-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusamus iste in quas voluptate odio corporis error, incidunt minus id nisi vitae. Sequi, vero ut. Laborum in omnis alias harum.</p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default HomePage;