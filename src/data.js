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
    // { label: 'Projects', url: '/projects' },
    { label: 'GitHub', url: 'https://github.com/mkitt' },
    { label: 'Ello', url: 'https://ello.co/mk' },
    { label: 'Email', url: 'mailto: mk@mkitt.net' },
  ],
  routes: [
    '/',
    '/resume',
  ],
  resume,
}

