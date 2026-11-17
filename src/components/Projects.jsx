import React from 'react';
import ProjectCard from './ProjectCard';
import { GITHUB_URL } from '../data/profiles';

const PROJECTS = [
    {
        number: '01',
        title: 'Verimpact',
        description: 'A modular platform for structured data and workflow management, built with the team at ITML. I work on the frontend — the forms and screens people spend their day in — and on connecting them to the Laravel API behind them.',
        technologies: ['JavaScript', 'jQuery', 'Bootstrap', 'Laravel'],
        status: 'Case study soon'
    },
    {
        number: '02',
        title: 'Remote Training Platform',
        description: 'Online training sessions for the Hellenic Army — secure logins, user roles, shared files and a raise-hand button, hosted on a server I set up myself.',
        technologies: ['PHP', 'JavaScript', 'MySQL'],
        status: 'Case study soon'
    },
    {
        number: '03',
        title: 'Psychotherapy Support Platform',
        description: 'My thesis: a site where therapists run live remote sessions, with tools built around the techniques they use and the privacy the subject demands.',
        technologies: ['PHP', 'MySQL', 'JavaScript'],
        status: 'Case study soon'
    },
    {
        number: '04',
        title: 'BetIT',
        description: 'An AI-powered sports predictions platform.',
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python'],
        status: 'Case study soon'
    },
    {
        number: '05',
        title: 'This Portfolio',
        description: 'My personal portfolio, the site you are on now.',
        technologies: ['React', 'CSS'],
        status: 'You are here'
    }
];

const Projects = ({ onSelect }) => (
    <section className="section section-light">
        <div className="section-head">
            <span className="label">03</span>
            <h1 className="section-title">Projects</h1>
        </div>

        <p className="projects-intro">
            A selection of what I&#8217;ve been building. Full <em>case studies</em> are on the way.
        </p>

        <div className="divider projects-divider" aria-hidden="true" />

        <ul className="project-list">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={project.title} delay={0.16 + index * 0.06} {...project} />
            ))}
        </ul>

        <div className="case-studies">
            <div className="case-studies-text">
                <h2 className="label">Case studies</h2>
                <p className="case-studies-title">Coming soon</p>
                <p className="case-studies-body">
                    Detailed write&#8209;ups of selected work will be published here. In the
                    meantime, I&#8217;m happy to discuss my experience directly.
                </p>
            </div>
            <div className="case-studies-actions">
                <button type="button" className="btn btn-dark" onClick={() => onSelect('contact')}>
                    Get in touch &#8594;
                </button>
                <a className="case-studies-link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    GitHub<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
            </div>
        </div>
    </section>
);

export default Projects;
