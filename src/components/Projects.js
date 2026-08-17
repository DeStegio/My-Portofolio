import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { GITHUB_URL } from '../data/profiles';

const PROJECTS = [
    {
        number: '01',
        title: 'Online Courses Platform',
        description: 'A web-based platform for managing online courses.',
        technologies: ['React', 'Node.js', 'Firebase'],
        link: GITHUB_URL // TODO: point to the real repository
    },
    {
        number: '02',
        title: 'Portfolio Website',
        description: 'My personal portfolio showcasing my projects and skills.',
        technologies: ['React', 'CSS'],
        link: 'https://destegio.github.io/My-Portofolio/'
    }
];

const FILTERS = ['All', 'React', 'Node.js', 'Firebase', 'CSS'];

const Projects = ({ onSelect }) => {
    const [filter, setFilter] = useState('All');

    const visibleProjects = filter === 'All'
        ? PROJECTS
        : PROJECTS.filter((project) => project.technologies.includes(filter));

    return (
        <section className="section section-light">
            <div className="section-head">
                <span className="label">03</span>
                <h1 className="section-title">Projects</h1>
                <p className="projects-count">
                    {visibleProjects.length} of {PROJECTS.length} shown
                </p>
            </div>

            <div className="filters">
                {FILTERS.map((name) => (
                    <button
                        key={name}
                        type="button"
                        className={name === filter ? 'filter active' : 'filter'}
                        onClick={() => setFilter(name)}
                    >
                        {name}
                    </button>
                ))}
            </div>

            <div className="divider" aria-hidden="true" />

            <ul className="project-list">
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </ul>

            <div className="projects-footer">
                <p>
                    More on <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">github.com/DeStegio</a>
                </p>
                <button type="button" className="btn btn-dark" onClick={() => onSelect('contact')}>
                    Work with me &#8594;
                </button>
            </div>
        </section>
    );
};

export default Projects;
