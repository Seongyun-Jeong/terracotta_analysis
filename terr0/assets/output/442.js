var t = [],
  n = [];

function u(t, n, o, l) {
  if (t === n) return 0 !== t || 1 / t == 1 / n;
  if (null == t || null == n) return false;
  if ('object' != typeof t || 'object' != typeof n) return false;
  var c = Object.prototype.toString,
    s = c.call(t);
  if (s != c.call(n)) return false;

  switch (s) {
    case '[object String]':
      return t == String(n);

    case '[object Number]':
      return !isNaN(t) && !isNaN(n) && t == Number(n);

    case '[object Date]':
    case '[object Boolean]':
      return +t == +n;

    case '[object RegExp]':
      return t.source == n.source && t.global == n.global && t.multiline == n.multiline && t.ignoreCase == n.ignoreCase;
  }

  for (var f = o.length; f--; ) if (o[f] == t) return l[f] == n;

  o.push(t);
  l.push(n);
  var p = 0;

  if ('[object Array]' === s) {
    if ((p = t.length) !== n.length) return false;

    for (; p--; ) if (!u(t[p], n[p], o, l)) return false;
  } else {
    if (t.constructor !== n.constructor) return false;
    if (t.hasOwnProperty('valueOf') && n.hasOwnProperty('valueOf')) return t.valueOf() == n.valueOf();
    var h = Object.keys(t);
    if (h.length != Object.keys(n).length) return false;

    for (var b = 0; b < h.length; b++) if (!u(t[h[b]], n[h[b]], o, l)) return false;
  }

  o.pop();
  l.pop();
  return true;
}

module.exports = function (o, l) {
  var c = t.length ? t.pop() : [],
    s = n.length ? n.pop() : [],
    f = u(o, l, c, s);
  c.length = 0;
  s.length = 0;
  t.push(c);
  n.push(s);
  return f;
};
