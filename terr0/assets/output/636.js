exports.default = function (t) {
  var o = {};
  Object.keys(t).forEach(function (f) {
    if (-1 !== s.indexOf(f)) {
      if (!o.transform) o.transform = [];
      o.transform.push(module284.default({}, f, t[f]));
    } else o[f] = t[f];
  });
  return o;
};

var module284 = require('./284'),
  s = ['perspective', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'skewX', 'skewY', 'translateX', 'translateY'];
