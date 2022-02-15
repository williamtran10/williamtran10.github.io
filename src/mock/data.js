import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'William Tran | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: 'William\u00A0Tran',
  subtitle: "I'm an aspiring software engineer",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne: "I'm a software developer interested in making a positive impact!",
  paragraphTwo:
    "I have experience in full-stack development though nowadays I'm focussing in backend. Previously, I have worked as a Software Engineering Intern at Jobox, a Full-Stack Web Developer at UWaterloo CSCF and as a Mobile Developer at UWaterloo Engineering.",
  paragraphThree:
    'I study Software Engineering at the University of Waterloo where I plan to pursue a specialization in Human-Computer Interaction. On campus, you might find me running events for our Computer Science Club or mentoring first-years.',
  paragraphFour:
    'Outside of school, I enjoy learning about sustainability, game design, and psychology.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'watcade.jpg',
    title: 'WatCade',
    info: 'In my first term of university, a couple of friends and I built a full size Raspberry Pi arcade machine from scratch over the course of 3 months.',
    info2: 'You can read all about our process here:',
    url: 'https://medium.com/swlh/how-to-build-a-raspberry-pi-arcade-machine-3de4df2894c6',
    repo: '', // if no repo, the button will not show up
    cta: 'Read article',
  },
];

// CONTACT DATA
export const contactData = {
  cta: "I'm seeking internship opportunities for Summer 2022.",
  btn: '',
  email: 'me@williamtran.net',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/williamtran10',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/williamtran10',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
