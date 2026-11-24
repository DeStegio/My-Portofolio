import React from 'react';

const ProjectCard = ({ id, title, category, description, technologies, status, features, liveUrl, repositoryUrl }) => (
    <li className="project-card">
        <article aria-labelledby={`project-${id}`}>
            <div className="project-info">
                <p className="project-category">{category}</p>
                <h2 className="project-title" id={`project-${id}`}>{title}</h2>
                <p className="project-description">{description}</p>
                {status && <p className="project-status">{status}</p>}
                {features && (
                    <ul className="project-features" aria-label={`${title} key features`}>
                        {features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                )}
                <ul className="tags" aria-label={`${title} technologies`}>
                    {technologies.map((tech) => <li className="tag" key={tech}>{tech}</li>)}
                </ul>
                {(liveUrl || repositoryUrl) && (
                    <div className="project-actions">
                        {liveUrl && (
                            <a className="btn btn-dark" href={liveUrl} target="_blank" rel="noopener noreferrer">
                                Visit Project<span className="visually-hidden">: {title} (opens in a new tab)</span>
                            </a>
                        )}
                        {repositoryUrl && (
                            <a className="project-source" href={repositoryUrl} target="_blank" rel="noopener noreferrer">
                                GitHub<span className="visually-hidden">: {title} source (opens in a new tab)</span>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    </li>
);

export default ProjectCard;
