var module284 = require('./284');

function u(t, u) {
  return {
    from: module284.default({}, t, 0),
    to: module284.default({}, t, u),
  };
}

var s = u('translateY', 100);
exports.slideOutDown = s;
var n = u('translateY', -100);
exports.slideOutUp = n;
var o = u('translateX', -100);
exports.slideOutLeft = o;
var O = u('translateX', 100);
exports.slideOutRight = O;
