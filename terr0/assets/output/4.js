var module5 = require('./5'),
  n = {};

module.exports = function (c, o) {
  if (!n[c]) {
    module5(false, o);
    n[c] = true;
  }
};
