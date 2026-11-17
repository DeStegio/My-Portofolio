import React from 'react';

const ProjectCard = ({ number, title, description, technologies, status, delay }) => (
    <li className="project-card" style={{ animationDelay: `${delay}s` }}>
        <span className="project-num" aria-hidden="true">{number}</span>

        <div className="project-info">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <ul className="tags" aria-label="Built with">
                {technologies.map((tech) => (
                    <li className="tag" key={tech}>{tech}</li>
                ))}
            </ul>
        </div>

        <span className="project-status">
            <span className="project-status-dot" aria-hidden="true" />
            {status}
        </span>
    </li>
);

export default ProjectCard;
