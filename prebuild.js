const fs = require('fs')
const path = require('path')

const files = ['Readme.md']
const outDir = path.join(__dirname, 'pages')

const data = {}

files.forEach((filename) => {
  data[path.basename(filename, '.md')] = fs.readFileSync(path.join(__dirname, filename), 'utf-8')
})
fs.writeFileSync(`${outDir}/data.json`, JSON.stringify(data))
