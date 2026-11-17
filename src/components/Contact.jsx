import React, { useState } from 'react';
import { EMAIL, PROFILES, WEB3FORMS_ACCESS_KEY } from '../data/profiles';

const EMPTY_FORM = { name: '', email: '', message: '' };

const Contact = () => {
    const [form, setForm] = useState(EMPTY_FORM);
    const [sentName, setSentName] = useState(null);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSending(true);
        setError(false);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `Portfolio message from ${form.name}`,
                    from_name: 'Portfolio contact form',
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    // Honeypot: bots fill every field, people never see this one
                    botcheck: event.target.botcheck.checked
                })
            });
            const result = await response.json();

            if (!result.success) {
                throw new Error(result.message);
            }
            setSentName(form.name);
        } catch {
            setError(true);
        } finally {
            setSending(false);
        }
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
                            Your message is in my inbox. I&#8217;ll get back to you at {form.email}.
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

                        <input type="checkbox" name="botcheck" className="visually-hidden" tabIndex="-1" aria-hidden="true" />

                        {error && (
                            <p className="form-error" role="alert">
                                Something went wrong and the message didn&#8217;t send. Please try again, or
                                email me at {EMAIL}.
                            </p>
                        )}

                        <button type="submit" className="btn btn-accent" disabled={sending}>
                            {sending ? 'Sending…' : 'Send it →'}
                        </button>
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
