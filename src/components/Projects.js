import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { GITHUB_URL } from '../data/profiles';

// Projects without a link are work I did for someone else, so the code stays private
const PROJECTS = [
    {
        number: '01',
        title: 'Verimpact',
        description: 'A modular platform for structured data and workflow management, built with the team at ITML: application logic and validations in Laravel, and screens that update without a reload.',
        technologies: ['PHP', 'Laravel', 'MySQL', 'jQuery'],
        link: null
    },
    {
        number: '02',
        title: 'Remote Training Platform',
        description: 'Online training sessions for the Hellenic Army — secure logins, user roles, shared files and a raise-hand button, hosted on a server I set up myself.',
        technologies: ['PHP', 'JavaScript', 'MySQL'],
        link: null
    },
    {
        number: '03',
        title: 'Psychotherapy Support Platform',
        description: 'My thesis: a site where therapists run live remote sessions, with tools built around the techniques they use and the privacy the subject demands.',
        technologies: ['PHP', 'MySQL', 'JavaScript'],
        link: null
    },
    {
        number: '04',
        title: 'This Portfolio',
        description: 'The site you are reading. React, hand-written CSS, no UI library.',
        technologies: ['React', 'CSS'],
        link: 'https://destegio.github.io/My-Portofolio/'
    }
];

// Built from the projects themselves so a filter can never point at nothing
const FILTERS = ['All', ...new Set(PROJECTS.flatMap((project) => project.technologies))];

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
