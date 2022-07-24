var module284 = require('./284');

function f(t, f) {
  return {
    from: module284.default(
      {
        opacity: 0,
      },
      t,
      f
    ),
    to: module284.default(
      {
        opacity: 1,
      },
      t,
      0
    ),
  };
}

exports.fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};
var I = f('translateY', -100);
exports.fadeInDown = I;
var o = f('translateY', 100);
exports.fadeInUp = o;
var l = f('translateX', -100);
exports.fadeInLeft = l;
var v = f('translateX', 100);
exports.fadeInRight = v;
var p = f('translateY', -500);
exports.fadeInDownBig = p;
var s = f('translateY', 500);
exports.fadeInUpBig = s;
var B = f('translateX', -500);
exports.fadeInLeftBig = B;
var c = f('translateX', 500);
exports.fadeInRightBig = c;
