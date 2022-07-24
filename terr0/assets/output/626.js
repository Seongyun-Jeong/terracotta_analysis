var t = Object.prototype.hasOwnProperty;

function n(t, n) {
  return t === n ? 0 !== t || 0 !== n || 1 / t == 1 / n : t != t && n != n;
}

module.exports = function (o, u) {
  if (n(o, u)) return true;
  if ('object' != typeof o || null === o || 'object' != typeof u || null === u) return false;
  var c = Object.keys(o),
    f = Object.keys(u);
  if (c.length !== f.length) return false;

  for (var l = 0; l < c.length; l++) if (!t.call(u, c[l]) || !n(o[c[l]], u[c[l]])) return false;

  return true;
};
