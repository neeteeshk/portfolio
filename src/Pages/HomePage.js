import React from 'react';
import {faCodiepie, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Neeteesh Kumar.</span>
                </h1>
                <p className="h-sub-text">
                I'm a software engineer in search of my niche, open to every opportunity and learning that comes my way. Currently working at Amazon in delivering impactful projects and ideas.
                I like to develop the system through which I can impact the large amount of users. Also I like the challenges to scale it up for sustaining the load without impacting the user experience. I like to explore about the DS and Algorithms, which is one of the reason I like to participate in competitive programming.
                </p>
                <div className="icons">
                    <a href = "https://www.linkedin.com/in/ntsk626/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </a>
                    <a href="https://github.com/neeteeshk" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://codeforces.com/profile/neeteesh205" className="icon-holder">
                        <FontAwesomeIcon icon={faCodiepie} className="icon yt"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
