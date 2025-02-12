import React from 'react';
import meImage from '../assets/Icons/me.jpeg';
import instagramIcon from '../assets/Icons/new.png';
import facebookIcon from '../assets/Icons/fb.png';
import githubIcon from '../assets/Icons/github.png';
import linkedinIcon from '../assets/Icons/linkedin.png';
import homeIcon from '../assets/Icons/home.png';
import resumeIcon from '../assets/Icons/resume.png';
import projectIcon from '../assets/Icons/project.png';
import contactIcon from '../assets/Icons/contact.png';

const NavigationPanel = ({ onSelect }) => (
    <div className="leftside">
        {/* Photo Section */}
        <div className="photo">
            <img id="me" src={meImage} alt="A picture of me" />
            <p className="myname">George-Paraskevas Stefanopoulos</p>
        </div>

        {/* Social Icons */}
        <div className="social">
            <a href="https://www.instagram.com/giorgos.stefano/">
                <img className="icon" src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/gio.paranoid">
                <img className="icon" src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://github.com/DeStegio">
                <img className="icon" src={githubIcon} alt="Github" />
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
