import React, { useState } from 'react';
import { STACK } from '../data/stack';

// TODO: replace the bracketed placeholders with the real entries
const TIMELINE = [
    {
        role: '[ Your role ]',
        when: '[ 2024 → now ]',
        detail: 'One or two lines on what you built and what it changed. Replace with your real experience.',
        tags: ['React']
    },
    {
        role: '[ Earlier role ]',
        when: '[ years ]',
        detail: 'Keep every entry to a single sentence — recruiters skim.',
        tags: ['JavaScript']
    },
    {
        role: 'Started coding',
        when: '[ year ]',
        detail: 'Where it began: the first thing you built and why you kept going.',
        tags: ['HTML & CSS']
    }
];

const Resume = () => {
    const [openRow, setOpenRow] = useState(0);

    const toggleRow = (index) => {
        setOpenRow(index === openRow ? -1 : index);
    };

    return (
        <section className="section section-light">
            <div className="resume-head">
                <div className="section-head">
                    <span className="label">02</span>
                    <h1 className="section-title">Resume</h1>
                </div>
                {/* TODO: link the real CV file */}
                <a className="btn btn-dark-outline" href="#cv">Download CV (PDF)</a>
            </div>

            <div className="divider" aria-hidden="true" />

            <p className="resume-intro">
                Self&#8209;taught, curious, and happiest when something finally <em>works</em>.
            </p>

            <div className="resume-grid">
                <h2 className="label">Timeline</h2>
                <div className="timeline">
                    {TIMELINE.map((row, index) => {
                        const open = index === openRow;

                        return (
                            <div className={open ? 'timeline-row open' : 'timeline-row'} key={row.role}>
                                <button
                                    type="button"
                                    className="timeline-button"
                                    aria-expanded={open}
                                    onClick={() => toggleRow(index)}
                                >
                                    <span className="timeline-dot" aria-hidden="true" />
                                    <span className="timeline-role">
                                        {row.role}
                                        <span className="timeline-when">{row.when}</span>
                                    </span>
                                    <span className="timeline-sign" aria-hidden="true">{open ? '−' : '+'}</span>
                                </button>

                                {open && (
                                    <div className="timeline-detail">
                                        <p>{row.detail}</p>
                                        <ul className="tags">
                                            {row.tags.map((tag) => (
                                                <li className="tag" key={tag}>{tag}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <h2 className="label">Stack</h2>
                <ul className="stack">
                    {STACK.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                <h2 className="label">Education</h2>
                <div>
                    <p className="education-degree">[ Degree ]</p>
                    <p className="education-school">[ Institution &#183; years ]</p>
                </div>
            </div>
        </section>
    );
};

export default Resume;
