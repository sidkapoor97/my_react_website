import React from 'react';
import './footer.css';

export default function footer() {

    return (
        <div className="footer-app">
            <footer>
                <div className="footer-div">
                    <br />
                <p className="contact-me">Contact Me at - <a href="mailto:siddharthakapoor2@gmail.com" alt=""  rel="noopener noreferrer"> Gmail</a></p>
                <p className="contact-me"><a href="https://github.com/sidkapoor97" alt=""  rel="noopener noreferrer"> GitHub</a></p>
                <p className="contact-me">Source Code for this website - <a href="" alt="https://github.com/sidkapoor97/my_react_website"  rel="noopener noreferrer">My React Website</a></p>
                </div>
            </footer>
        </div>
    )
};