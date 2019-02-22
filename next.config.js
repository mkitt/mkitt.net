const fs = require('fs')
const path = require('path')

module.exports = {
  async exportPathMap() {
    return {
      '/': {
        page: '/',
        query: {
          source: fs.readFileSync(path.join(__dirname, 'Readme.md'), 'utf-8'),
        },
      },
      '/resume': {
        page: '/resume',
        query: {
          source: fs.readFileSync(path.join(__dirname, 'resume', 'Readme.md'), 'utf-8'),
        },
      },
      '/404.html': { page: '_error' },
    }
  },
}
