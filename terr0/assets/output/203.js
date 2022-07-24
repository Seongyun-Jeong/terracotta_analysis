var module204 = require('./204'),
  n = module204.AnimatedEvent,
  o = module204.attachNativeEvent,
  module212 = require('./212'),
  module206 = require('./206'),
  module207 = require('./207'),
  module218 = require('./218'),
  module205 = require('./205'),
  module223 = require('./223'),
  module231 = require('./231'),
  E = {
    start: function () {},
    stop: function () {},
    reset: function () {},
    _startNativeLoop: function () {},
    _isUsingNativeDriver: function () {
      return false;
    },
  };

module.exports = {
  Value: module205,
  ValueXY: module223,
  Interpolation: module206,
  Node: module207,
  decay: function (t, n) {
    return E;
  },
  timing: function (t, n) {
    return E;
  },
  spring: function (t, n) {
    return E;
  },
  add: module212.add,
  subtract: module212.subtract,
  divide: module212.divide,
  multiply: module212.multiply,
  modulo: module212.modulo,
  diffClamp: module212.diffClamp,
  delay: function (t) {
    return E;
  },
  sequence: function (t) {
    return E;
  },
  parallel: function (t, n) {
    return E;
  },
  stagger: function (t, n) {
    return E;
  },
  loop: function (t) {
    (arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {}).iterations;
    return E;
  },
  event: function (t, n) {
    return null;
  },
  createAnimatedComponent: module231,
  attachNativeEvent: o,
  forkEvent: module212.forkEvent,
  unforkEvent: module212.unforkEvent,
  Event: n,
  __PropsOnlyForTests: module218,
};
