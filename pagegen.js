
var fs = require('fs');
var json = __dirname + '/pagegen.json';
var config = JSON.parse(fs.readFileSync(json, 'utf-8'));


function getMarkdown() {
  
}

module.exports = {

  getMarkdown: function() {
    return fs.readdirSync('./doc/pages/');
  },

  message: function() {
    console.log(config.title);
  },

  dispose: function() {
  }

};
