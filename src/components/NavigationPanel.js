import React from 'react';

const NavigationPanel = ({ onSelect }) => (
    <div className="leftside">
        {/* Photo Section */}
        <div className="photo">
            <img id="me" src="/Icons/me.jpeg" alt="A picture of me" />
            <p className="myname">George-Paraskevas Stefanopoulos</p>
        </div>

        {/* Social Icons */}
        <div className="social">
            <a href="https://www.instagram.com/giorgos.stefano/">
                <img className="icon" src="/Icons/new.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/gio.paranoid">
                <img className="icon" src="/Icons/fb.png" alt="Facebook" />
            </a>
            <a href="https://github.com/DeStegio">
                <img className="icon" src="/Icons/github.png" alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/george-stefanopoulos-9a28a2182/">
                <img className="icon" src="/Icons/linkedin.png" alt="LinkedIn" />
            </a>
        </div>

        {/* Navigation Menu */}
        <div className="navigation">
            <ul className="navlist">
                <li onClick={() => onSelect('home')}>
                    <img className="navicon" src="/Icons/home.png" alt="Home" />
                    <a className="navclick">Home</a>
                </li>
                <li onClick={() => onSelect('resume')}>
                    <img className="navicon" src="/Icons/resume.png" alt="Resume" />
                    <a className="navclick">Resume</a>
                </li>
                <li onClick={() => onSelect('projects')}>
                    <img className="navicon" src="/Icons/project.png" alt="Projects" />
                    <a className="navclick">Projects</a>
                </li>
                <li onClick={() => onSelect('contact')}>
                    <img className="navicon" src="/Icons/contact.png" alt="Contact" />
                    <a className="navclick">Contact</a>
                </li>
            </ul>
        </div>
    </div>
);

export default NavigationPanel;
