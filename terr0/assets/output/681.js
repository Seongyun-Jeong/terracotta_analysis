var module51 = require('./51'),
  React = require('react'),
  module682 = require('./682');

function n(t) {
  var n = module51.default({}, t);
  return React.default.createElement(
    module682.default,
    module51.default({}, n, {
      class: 'RNFirebaseAdMobBanner',
    })
  );
}

n.propTypes = module682.default.propTypes;
n.defaultProps = {
  size: 'SMART_BANNER',
};
var o = n;
exports.default = o;
