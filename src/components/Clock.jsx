import React, { useEffect, useState } from 'react';

// A visitor can be anywhere, so the clock is pinned to my own timezone
const TIME_ZONE = 'Europe/Athens';
const REFRESH = 30000; // half a minute is close enough for a clock without seconds

// Whatever I am most likely doing at that hour
const MOODS = [
    { until: 6, text: 'still awake, still typing' },
    { until: 12, text: 'first coffee of the day' },
    { until: 18, text: 'deep in the code' },
    { until: 24, text: 'shipping something small' }
];

const readTime = () => new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
}).format(new Date());

// "21:14" → 21, and midnight comes back as 24 in some browsers
const moodFor = (time) => {
    const hour = Number(time.slice(0, 2)) % 24;
    return MOODS.find((mood) => hour < mood.until).text;
};

const Clock = () => {
    const [time, setTime] = useState(readTime);

    useEffect(() => {
        const timer = setInterval(() => setTime(readTime()), REFRESH);
        return () => clearInterval(timer);
    }, []);

    return (
        <p className="clock">
            <span className="clock-dot" aria-hidden="true" />
            Athens &#183; {time} &#183; {moodFor(time)}
        </p>
    );
};

export default Clock;
