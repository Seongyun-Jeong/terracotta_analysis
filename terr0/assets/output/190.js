var module191 = require('./191');

module.exports = function (t) {
  var o,
    s = {};

  for (o in ((t instanceof Object && !Array.isArray(t)) || module191(false), t)) t.hasOwnProperty(o) && (s[o] = o);

  return s;
};
