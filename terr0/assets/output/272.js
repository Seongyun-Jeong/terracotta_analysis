var module3 = require('./3');

module.exports = function (o) {
  module3(o && 'function' == typeof o.setNativeProps, 'Touchable child must either be native or forward setNativeProps to a native component');
};
