// Independent apps verified against their repositories and deployed interfaces.
// Betit's repository is private, so it intentionally has no public source link.
// Keep one record per project, in display order.
export const PROJECTS = [
    {
        id: 'betit',
        title: 'Betit',
        category: 'Sports & market data',
        description: 'A sports and cryptocurrency dashboard built with a React frontend and a Node.js API. The project was designed around match data, market charts and AI-assisted prediction analysis.',
        status: 'Database no longer supported — database-dependent features are unavailable.',
        technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
        features: [
            'Sports fixture and match detail interfaces',
            'Cryptocurrency market views and chart interfaces',
            'Credit-based prediction interface with analysis breakdowns'
        ],
        liveUrl: 'https://betit.gstefanopoulos.com/'
    },
    {
        id: 'oddly-alive',
        title: 'Oddly Alive',
        category: 'Interactive web experiment',
        description: 'An interactive house whose characters react to how you explore. A shared behavior engine connects the rooms, turning small gestures and discoveries into a playful, evolving browser experience.',
        technologies: ['React', 'TypeScript', 'Zustand', 'Matter.js', 'Vite'],
        features: [
            'Reactive characters, hidden discoveries and room-based games',
            'Physics interactions and opt-in synthesized audio',
            'Browser-local memory, keyboard controls and reduced motion'
        ],
        liveUrl: 'https://oddlyalive.gstefanopoulos.com/',
        repositoryUrl: 'https://github.com/DeStegio/oddly-alive'
    },
    {
        id: 'verimpact',
        title: 'Verimpact',
        category: 'Professional work · ITML',
        description: 'A modular platform for structured data and workflow management, built with the team at ITML. I work on the frontend — the forms and screens people spend their day in — and on connecting them to the Laravel API behind them.',
        technologies: ['JavaScript', 'jQuery', 'Bootstrap', 'Laravel']
    },
    {
        id: 'remote-training',
        title: 'Remote Training Platform',
        category: 'Professional work · Hellenic Army',
        description: 'Online training sessions for the Hellenic Army — secure logins, user roles, shared files and a raise-hand button, hosted on a server I set up myself.',
        technologies: ['PHP', 'JavaScript', 'MySQL']
    },
    {
        id: 'psychotherapy',
        title: 'Psychotherapy Support Platform',
        category: 'University thesis',
        description: 'My thesis: a site where therapists run live remote sessions, with tools built around the techniques they use and the privacy the subject demands.',
        technologies: ['PHP', 'MySQL', 'JavaScript']
    },
    {
        id: 'portfolio',
        title: 'This Portfolio',
        category: 'Personal website',
        description: 'My personal portfolio, built with React, Vite and handwritten CSS. An editorial layout for my work, experience and a direct way to get in touch.',
        technologies: ['React', 'Vite', 'CSS'],
        status: 'You are here'
    }
];
