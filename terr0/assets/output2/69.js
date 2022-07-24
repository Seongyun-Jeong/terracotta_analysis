require('./43');

var module59 = require('./59');

module.exports = function (t) {
  if (undefined === t || null === t) return t;
  var u = module59(t);

  if (null !== u && undefined !== u) {
    u = ((u << 24) | (u >>> 8)) >>> 0;
    u |= 0;
    return u;
  } else return undefined;
};
