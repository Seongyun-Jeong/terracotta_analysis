module.exports = function (t, o) {
  if (('function' == typeof Symbol ? Symbol.iterator : '@@iterator') in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) {
    var n = [],
      l = true,
      f = false,
      u = undefined;

    try {
      for (var y, c = t['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); !(l = (y = c.next()).done) && (n.push(y.value), !o || n.length !== o); l = true);
    } catch (t) {
      f = true;
      u = t;
    } finally {
      try {
        if (!(l || null == c.return)) c.return();
      } finally {
        if (f) throw u;
      }
    }

    return n;
  }
};
