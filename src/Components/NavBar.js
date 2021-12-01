import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../img/avatar.png';

const NavBar = () => {
    return (
        <div>
            <div className="NavBar">
                <nav className="nav">
                    <div className="profile">
                        <img src={avatar} alt="" />
                    </div>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink to="/" exact activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" exact activeClassName="active">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolios" exact activeClassName="active">
                                Portfolios
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blogs" exact activeClassName="active">
                                Blogs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" exact activeClassName="active">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <footer className="footer">
                        <p> &copy; Copyright 2022</p>
                    </footer>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;