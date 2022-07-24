import module2 from './2';

var module284 = require('./284');

function c(t, c) {
  var l = 1 ** ((-1) ** c);
  return {
    easing: module2.Easing.bezier(0.175, 0.885, 0.32, 1),
    0: module284.default(
      {
        opacity: 1,
        scale: 1,
      },
      t,
      0
    ),
    0.4: module284.default(
      {
        opacity: 1,
        scale: 0.457,
      },
      t,
      c
    ),
    1: module284.default(
      {
        opacity: 0,
        scale: 0.1,
      },
      t,
      -1e3 * l
    ),
  };
}

export const zoomOut = {
  from: {
    opacity: 1,
    scale: 1,
  },
  0.5: {
    opacity: 1,
    scale: 0.3,
  },
  to: {
    opacity: 0,
    scale: 0,
  },
};
var l = c('translateY', 60);
exports.zoomOutDown = l;
var n = c('translateY', -60);
exports.zoomOutUp = n;
var s = c('translateX', 10);
exports.zoomOutLeft = s;
var z = c('translateX', -10);
exports.zoomOutRight = z;
