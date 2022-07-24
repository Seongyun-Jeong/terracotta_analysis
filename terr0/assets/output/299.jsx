require('./43');

require('./78');

var n,
  module11 = require('./11'),
  module9 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module300 = require('./300'),
  React = require('react'),
  module52 = require('./52'),
  v = React.forwardRef(function (v, f) {
    var c = module52.compose(n.slider, v.style),
      p = v.onValueChange,
      C = v.onSlidingComplete,
      S = module9(v, ['onValueChange', 'onSlidingComplete']),
      h = p
        ? function (n) {
            if (null != n.nativeEvent.fromUser && n.nativeEvent.fromUser) p(n.nativeEvent.value);
          }
        : null,
      E = h,
      V = C
        ? function (n) {
            C(n.nativeEvent.value);
          }
        : null;
    return <module300 />;
  });

v.defaultProps = {
  disabled: false,
  value: 0,
  minimumValue: 0,
  maximumValue: 1,
  step: 0,
};
n = module52.create({
  slider: {},
});
module.exports = v;
