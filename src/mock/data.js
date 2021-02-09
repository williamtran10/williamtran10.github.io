import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'William Tran | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: 'William Tran',
  subtitle: "I'm a software developer.",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic.jpg',
  paragraphOne: "I'm a software developer interested in making a positive impact!",
  paragraphTwo:
    'I have experience in full-stack development from both personal projects and professional work, and I am also eager to take on new roles. Previously, I have worked as a Full-Stack Web Developer at UWaterloo CSCF and as a Mobile Developer at UWaterloo Engineering.',
  paragraphThree:
    'I study Software Engineering at the University of Waterloo where I am pursuing a specialization in Human-Computer Interaction. On campus, you might catch me attending sessions for UW/UX, dancing with UW Hip Hop, or weightlifting at PAC.',
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
    info:
      'In my first term of university, a couple of friends and I built a full size Raspberry Pi arcade machine from scratch. We bought all of the individual materials then put in work over the course of 3 months in the Engineering Student Machine Shop.',
    info2: 'You can read all about our process here:',
    url: 'https://medium.com/swlh/how-to-build-a-raspberry-pi-arcade-machine-3de4df2894c6',
    repo: '', // if no repo, the button will not show up
    cta: 'Read article',
  },
];

// CONTACT DATA
export const contactData = {
  cta: "I'm seeking internship opportunities for Fall 2021.",
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
