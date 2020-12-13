export const state = () => ({
  components: [
    {
      name: 'Name',
      img: require('~/assets/images/generic/landing.png'),
      height: '100vh',
    },
    {
      name: 'About',
      gradient:
        'linear-gradient(66deg, rgba(33,33,33,1) 25%, rgba(66,66,66,1) 25%, rgba(66,66,66,1) 90%, rgba(18,18,18,1) 90%);',
    },
    { name: 'History', bgColor: 'grey darken-4' },
    {
      name: 'Contact',
    },
  ],
  socialMedia: [
    { name: 'earth', link: 'https://www.upwork.com/fl/rizakhan2?viewMode=1' },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/riza-khan-68499b193/',
    },
    { name: 'github', link: 'https://github.com/RizaHKhan' },
  ],
  history: [
    {
      color: 'cyan',
      year: '2019 August',
      title: 'Got my first Upwork client',
      description:
        "After months of bidding on jobs, got my first contract. Client had misplaced their password and needed their small business website rebuilt. I took the opportunity and managed to get a 5/5 star review.',",
    },
    {
      color: 'green',
      year: '2019 September',
      title: 'Second Upwork Client',
      description:
        'Same client needed another website rebuilt. I really expanded my skills here by creating a brand new theme from scratch. Wonderful learning experience',
    },
    {
      color: 'pink',
      year: '2019 Ocotober',
      title: 'Broadstreet',
      description:
        'Joined a ad agency based out of New York, US. An amazing experience that exposed me to many new technologies. Had to come upto speed with Ruby On Rails, VueJS. Also involved with lots of vanilla Javascript while building ad formats. Great experience, will always be indebted to Kenny.',
    },
    {
      color: 'orange',
      year: '2020 June',
      title: 'Redmine',
      description:
        'Joined a ad agency based out of New York, US. An amazing experience that exposed me to many new technologies. Had to come upto speed with Ruby On Rails, VueJS. Also involved with lots of vanilla Javascript while building ad formats. Great experience, will always be indebted to Kenny.',
    },
    {
      color: 'amber',
      year: '2020 September',
      title: 'Redman Technologies',
      description:
        'After my Broadstreet contract ended I got a brief contract with a technology company out in Alberta. Great experience working on their VueJS application. Stressful but I go through it with flying colors.',
    },
    {
      color: 'orange',
      year: '2020 October',
      title: 'Passageways',
      description:
        'A three month long contract that really exposed me to VueJS at a production level on a daily basis. Fast paced and stressful, this was the best experience of my live. A great experience so far.',
    },
  ],
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}
