var module284 = require('./284');

function l(n, l) {
  return {
    from: module284.default({}, n, l),
    to: module284.default({}, n, 0),
  };
}

var s = l('translateY', -100);
exports.slideInDown = s;
var o = l('translateY', 100);
exports.slideInUp = o;
var f = l('translateX', -100);
exports.slideInLeft = f;
var v = l('translateX', 100);
exports.slideInRight = v;
