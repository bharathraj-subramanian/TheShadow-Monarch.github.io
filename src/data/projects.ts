export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  year?: string;
  summary: string;
  points: string[];
  stack: string[];
  links: ProjectLink[];
  /** True when src/pages/work/[slug].astro should render a dedicated page. */
  caseStudy?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'bus-tracking',
    title: 'Campus bus tracking',
    summary: 'RFID logs every bus through the college gate, and a driver app reports where each bus is.',
    points: [
      'A Python service on a Raspberry Pi reads UHF RFID tags at the gate and records each bus coming in or going out.',
      'The driver app tracks location in the background on the driver’s phone. Web portals show the result.',
      'Built as one monorepo on Supabase and PostgreSQL.',
    ],
    stack: ['Python', 'React', 'React Native', 'Supabase', 'PostgreSQL', 'Raspberry Pi 5'],
    links: [],
    caseStudy: true,
  },
  {
    slug: 'diabetic-retinopathy',
    title: 'Diabetic retinopathy detector',
    summary: 'A computer vision model that classifies diabetic retinopathy severity from retinal images.',
    points: [
      'Deep learning classifier for retinopathy severity.',
      'Image preprocessing and CNN architectures chosen to improve classification accuracy.',
    ],
    stack: ['Python', 'CNN', 'Image preprocessing'],
    links: [],
  },
  {
    slug: 'offline-coding-assistant',
    title: 'Offline coding assistant',
    summary: 'A coding assistant that runs on the local GPU with no cloud calls.',
    points: [
      'CUDA-accelerated local inference, tuned for low latency without a network connection.',
    ],
    stack: ['CUDA', 'Local inference'],
    links: [],
  },
  {
    slug: 'face-fingerprint-unlock',
    title: 'Face recognition and remote fingerprint unlock',
    summary: 'A Windows authentication system that pairs face recognition with remote fingerprint unlock.',
    points: [
      'OpenCV face recognition using LBPH, with a Tkinter interface.',
      'Remote fingerprint unlock alongside the face check.',
    ],
    stack: ['Python', 'OpenCV (LBPH)', 'Tkinter'],
    links: [],
  },
  {
    slug: 'aegis-x',
    title: 'Aegis-X',
    year: '2026',
    summary: 'A cyber-noir community dashboard built for the SRM Madurai Deployathon.',
    points: [
      'Terminal-style boot sequence, a filterable mission list, a leaderboard and a simulated threat analyzer.',
      'Typed React components with Framer Motion for entrances and micro-interactions.',
    ],
    stack: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: [{ label: 'Source on GitHub', href: 'https://github.com/TheShadow-Monarch/project0/tree/HEAD/aegis-x' }],
  },
  {
    slug: 'eco-trace',
    title: 'EcoTrace',
    year: '2026',
    summary: 'A web app that turns everyday consumption into an ecological footprint.',
    points: [
      'Takes real units such as kWh and kilometres, charts the result and suggests ways to reduce it.',
      'Exports to JSON, CSV and PDF, with light and dark themes.',
    ],
    stack: ['JavaScript', 'HTML', 'CSS'],
    links: [
      { label: 'Live demo', href: 'https://theshadow-monarch.github.io/eco-trace/' },
      { label: 'Source on GitHub', href: 'https://github.com/TheShadow-Monarch/eco-trace' },
    ],
  },
];

export const archive = {
  text: 'Smaller exercises on GitHub: PyQt6 apps, data structures, a URL shortener and a socket chat.',
  links: [
    { label: 'Python_Projects', href: 'https://github.com/TheShadow-Monarch/Python_Projects' },
    { label: 'dungeon', href: 'https://github.com/TheShadow-Monarch/dungeon' },
  ],
};

export interface Part {
  name: string;
  body: string;
}

export const busParts: Part[] = [
  {
    name: 'Gate service',
    body: 'Python on a Raspberry Pi 5. It reads UHF tags from a Chainway UR4 reader over TCP, works out whether a bus is entering or leaving, and writes to SQLite first. It syncs to Supabase afterwards, so a dropped network loses nothing.',
  },
  {
    name: 'Driver app',
    body: 'Expo and React Native. Expo Location and Task Manager keep GPS running in the background, and an AsyncStorage queue holds positions while the phone is offline.',
  },
  {
    name: 'Web portals',
    body: 'React 18 and Vite apps for admin, student and gate staff. Leaflet draws the live map and Tailwind handles the styling.',
  },
  {
    name: 'Backend',
    body: 'Supabase on PostgreSQL with PostGIS for location queries, Realtime for live updates and Deno Edge Functions for server logic.',
  },
  {
    name: 'Sign-in',
    body: 'Students receive a one-time code through a Telegram bot and swap it for a custom JWT. Drivers use a phone OTP. Row Level Security limits what each role can read.',
  },
];
