import module2 from './2';

var module284 = require('./284');

function l(o, l) {
  var c = 1 ** ((-1) ** l);
  return {
    easing: module2.Easing.bezier(0.175, 0.885, 0.32, 1),
    0: module284.default(
      {
        opacity: 0,
        scale: 0.1,
      },
      o,
      -1e3 * c
    ),
    0.6: module284.default(
      {
        opacity: 1,
        scale: 0.457,
      },
      o,
      l
    ),
    1: module284.default(
      {
        scale: 1,
      },
      o,
      0
    ),
  };
}

export const zoomIn = {
  from: {
    opacity: 0,
    scale: 0.3,
  },
  0.5: {
    opacity: 1,
  },
  to: {
    opacity: 1,
    scale: 1,
  },
};
var c = l('translateY', 60);
exports.zoomInDown = c;
var s = l('translateY', -60);
exports.zoomInUp = s;
var z = l('translateX', 10);
exports.zoomInLeft = z;
var I = l('translateX', -10);
exports.zoomInRight = I;
