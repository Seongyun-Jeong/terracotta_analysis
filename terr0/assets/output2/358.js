var module359 = require('./359'),
  module360 = require('./360');

module.exports = function (o, c) {
  return !c || ('object' !== module359(c) && 'function' != typeof c) ? module360(o) : c;
};
