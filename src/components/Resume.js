import React, { useState } from 'react';
import { STACK } from '../data/stack';

// Drop the PDF in public/ under this name and the download button starts working
const CV_URL = `${process.env.PUBLIC_URL}/george-stefanopoulos-cv.pdf`;

const TIMELINE = [
    {
        role: 'Web Developer',
        when: 'ITML · Mar 2025 → now',
        detail: 'The frontend of the Verimpact platform: the screens people work in, built with JavaScript, jQuery and Bootstrap, and wired to the Laravel API so the data moves both ways without a reload.',
        tags: ['JavaScript', 'jQuery', 'Bootstrap', 'Laravel']
    },
    {
        role: 'Web Developer',
        when: 'Hellenic Army · 2023 → 2024',
        detail: 'A platform for running training sessions online — secure logins, user roles, shared files and a raise-hand button — on a server I set up and kept running myself.',
        tags: ['PHP', 'JavaScript', 'AJAX']
    },
    {
        role: 'E-commerce Product Specialist',
        when: 'En Drasei Vouno kai Thalassa · 2021 → 2023',
        detail: 'Kept the online shop honest: new products, accurate stock, suppliers chased on time, and categories that made sense to whoever was browsing.',
        tags: ['E-commerce']
    },
    {
        role: 'Waiter & barman',
        when: 'Pantheon 1900, Sabbia Beach Bar · 2014 → 2021',
        detail: 'Seven years of reading people quickly and staying calm when ten things happen at once. It turns out both transfer to a standup.',
        tags: ['Under pressure']
    }
];

const TRAINING = [
    { name: 'Laravel & PHP Mastery', meta: 'Udemy · 2025' },
    { name: 'The Complete Web Development Bootcamp', meta: 'Udemy · 2024 · 60 hours' },
    { name: 'The Git & GitHub Bootcamp', meta: 'Udemy · 17 hours' }
];

const LANGUAGES = [
    { name: 'Greek', meta: 'Mother tongue' },
    { name: 'English', meta: 'B2 · reading, writing, speaking' }
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
                <a className="btn btn-dark-outline" href={CV_URL} download>Download CV (PDF)</a>
            </div>

            <div className="divider" aria-hidden="true" />

            <p className="resume-intro">
                Informatics engineer by degree, web developer by choice, and happiest when
                something finally <em>works</em>.
            </p>

            <div className="resume-grid">
                <h2 className="label">Timeline</h2>
                <div className="timeline">
                    {TIMELINE.map((row, index) => {
                        const open = index === openRow;

                        return (
                            <div className={open ? 'timeline-row open' : 'timeline-row'} key={row.when}>
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
                    <p className="education-degree">
                        Integrated Master&#8217;s (MEng) in Informatics &amp; Computer Engineering
                    </p>
                    <p className="education-school">
                        University of West Attica &#183; 2014&#8211;2023 &#183; GPA 7.07/10
                    </p>
                    <p className="education-note">
                        Thesis: a web platform for remote psychotherapy sessions, designed with a
                        senior lecturer from the University of Lincoln.
                    </p>
                </div>

                <h2 className="label">Training</h2>
                <ul className="entries">
                    {TRAINING.map((course) => (
                        <li key={course.name}>
                            <span className="entry-name">{course.name}</span>
                            <span className="entry-meta">{course.meta}</span>
                        </li>
                    ))}
                </ul>

                <h2 className="label">Languages</h2>
                <ul className="entries">
                    {LANGUAGES.map((language) => (
                        <li key={language.name}>
                            <span className="entry-name">{language.name}</span>
                            <span className="entry-meta">{language.meta}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Resume;
