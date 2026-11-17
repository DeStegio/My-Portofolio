import React, { useState } from 'react';
import NavigationPanel from './components/NavigationPanel';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ACCENTS } from './data/accents';
import './index.css';

const App = () => {
    const [section, setSection] = useState('home');
    const [accent, setAccent] = useState(ACCENTS[0].color);

    // On phones the menu sits at the bottom of the screen, so a section could
    // otherwise open half scrolled down
    const selectSection = (id) => {
        setSection(id);
        window.scrollTo(0, 0);
    };

    // The accent is a CSS variable, so changing it here repaints the whole page
    return (
        <div className="container" style={{ '--accent': accent }}>
            <NavigationPanel
                selected={section}
                onSelect={selectSection}
                accent={accent}
                onAccentChange={setAccent}
            />

            <main className="content">
                {section === 'home' && <Home onSelect={selectSection} />}
                {section === 'resume' && <Resume />}
                {section === 'projects' && <Projects onSelect={selectSection} />}
                {section === 'contact' && <Contact />}
            </main>
        </div>
    );
};

export default App;
