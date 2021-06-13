import React from 'react'
import avatar from '../img/avatar.png';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio/project" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio/resume" exact activeClassName="active">
                            Resume
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio/transcript" exact activeClassName="active">
                            Transcript
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @2021 Neeteesh Kumar
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
