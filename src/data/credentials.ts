export interface Credential {
  date: string;
  title: string;
  issuer: string;
  detail?: string;
  verify?: string;
}

export interface CredentialGroup {
  name: string;
  items: Credential[];
}

// Each group is newest first. Only freeCodeCamp has a public verification URL.
export const credentials: CredentialGroup[] = [
  {
    name: 'Machine learning and edge hardware',
    items: [
      { date: '2026-06', title: 'Intro to Machine Learning', issuer: 'Kaggle' },
      { date: '2026-06', title: 'Getting Started with AI on Jetson Nano', issuer: 'NVIDIA' },
      { date: '2026', title: 'Computer Vision', issuer: 'Microsoft Azure' },
    ],
  },
  {
    name: 'Cloud',
    items: [{ date: '2026-03', title: 'AWS Certification Subject Matter Expert Training', issuer: 'AWS Training and Certification' }],
  },
  {
    name: 'Python',
    items: [
      {
        date: '2025-12',
        title: 'Python Developer Certification',
        issuer: 'freeCodeCamp',
        detail: 'About 300 hours of work',
        verify: 'https://www.freecodecamp.org/certification/the_shadow_monarch/python-v9',
      },
      {
        date: '2025-04',
        title: 'The Joy of Computing using Python',
        issuer: 'NPTEL, IIT Madras',
        detail: 'Elite, 70%. Proctored exam 47.25 of 75',
      },
      { date: '2025', title: 'Free Python Course', issuer: 'GeeksforGeeks' },
    ],
  },
];
