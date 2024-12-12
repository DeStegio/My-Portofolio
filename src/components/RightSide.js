import React from 'react';
import Resume from './Resume';
import Home from './Home'

const RightSide = ({ selectedSection }) => (
    <div className="rightside">
        {selectedSection === 'home' && <Home />}
        {selectedSection === 'resume' && <Resume />}
        {selectedSection === 'projects' && <div>Projects coming soon...</div>}
        {selectedSection === 'contact' && <div>Contact me at stefanopoulos_giorgos@outlook.com</div>}
    </div>
);

export default RightSide;
