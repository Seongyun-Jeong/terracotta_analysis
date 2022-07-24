var module51 = require('./51'),
  React = require('react'),
  module682 = require('./682');

function s(t) {
  var s = module51.default({}, t);
  return React.default.createElement(
    module682.default,
    module51.default({}, s, {
      class: 'RNFirebaseAdMobNativeExpress',
    })
  );
}

s.propTypes = module682.default.propTypes;
s.defaultProps = {
  size: 'SMART_BANNER',
};
var o = s;
exports.default = o;
