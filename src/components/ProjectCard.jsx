import React from 'react';

const ProjectCard = ({ number, title, description, technologies, link }) => {
    const content = (
        <>
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

            <span className="project-view">{link ? 'View →' : 'Not public'}</span>
        </>
    );

    // Work projects have nowhere to send people, so they stay a plain card
    return (
        <li className="project-card">
            {link ? (
                <a className="project-body" href={link} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            ) : (
                <div className="project-body">{content}</div>
            )}
        </li>
    );
};

export default ProjectCard;
