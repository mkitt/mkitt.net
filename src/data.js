const fs = require('fs')
const path = require('path')
const marked = require('marked')

const rawResume = fs.readFileSync(path.join('./', 'Resume.md'), 'utf8')
const resume = marked(rawResume)

module.exports = {
  name: 'Matthew Kitt',
  avatar: '/assets/matthew-kitt-avatar-256.jpg',
  title: 'mkitt',
  url: 'https://mkitt.net',
  description: 'User interface developer for web and mobile platforms.',
  links: [
    { label: 'GitHub', url: 'https://github.com/mkitt' },
    { label: 'Ello', url: 'https://ello.co/mk' },
    { label: 'Email', url: 'mailto: mk@mkitt.net' },
  ],
  experiences: [
    {
      icon: 'ello',
      title: 'Ello',
      dates: '2013-2017',
    },
    {
      icon: 'modeset',
      title: 'Mode Set',
      dates: '2011-2014',
    },
    {
      icon: 'factorylabs',
      title: 'Factory Labs',
      dates: '2005-2011',
    },
    {
      icon: 'thefirmgraphics',
      title: 'The Firm Graphics',
      dates: '2001-2005',
    },
  ],
  projects: [
    {
      id: 'ello-webapp',
      assets: {
        img: '/assets/ello-webapp-desktop.jpg',
      },
      icon: 'ello',
      title: 'webapp',
      url: 'https://ello.co',
      repoUrl: 'https://github.com/ello/webapp',
      description: 'The web application and front-end for the social network ello.co. A large, open source, multi-year project utilizing react, immutable.js, redux, and redux-saga. Includes dynamic streams, rich text editing, and server-side rendering.',
    },
    {
      id: 'ello-brains',
      assets: {
        img: '/assets/ello-brains-desktop.jpg',
      },
      icon: 'ello',
      title: 'brains',
      url: 'https://ello.co',
      repoUrl: 'https://github.com/ello/brains',
      description: 'A recent spin-off from ello/webapp, brains contains the reducers, actions, sagas, selectors and other shareable logic of Ello\'s client-side apps. Currently it is consumed from ello/webapp, ello/bender (React Native app) and an internal admin application.',
    },
    {
      id: 'ello-bender',
      assets: {
        img: '/assets/ello-bender.jpg',
      },
      icon: 'ello',
      title: 'bender',
      url: 'https://play.google.com/store/apps/details?id=co.ello.ElloApp',
      repoUrl: 'https://github.com/ello/bender',
      description: 'The React Native version of Ello\'s rich text editor built for Android. The main app is a wrapper around ello/webapp, with post and comment creation happening natively. Includes most of the functionality of it\'s web application counterpart.',
    },
    {
      id: 'amykitt.com',
      assets: {
        img: '/assets/mkitt-amykitt-desktop.jpg',
      },
      icon: 'ak',
      title: 'amykitt.com',
      url: 'http://amykitt.com',
      repoUrl: 'https://github.com/mkitt/amykitt.com/',
      description: 'A single page gallery app to showcase the design work of my immensly talented wife. Explores redux without redux by utlizing a local state container. Work in progress.',
    },
    {
      id: 'rokk3rfuel',
      assets: {
        img: '/assets/mkitt-rokk3rfuel-desktop.jpg',
      },
      icon: 'mk',
      title: 'rokk3rfuel.com',
      url: 'https://rokk3rfuel.herokuapp.com/',
      repoUrl: 'https://github.com/mkitt/rokk3rfuel',
      description: 'A brochure site for a new Miami/Denver based Venture Capital firm. The website is built on top of next.js and utlizing the glamor library to style react based components.',
    },
    {
      id: 'mkitt-toolkitt',
      assets: {
        img: '/assets/mkitt-toolkitt.jpg',
      },
      icon: 'mk',
      title: 'toolkitt',
      url: 'https://toolkitt-igtbnkzqyy.now.sh',
      repoUrl: 'https://github.com/mkitt/toolkitt',
      description: 'Higher order components and helper functions for aiding in user interface development. Currently supports a configurable overlay grid and tooling for troubleshooting performance. A work in progress.',
    },
    {
      id: 'mkitt-net',
      icon: 'mk',
      title: 'mkitt.net',
      repoUrl: 'https://github.com/mkitt/mkitt.github.com',
      description: 'Static site generated through webpack and powered by react components.',
    },
    {
      id: 'mkitt-dotfiles',
      icon: 'mk',
      title: 'dotfiles',
      repoUrl: 'https://github.com/mkitt/dotfiles',
      description: 'Personal dotfiles, bash and Vim setup tuned for macOS and Apple\'s Terminal. ♥ the Vim.',
    },
    {
      id: 'mkitt-tabline',
      icon: 'mk',
      title: 'tabline.vim',
      repoUrl: 'https://github.com/mkitt/tabline.vim',
      description: 'Configure tab labels within Terminal Vim for a succinct graphical interface.',
    },
    {
      id: 'modeset-utensils',
      icon: 'modeset',
      title: 'utensils',
      repoUrl: 'https://github.com/modeset/-deprecated-utensils',
      description: 'Modular component based library written in CoffeeScript, Sass and Haml. Happily deprecated. 🤘',
    },
  ],
  routes: [
    '/',
    '/resume',
  ],
  resume,
}

