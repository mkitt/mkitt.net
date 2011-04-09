
var assert = require('assert');
var should = require('should');
var pagegen = require('../pagegen');

module.exports = {
  'test pagegen is defined': function(){
    assert.isDefined(pagegen);
  },

  'test #getMarkdown': function() {
    pagegen.getMarkdown().length.should.eql(3);
    pagegen.getMarkdown().should.contain('index.md');
  },

  'test #message': function() {
    pagegen.message();
  }

};
