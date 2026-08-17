import React, { useEffect, useState } from 'react';

const TEXT = "I'm a junior web developer, building for the web.";
const TYPING_SPEED = 70;
const DELETING_SPEED = 30;
const PAUSE = 2500; // how long the full sentence stays on screen

const TypingEffect = () => {
    const [length, setLength] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        let delay = deleting ? DELETING_SPEED : TYPING_SPEED;
        if (!deleting && length === TEXT.length) {
            delay = PAUSE;
        }

        const timer = setTimeout(() => {
            if (deleting) {
                if (length === 0) {
                    setDeleting(false);
                } else {
                    setLength(length - 1);
                }
            } else if (length === TEXT.length) {
                setDeleting(true);
            } else {
                setLength(length + 1);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [length, deleting]);

    return (
        <p className="typing">
            {TEXT.slice(0, length)}
            <span className="typing-cursor" />
        </p>
    );
};

export default TypingEffect;
