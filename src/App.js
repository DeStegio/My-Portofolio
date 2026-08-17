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

    // The accent is a CSS variable, so changing it here repaints the whole page
    return (
        <div className="container" style={{ '--accent': accent }}>
            <NavigationPanel
                selected={section}
                onSelect={setSection}
                accent={accent}
                onAccentChange={setAccent}
            />

            <main className="content">
                {section === 'home' && <Home onSelect={setSection} />}
                {section === 'resume' && <Resume />}
                {section === 'projects' && <Projects onSelect={setSection} />}
                {section === 'contact' && <Contact />}
            </main>
        </div>
    );
};

export default App;
