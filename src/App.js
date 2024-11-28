import React, { useState } from 'react';
import NavigationPanel from './components/NavigationPanel';
import RightSide from './components/RightSide';
import './index.css';

const App = () => {
    const [selectedSection, setSelectedSection] = useState('home');

    return (
        <div className="container">
            <NavigationPanel onSelect={setSelectedSection} />
            <RightSide selectedSection={selectedSection} />
        </div>
    );
};

export default App;
