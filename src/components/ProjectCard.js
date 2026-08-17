import React from 'react';

const ProjectCard = ({ number, title, description, technologies, link }) => (
    <li className="project-card">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <span className="project-num" aria-hidden="true">{number}</span>

            {/* Placeholder until the real screenshots are ready */}
            <span className="project-thumb" aria-hidden="true">drop screenshot</span>

            <span className="project-info">
                <span className="project-title">{title}</span>
                <span className="project-description">{description}</span>
                <span className="tags">
                    {technologies.map((tech) => (
                        <span className="tag" key={tech}>{tech}</span>
                    ))}
                </span>
            </span>

            <span className="project-view">View &#8594;</span>
        </a>
    </li>
);

export default ProjectCard;
