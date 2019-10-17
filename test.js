const loader = require('./');

console.log(
  loader.bind({
    query: '?header=foo',
  })('bar')
);
