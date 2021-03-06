module.exports = {
  siteTitle: 'Moses Paul R',
  siteDescription: 'I dunno',
  siteKeywords: 'Moses Paul R, iammosespaulr',
  siteUrl: 'https://iammosespaulr.github.io',
  siteLanguage: 'en_US',
  //pathPrefix: '/',
  //googleAnalyticsID: 'UA-45666519-2',
  //googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Moses Paul',
  location: 'Chennai',
  email: 'iammosespaulr@gmail.com',
  github: 'https://github.com/iammosespaulr',
  twitterHandle: '@iammosespaulr',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/iammosespaulr',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/iammosespaulr',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/iammosespaulr',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iammosespaulr',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCc6rtw4jtgETEkzTUoTGUKQ',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@iammosespaulr',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
    black: '#000000',
    white: '#e6f1ff',
    whitey: '#ffffff',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
