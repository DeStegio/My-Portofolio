import React, { useRef } from 'react';
import TypingEffect from './TypingEffect';
import { EMAIL } from '../data/profiles';
import { STACK } from '../data/stack';

// Resting spot of the glow, as a share of the section (see .home-glow in the css)
const REST_X = 0.3;
const REST_Y = 0.42;

const Home = ({ onSelect }) => {
    const glowRef = useRef(null);

    // Move the glow by writing the transform straight to the element.
    // Going through state here would re-render the whole section on every
    // mouse move, which is what made the movement stutter.
    const moveGlow = (x, y) => {
        glowRef.current.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0)`;
    };

    const handleMouseMove = (event) => {
        const box = event.currentTarget.getBoundingClientRect();
        // How far the mouse is from the resting spot
        moveGlow(
            event.clientX - box.left - box.width * REST_X,
            event.clientY - box.top - box.height * REST_Y
        );
    };

    return (
        <section
            className="section home"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => moveGlow(0, 0)}
        >
            <div className="home-texture" aria-hidden="true" />
            <div className="home-glow" ref={glowRef} aria-hidden="true" />

            <div className="home-inner">
                <p className="home-kicker">Portfolio &#8212; 2026</p>
                <h1 className="home-title">
                    Hello, I am <em>George</em>
                </h1>

                <TypingEffect />

                <div className="home-actions">
                    <button type="button" className="btn btn-accent" onClick={() => onSelect('projects')}>
                        See the work
                    </button>
                    <button type="button" className="btn btn-outline" onClick={() => onSelect('contact')}>
                        Get in touch
                    </button>
                </div>
            </div>

            {/* The stack is listed twice so the animation can loop without a gap */}
            <div className="marquee" aria-hidden="true">
                <div className="marquee-track">
                    {[...STACK, ...STACK].map((tech, index) => (
                        <span className="marquee-item" key={index}>{tech}</span>
                    ))}
                </div>
            </div>

            <div className="home-contact">
                <h2 className="label">Reach me</h2>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
        </section>
    );
};

export default Home;
