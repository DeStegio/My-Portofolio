import React from 'react';
import meImage from '../assets/Icons/me.jpeg';
import { PROFILES } from '../data/profiles';
import { ACCENTS } from '../data/accents';

const SECTIONS = [
    { id: 'home', label: 'Home', number: '01' },
    { id: 'resume', label: 'Resume', number: '02' },
    { id: 'projects', label: 'Projects', number: '03' },
    { id: 'contact', label: 'Contact', number: '04' }
];

const NavigationPanel = ({ selected, onSelect, accent, onAccentChange }) => (
    <aside className="sidebar">
        <div className="sidebar-head">
            <div className="sidebar-photo">
                <img src={meImage} alt="Portrait of George-Paraskevas Stefanopoulos" />
            </div>
            {/* Kept in its own box so the header can sit it next to the photo on phones */}
            <div className="sidebar-identity">
                <p className="sidebar-name">George&#8209;Paraskevas Stefanopoulos</p>
                <p className="sidebar-role">Junior Web Developer</p>
            </div>
        </div>

        <nav className="nav" aria-label="Site sections">
            {SECTIONS.map((section) => (
                <button
                    key={section.id}
                    type="button"
                    className={section.id === selected ? 'nav-item active' : 'nav-item'}
                    onClick={() => onSelect(section.id)}
                >
                    <span className="nav-number">{section.number}</span>
                    <span className="nav-label">
                        {section.label}
                        {section.id === selected && <span className="nav-line" />}
                    </span>
                </button>
            ))}
        </nav>

        <div className="sidebar-bottom">
            <p className="label">Profiles</p>
            <ul className="profiles">
                {PROFILES.map((profile) => (
                    <li key={profile.name}>
                        <a href={profile.url} target="_blank" rel="noopener noreferrer">
                            {profile.name}
                        </a>
                    </li>
                ))}
            </ul>
            <p className="label">Available for work</p>

            <div className="accents">
                {ACCENTS.map((option) => (
                    <button
                        key={option.name}
                        type="button"
                        className={option.color === accent ? 'accent-dot active' : 'accent-dot'}
                        style={{ backgroundColor: option.color }}
                        aria-label={`${option.name} accent colour`}
                        aria-pressed={option.color === accent}
                        onClick={() => onAccentChange(option.color)}
                    />
                ))}
            </div>
        </div>
    </aside>
);

export default NavigationPanel;
