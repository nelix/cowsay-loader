const Cow = require('cowsay');
const LoaderUtils = require('loader-utils');

module.exports = function (content) {
  const {
    header: text = 'what?',
  } = loaderUtils.parseQuery(this.query);

  if (this.cacheable) {
    this.cacheable()
  }

  return `/*${ cow.say({ text })}*/\n${content}`;
};
