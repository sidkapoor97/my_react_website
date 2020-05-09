import React from 'react';
import './navbar.css';
import nav_icon from './navlogo.svg'

export default function navbar() {

    return (
        <div class="navbar-spacer">
        <nav className="nav-bar">
            <ul className="nav-links">
                <li className="nav-items"><a href="#skills" className="nav-link">Co-Curriculars</a></li>
                <li className="nav-items"><a href="#internships" className="nav-link">Internships</a></li>
                <li className="nav-items"><a href="#projects" className="nav-link">Projects</a></li>
                <li className="nav-items"><a href="#education" className="nav-link">Education</a></li>
                <li className="nav-items"><a href="#about_me" className="nav-link">About-Me</a></li> 
                <li className="img-list"><div class=""><img src={nav_icon} class="img-fluid" alt=""/></div></li>
            </ul>

        </nav>
        </div>
    )
}
