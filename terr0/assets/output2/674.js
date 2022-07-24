require('./671');

var o = {},
  t = function (n) {
    return n.app.name + ':' + n.namespace;
  };

export function getLogger(n) {
  var u = t(n);
  return o[u];
}
export const LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};
export function initialiseLogger(n, u) {
  var f = t(n);

  if (!o[f]) {
    u.toUpperCase();
    o[f] = {
      debug: function (...args) {},
      info: function (...args) {},
      warn: function () {},
      error: function () {
        var n;
        (n = console).error.apply(n, arguments);
      },
    };
  }
}
