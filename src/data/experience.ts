export interface Role {
  start: string;
  end: string;
  title: string;
  org: string;
  place?: string;
  points: string[];
}

// Newest first.
export const experience: Role[] = [
  {
    start: '2026-06',
    end: '2026-06',
    title: 'AI and ML Intern',
    org: 'HurryEP Technologies Pvt. Ltd.',
    points: [
      'Two-week internship, 8 to 24 June 2026, on applied machine learning tasks and the workflow around model development.',
      'Worked inside a small technical team to deliver the assigned project objectives on schedule.',
    ],
  },
  {
    start: '2025-12',
    end: '2026-01',
    title: 'Python Web Development Intern',
    org: 'Bread & Code Technology',
    place: 'Madurai',
    points: [
      'One-month internship in the Python web development department, 5 December 2025 to 2 January 2026.',
      'Rated Good by the founder for professional skills, dedication and attitude toward responsibilities.',
    ],
  },
];
