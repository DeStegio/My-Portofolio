import React from 'react';
import meIcon from '../Icons/me.png'; 
import newIcon from '../Icons/new.png'; 
import fbIcon from '../Icons/fb.png'; 
import gitIcon from '../Icons/github.png'; 
import linkedinIcon from '../Icons/linkedin.png'; 
import homeIcon from '../Icons/home.png'; 
import resumeIcon from '../Icons/resume.png'; 
import projectIcon from '../Icons/project.png'; 
import contactIcon from '../Icons/contact.png'; 





const NavigationPanel = ({ onSelect }) => (
    <div className="leftside">
        {/* Photo Section */}
        <div className="photo">
            <img id="me" src={meIcon} alt="A picture of me" />
            <p className="myname">George-Paraskevas Stefanopoulos</p>
        </div>

        {/* Social Icons */}
        <div className="social">
            <a href="https://www.instagram.com/giorgos.stefano/">
                <img className="icon" src={newIcon} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/gio.paranoid">
                <img className="icon" src={fbIcon} alt="Facebook" />
            </a>
            <a href="https://github.com/DeStegio">
                <img className="icon" src={gitIcon} alt="Github" />
            </a>
            <a href="https://www.linkedin.com/in/george-stefanopoulos-9a28a2182/">
                <img className="icon" src={linkedinIcon} alt="LinkedIn" />
            </a>
        </div>

        {/* Navigation Menu */}
        <div className="navigation">
            <ul className="navlist">
                <li onClick={() => onSelect('home')}>
                    <img className="navicon" src={homeIcon} alt="Home" />
                    <a className="navclick">Home</a>
                </li>
                <li onClick={() => onSelect('resume')}>
                    <img className="navicon" src={resumeIcon} alt="Resume" />
                    <a className="navclick">Resume</a>
                </li>
                <li onClick={() => onSelect('projects')}>
                    <img className="navicon" src={projectIcon} alt="Projects" />
                    <a className="navclick">Projects</a>
                </li>
                <li onClick={() => onSelect('contact')}>
                    <img className="navicon" src={contactIcon} alt="Contact" />
                    <a className="navclick">Contact</a>
                </li>
            </ul>
        </div>
    </div>
);

export default NavigationPanel;
