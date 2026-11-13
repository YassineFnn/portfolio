export const profile = {
  name: 'Yassine Founounou',
  initials: 'YF',
  location: 'Munich, Germany',
  email: 'founounou2013@gmail.com',
  phone: '+49 176 7689 6215',
  linkedin: 'https://www.linkedin.com/in/yassine-founounou/',
  github: 'https://github.com/YassineFnn',
  role: 'Software Developer at Acronis',
};

export const experience = [
  {
    company: 'Acronis · Work Study',
    title: 'Software Developer',
    period: 'Jan 2025 — Present',
    location: 'Munich, Germany',
    current: true,
    summary: 'Built Genie, an internal web app that automates virtual machine setup and tracks deployments.',
    highlights: [
      'Designed and built the complete Genie application, from Go and SQLite backend to frontend and automation workflows.',
      'Reduced virtual appliance setup from 28 minutes to 1.5 minutes, with a 100% success rate.',
      'Built a Packer-based provisioning pipeline that cut setup from more than an hour to under five minutes.',
      'Shipped a responsive hypermedia UI with incremental HTML updates, Hyperscript, custom CSS, and persistent inventory.',
      'The tool saves an estimated 10–14 engineer-days per month.',
    ],
    stack: ['Go', 'SQLite', 'vSphere', 'HashiCorp Packer', 'HTML', 'CSS', 'Hyperscript'],
  },
  {
    company: 'Somatric · Work Study',
    title: 'AI Engineer',
    period: 'Oct 2026 — Present',
    location: 'Munich, Germany',
    current: true,
    summary: 'Interdisciplinary Project (IDP) · IN2334 · TUM',
    highlights: [],
    stack: [],
  },
  {
    company: 'Soley · Work Study',
    title: 'AI Engineer - Team Lead',
    period: 'Oct 2026 — Present',
    location: 'Munich, Germany',
    current: true,
    summary: 'AI engineering in collaboration with the Center for Software Engineering Excellence (CSEE).',
    highlights: [],
    stack: [],
  },
  {
    company: 'Constructor Technology',
    title: 'Software Engineer',
    period: 'Jul 2024 — Dec 2024',
    location: 'Bremen, Germany',
    summary: 'Worked on communication-efficient polynomial multiplication and Rust-based erasure coding for a peer-to-peer distributed storage system.',
    highlights: [
      'Designed and proved a distributed multiplication scheme over GF(2ⁿ) using n−1 communication rounds.',
      'Implemented GF(2⁸) multiplication in Rust for an erasure-coding layer.',
    ],
    stack: ['Rust', 'GF(2ⁿ)', 'libp2p', 'Hashgraph', 'Reed–Solomon'],
  },
  {
    company: 'Universidad Rey Juan Carlos',
    title: 'Software Engineer',
    period: 'Jun 2024 — Jul 2024',
    location: 'Madrid, Spain',
    summary: 'Extended pycefr, a static-analysis tool that estimates the Python proficiency needed to read or write a codebase.',
    highlights: [
      'Added detection for 47 Python language constructs, including comprehensions and decorators.',
      'Raised classification precision by 51% on the benchmark test suite.',
    ],
    stack: ['Python', 'Static analysis'],
  },
  {
    company: 'Constructor University',
    title: 'Teaching Assistant',
    period: 'Sep 2023 — May 2024',
    location: 'Bremen, Germany',
    summary: 'Taught and mentored more than 250 students in Programming in C/C++ and Algorithms & Data Structures.',
    highlights: ['Helped students build confidence with core programming and algorithmic concepts.'],
    stack: ['C', 'C++', 'Algorithms', 'Data structures'],
  },
  {
    company: 'Acronis',
    title: 'Software Developer',
    period: 'Jun 2023 — Aug 2023',
    location: 'Bremen, Germany',
    summary: 'Improved backend maintainability and test quality in existing services.',
    highlights: [
      'Migrated persistence code from GORM to SQLX with native SQL.',
      'Replaced over-mocked tests with fakes for clearer state-based checks.',
    ],
    stack: ['Go', 'SQLX', 'SQL', 'Testing'],
  },
];

export const education = [
  {
    school: 'Technical University of Munich',
    degree: 'Master of Science, Computer Science',
    period: 'Oct 2025 — Sep 2027',
    location: 'Munich, Germany',
    detail: 'Focus areas: artificial intelligence, software engineering, and security.',
  },
  {
    school: 'École Polytechnique',
    degree: 'Master of Science, Cybersecurity',
    period: 'Feb 2026 — Jul 2026',
    location: 'Paris, France',
    detail: 'EuroTeQ',
  },
  {
    school: 'Center for Software Engineering Excellence (CSEE)',
    degree: 'Software Engineering & Applied AI',
    period: '2026 — Present',
    location: '',
    detail: '',
  },
  {
    school: 'Jacobs University Bremen (now Constructor University)',
    degree: 'Bachelor of Science, Computer Science',
    period: 'Sep 2022 — Aug 2025',
    location: 'Bremen, Germany',
    detail: 'GPA 1.4 · top 10% of the Class of 2025. Thesis on using LLMs to predict vehicle component wear.',
  },
];

export const skillGroups = [
  { title: 'Languages', items: ['Go', 'C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Web & product', items: ['HTML', 'CSS', 'React', 'Hypermedia', 'Responsive UI'] },
  { title: 'AI & data', items: ['Pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'Matplotlib', 'RAG'] },
  { title: 'Systems & tools', items: ['Docker', 'Kubernetes', 'Git', 'Jira', 'Jenkins', 'Artifactory', 'SonarQube', 'Bitbucket'] },
];

export const projects = [
  {
    number: '01',
    title: 'Genie deployment automation',
    category: 'Infrastructure · Acronis',
    intro: 'A full web app I built end to end for deployment, provisioning, and inventory.',
    problem: 'Appliance setup took 28 minutes; hypervisors took over an hour.',
    solution: 'Built the complete app: Go and SQLite backend, Packer workflows, responsive hypermedia frontend, and persistent inventory.',
    impact: 'Appliances: 1.5 minutes at 100% success. Hypervisors: under five minutes. Saves 10–14 engineer-days monthly.',
    stack: ['Go', 'SQLite', 'vSphere', 'Packer', 'HTML', 'CSS', 'Hyperscript'],
    visual: 'deployment',
  },
  {
    number: '02',
    title: 'CogniDeck',
    category: 'Applied AI · TUM',
    intro: 'Turns course PDFs into grounded flashcards.',
    problem: 'Manual card creation is slow; raw LLM output can be unreliable.',
    solution: 'Built an eight-stage OCR/RAG pipeline with deduplication and spaced repetition.',
    impact: 'Generates 1,000+ grounded cards with observability and rate limiting.',
    stack: ['FastAPI', 'Next.js', 'LangChain', 'Pinecone', 'OCR', 'RAG'],
    visual: 'cognideck',
  },
  {
    number: '03',
    title: 'pycefr static analysis',
    category: 'Developer tooling · Universidad Rey Juan Carlos',
    intro: 'Estimates the Python proficiency needed to read a codebase.',
    problem: 'The analyzer recognized too few Python constructs.',
    solution: 'Added 47 detectors, including comprehensions and decorators.',
    impact: 'Improved benchmark precision by 51%.',
    stack: ['Python', 'AST', 'Static analysis'],
    visual: 'analysis',
  },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Native / bilingual' },
  { name: 'English', level: 'C1 · excellent command' },
  { name: 'German', level: 'B1 · currently studying B2' },
];
