import React from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';
import { GITHUB_URL } from '../data/profiles';

const Projects = ({ onSelect }) => (
    <section className="section section-light projects">
        <div className="section-head">
            <span className="label">03</span>
            <h1 className="section-title">Projects</h1>
        </div>
        <p className="projects-intro">
            From data-rich dashboards to a house with a mind of its own.
            A selection of what I&#8217;ve been <em>building</em>.
        </p>

        <ul className="project-list">
            {PROJECTS.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </ul>

        <div className="project-contact">
            <div>
                <h2>Have something in mind?</h2>
                <p>I&#8217;m happy to talk through the work or hear about your next project.</p>
            </div>
            <div className="project-actions">
                <button type="button" className="btn btn-dark" onClick={() => onSelect('contact')}>
                    Get in touch
                </button>
                <a className="project-source" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    More on GitHub<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
            </div>
        </div>
    </section>
);

export default Projects;
