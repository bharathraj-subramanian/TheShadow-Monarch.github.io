export const profile = {
  name: 'Bharathraj Subramanian',
  descriptor:
    'Computer science undergraduate in Tamil Nadu. I build computer vision models, RFID hardware and the software around them.',
  location: 'Nagapattinam, Tamil Nadu',
  email: 'bharathrajparimala@gmail.com',
  github: 'https://github.com/TheShadow-Monarch',
  // Taken from the previous portfolio's footer.
  profiles: [
    { label: 'GitHub', href: 'https://github.com/TheShadow-Monarch' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bharathraj-subramanian-pythondev/' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/Bharathraj-S/' },
    { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/bharathrajparim1' },
  ],
  resume: '/Bharathraj-Subramanian-Resume.pdf',
  education: {
    degree: 'B.E. Computer Science and Engineering',
    school: 'SRM Madurai College for Engineering and Technology',
    period: '2024 to May 2028',
    cgpa: '7.52',
  },
  stack: [
    { group: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C and C++'] },
    {
      group: 'Machine learning',
      items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'OpenCV', 'HuggingFace Transformers', 'CUDA'],
    },
    {
      group: 'Web and backend',
      items: ['React', 'FastAPI', 'Flask', 'Django', 'PostgreSQL', 'Supabase'],
    },
    { group: 'Hardware and tools', items: ['Raspberry Pi', 'NVIDIA Jetson Nano', 'Linux', 'Git', 'Docker (familiar)'] },
  ],
} as const;
