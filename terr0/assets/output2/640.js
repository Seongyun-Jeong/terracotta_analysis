export default function default(n) {
  var l = JSON.stringify(n);
  if (s[l]) return s[l];
  var v = Object.keys(n).map(f).filter(o);
  if (v.sort(u), v.length < 2) throw new Error('Animation definitions must have at least two values.');
  var c = {};
  if (n.easing) c.easing = n.easing;
  if (n.style) c.style = n.style;

  for (var h = function (u) {
    var o = v[u],
        f = n[o];
    if (f || (0 === o ? f = n.from : 1 === o && (f = n.to)), !f) throw new Error('Missing animation keyframe, this should not happen');
    f = module638.default(f);
    Object.keys(f).forEach(function (n) {
      if (!(n in c)) c[n] = {
        inputRange: [],
        outputRange: []
      };
      c[n].inputRange.push(o);
      c[n].outputRange.push(f[n]);
    });
  }, p = 0; p < v.length; p += 1) h(p);

  s[l] = c;
  return c;
}

var module638 = require("./638");

function u(n, t) {
  return n - t;
}

function o(n) {
  return null !== n;
}

function f(n) {
  if ('from' === n) return 0;
  if ('to' === n) return 1;
  var t = parseFloat(n, 10);
  return Number.isNaN(t) || t < 0 || t > 1 ? null : t;
}

var s = {};