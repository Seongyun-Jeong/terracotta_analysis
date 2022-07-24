module.exports = function (t, n) {
  var o = [],
    l = true,
    u = false,
    f = undefined;

  try {
    for (var y, c = t['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); !(l = (y = c.next()).done) && (o.push(y.value), !n || o.length !== n); l = true);
  } catch (t) {
    u = true;
    f = t;
  } finally {
    try {
      if (!(l || null == c.return)) c.return();
    } finally {
      if (u) throw f;
    }
  }

  return o;
};
