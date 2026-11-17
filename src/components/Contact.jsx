import React, { useState } from 'react';
import { EMAIL, PROFILES } from '../data/profiles';

const EMPTY_FORM = { name: '', email: '', message: '' };

const Contact = () => {
    const [form, setForm] = useState(EMPTY_FORM);
    const [sentName, setSentName] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSentName(form.name || 'friend');
    };

    const resetForm = () => {
        setForm(EMPTY_FORM);
        setSentName(null);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="section section-dark contact">
            <p className="contact-kicker">04 &#8212; Contact</p>
            <h1 className="contact-title">
                Let&#8217;s build something <em>together</em>.
            </h1>

            <div className="contact-grid">
                {sentName ? (
                    <div className="contact-sent">
                        <h3>Thanks, {sentName}.</h3>
                        <p>
                            This form is a front&#8209;end demo &#8212; hook it up to your inbox, or mail me directly.
                        </p>
                        <button type="button" className="link-button" onClick={resetForm}>
                            Write another
                        </button>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label htmlFor="name">Your name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Maria Papadopoulou"
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="you@company.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="3"
                                required
                                placeholder="What are you building?"
                                value={form.message}
                                onChange={handleChange}
                            />
                        </div>

                        <p className="form-note">Front&#8209;end demo &#8212; nothing is sent yet.</p>

                        <button type="submit" className="btn btn-accent">Send it &#8594;</button>
                    </form>
                )}

                <div className="contact-side">
                    <div>
                        <h2 className="label">Or email me</h2>
                        <div className="contact-email">
                            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            <button type="button" className="copy-button" onClick={copyEmail}>
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                        </div>
                    </div>

                    <div>
                        <h2 className="label">Elsewhere</h2>
                        <ul className="contact-links">
                            {PROFILES.map((profile) => (
                                <li key={profile.name}>
                                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                                        {profile.name}
                                        <span aria-hidden="true">&#8594;</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
