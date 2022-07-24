module.exports = function (t) {
  var n,
    f = typeof t;
  if (undefined === t) n = 'undefined';
  else if (null === t) n = 'null';
  else if ('string' === f) n = '"' + t + '"';
  else if ('function' === f)
    try {
      n = t.toString();
    } catch (t) {
      n = '[function unknown]';
    }
  else
    try {
      n = JSON.stringify(t);
    } catch (f) {
      if ('function' == typeof t.toString)
        try {
          n = t.toString();
        } catch (t) {}
    }
  return n || '["' + f + '" failed to stringify]';
};
