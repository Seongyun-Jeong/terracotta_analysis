var module46 = require('./46');

function t(o, t) {
  var n = Object.keys(o);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(o);
    if (t)
      s = s.filter(function (t) {
        return Object.getOwnPropertyDescriptor(o, t).enumerable;
      });
    n.push.apply(n, s);
  }

  return n;
}

var module182 = require('./182'),
  s = require(d[2]),
  PropTypes = require('prop-types'),
  module183 = require('./183'),
  module68 = require('./68'),
  module200 = require('./200'),
  f = module200.DeprecatedAccessibilityComponentTypes,
  u = module200.DeprecatedAccessibilityTraits,
  y = module200.DeprecatedAccessibilityRoles,
  O = module200.DeprecatedAccessibilityStates,
  R = module183(module68);

module.exports = (function (n) {
  for (var s = 1; s < arguments.length; s++) {
    var c = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      t(Object(c), true).forEach(function (t) {
        module46(n, t, c[t]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(c));
    else
      t(Object(c)).forEach(function (o) {
        Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(c, o));
      });
  }

  return n;
})(
  {
    accessible: PropTypes.bool,
    accessibilityLabel: PropTypes.node,
    accessibilityHint: PropTypes.string,
    accessibilityActions: PropTypes.arrayOf(PropTypes.string),
    accessibilityIgnoresInvertColors: PropTypes.bool,
    accessibilityComponentType: PropTypes.oneOf(f),
    accessibilityRole: PropTypes.oneOf(y),
    accessibilityStates: PropTypes.arrayOf(PropTypes.oneOf(O)),
    accessibilityLiveRegion: PropTypes.oneOf(['none', 'polite', 'assertive']),
    importantForAccessibility: PropTypes.oneOf(['auto', 'yes', 'no', 'no-hide-descendants']),
    accessibilityTraits: PropTypes.oneOfType([PropTypes.oneOf(u), PropTypes.arrayOf(PropTypes.oneOf(u))]),
    accessibilityViewIsModal: PropTypes.bool,
    accessibilityElementsHidden: PropTypes.bool,
    onAccessibilityAction: PropTypes.func,
    onAccessibilityTap: PropTypes.func,
    onMagicTap: PropTypes.func,
    testID: PropTypes.string,
    nativeID: PropTypes.string,
    onResponderGrant: PropTypes.func,
    onResponderMove: PropTypes.func,
    onResponderReject: PropTypes.func,
    onResponderRelease: PropTypes.func,
    onResponderTerminate: PropTypes.func,
    onResponderTerminationRequest: PropTypes.func,
    onStartShouldSetResponder: PropTypes.func,
    onStartShouldSetResponderCapture: PropTypes.func,
    onMoveShouldSetResponder: PropTypes.func,
    onMoveShouldSetResponderCapture: PropTypes.func,
    hitSlop: module182,
    onLayout: PropTypes.func,
    pointerEvents: PropTypes.oneOf(['box-none', 'none', 'box-only', 'auto']),
    style: R,
    removeClippedSubviews: PropTypes.bool,
    renderToHardwareTextureAndroid: PropTypes.bool,
    shouldRasterizeIOS: PropTypes.bool,
    collapsable: PropTypes.bool,
    needsOffscreenAlphaCompositing: PropTypes.bool,
  },
  s
);
