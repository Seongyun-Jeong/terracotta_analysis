var module363 = require('./363');

module.exports = function (o, n) {
  if ('function' != typeof n && null !== n) throw new TypeError('Super expression must either be null or a function');
  o.prototype = Object.create(n && n.prototype, {
    constructor: {
      value: o,
      writable: true,
      configurable: true,
    },
  });
  if (n) module363(o, n);
};
