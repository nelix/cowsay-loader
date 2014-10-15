var loaderUtils = require('loader-utils');
var cow = require('cowsay');

module.exports = function(content) {
  var query = loaderUtils.parseQuery(this.query);
  this.cacheable && this.cacheable();

  var header = '/*' + cow.say({text: query.header || 'what?'}) + '*/';
  return header + '\n' + content;
};
