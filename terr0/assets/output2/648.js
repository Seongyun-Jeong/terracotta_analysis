var module284 = require('./284');

function u(t, u) {
  return {
    from: module284.default(
      {
        opacity: 1,
      },
      t,
      0
    ),
    to: module284.default(
      {
        opacity: 0,
      },
      t,
      u
    ),
  };
}

export const fadeOut = {
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
};
var O = u('translateY', 100);
exports.fadeOutDown = O;
var n = u('translateY', -100);
exports.fadeOutUp = n;
var o = u('translateX', -100);
exports.fadeOutLeft = o;
var l = u('translateX', 100);
exports.fadeOutRight = l;
var v = u('translateY', 500);
exports.fadeOutDownBig = v;
var p = u('translateY', -500);
exports.fadeOutUpBig = p;
var s = u('translateX', -500);
exports.fadeOutLeftBig = s;
var B = u('translateX', 500);
exports.fadeOutRightBig = B;
