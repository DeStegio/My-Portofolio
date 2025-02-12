import React from 'react';
import ProjectCard from './ProjectCard';

const Resume = () => {
    const projects = [
        {
            title: "Online Courses Platform",
            description: "A web-based platform for managing online courses.",
            technologies: "React, Node.js, Firebase",
            link: "#"
        },
        {
            title: "Portfolio Website",
            description: "My personal portfolio showcasing my projects and skills.",
            technologies: "React, CSS",
            link: "#"
        }
    ];

    return (
        <div className="resume">
            <h1>George Stefanopoulos</h1>
            <p>Junior Web Developer passionate about creating impactful digital solutions.</p>

            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
};

export default Resume;
