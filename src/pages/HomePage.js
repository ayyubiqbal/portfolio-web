import React from 'react';
// import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Ayyub Iqbal</span>
                </h1>
                <p className="h-sub-text">I am a web developer (MERN Stack) who enjoys connecting the dots. I have strong technical skills and an academic background in Computer Technology.

                    I like to implement my knowledge to build innovative and ingenious products for consumers.</p>
                <div className="resume-btn">
                    {/* <button className="btn">Resume</button> */}
                    <form action="https://drive.google.com/file/d/1QbFTrjKGeyhKF_Dq_2CbN73jZlV989GH/view?usp=sharing">
                        <input className="btn" type="submit" value="Resume" />
                    </form>
                </div>
                {/* <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                </div> */}
            </header>
        </div>
    );
};

export default HomePage;