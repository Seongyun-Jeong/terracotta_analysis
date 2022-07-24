var module31 = require('./31'),
  module32 = require('./32');

module.exports = function (o, c) {
  return !c || ('object' !== module31(c) && 'function' != typeof c) ? module32(o) : c;
};
