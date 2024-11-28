import React from 'react';
import Resume from './Resume';

const RightSide = ({ selectedSection }) => (
    <div className="rightside">
        {selectedSection === 'home' && <div>Welcome to my portfolio!</div>}
        {selectedSection === 'resume' && <Resume />}
        {selectedSection === 'projects' && <div>Projects coming soon...</div>}
        {selectedSection === 'contact' && <div>Contact me at stefanopoulos_giorgos@outlook.com</div>}
    </div>
);

export default RightSide;
