const Cow = require('cowsay');
const LoaderUtils = require('loader-utils');

module.exports = function (content) {
  const {
    header: text = 'what?',
  } = LoaderUtils.parseQuery(this.query);

  if (this.cacheable) {
    this.cacheable()
  }

  return `/*${Cow.say({ text })}*/\n${content}`;
};
