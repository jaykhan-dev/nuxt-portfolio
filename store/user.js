export const state = () => ({
  projects: [],
  components: [
    {
      name: 'Name',
      img: require('~/assets/images/generic/landing.png'),
      height: '100vh',
    },
    {
      name: 'About',
    },
    { name: 'History', bgColor: 'grey darken-4' },
    { name: 'Projects', bgColor: 'grey darken-3' },
    {
      name: 'Contact',
    },
  ],
  socialMedia: [
    {
      name: 'earth',
      link: 'https://www.upwork.com/freelancers/~014489ba7a4c22b2bf?viewMode=1',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/jkhanprofile/',
    },
    { name: 'github', link: 'https://github.com/jaykhan-dev' },
  ],
  history: [
    {
      color: 'cyan',
      year: 'March 2014 - May 2015',
      title: 'The Community Network',
      description:
        'The Community Network was a company based in the UK.  They installed screens in medical waiting rooms and the ads that the graphics design team created were played on rotation. This was my first design job.',
    },
    {
      color: 'red',
      year: 'December 2015 - June 2016',
      title: 'Print Three Ottawa',
      description:
        'Created some graphic design material for local clients and did some UX research for a possible new Print Three website.',
    },
    {
      color: 'green',
      year: 'August 2016 - April 2017',
      title: 'In Air Marketing',
      description:
        'Advertising on a freelance basis.  The final product was aired in waiting rooms around Canada.',
    },
    {
      color: 'pink',
      year: 'April 2017 - September 2017',
      title: 'Rampart Corp',
      description:
        'Rampart Corp supplies operational equipment to those in the Police or the Army.  I designed some material for social media, helped with data entry and marketing.',
    },
    {
      color: 'blue',
      year: 'February 2018 - August 2018',
      title: 'CMHC',
      description: 'Contract as a Digital Print Analyst using SAP.',
    },
    {
      color: 'amber',
      year: 'September 2018 - November 2019',
      title: 'Scribendi Inc',
      description:
        'Scribendi provides English Editing and Proofreading services online. They are based in Chatham, Ontario, but also have an office in Montreal. I learnt a lot about UI/UX during my time here.  ',
    },
    {
      color: 'orange',
      year: '2020 - present ',
      title: 'Keywords Studios',
      description:
        'Based in Dublin, Keywords Studios has locations all over the world.  They primarily service the video game industry. I worked in a large team in office and from home (due to COVID).',
    },
  ],
  skills: [
    {
      title: 'UI/UX Design',
      description: 'Adobe XD, Invision Studio, Figma,',
    },
    {
      title: 'Video Editing and Motion Graphics',
      description: 'Adobe Premiere Pro, After Effects',
    },
    {
      title: 'Graphic Design',
      description: 'Adobe Photoshop, Illustrator, Typography',
    },
    {
      title: 'Music Production',
      description: 'Ableton, Serato DJ, Boss ME-25, Novation Bass Station II',
    },
    {
      title: 'Functionality QA Testing',
      description: 'PS4, PS5, PC, XB1, Jira, Confluence',
    },
  ],
})

export const mutations = {
  addProjects(state, payload) {
    state.projects = payload
  },
}
