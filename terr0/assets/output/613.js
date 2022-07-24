var n,
  module284 = require('./284'),
  module2 = require('./2'),
  module614 = require('./614');

function l(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function u(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      l(Object(s), true).forEach(function (n) {
        module284.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      l(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

var module615 = {
    transitionSpec: (n = require('./615').supportsImprovedSpringAnimation()
      ? {
          timing: module2.Animated.spring,
          stiffness: 1e3,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        }
      : {
          duration: 500,
          easing: module2.Easing.bezier(0.2833, 0.99, 0.31833, 0.99),
          timing: module2.Animated.timing,
        }),
    screenInterpolator: module614.default.forHorizontal,
    containerStyle: {
      backgroundColor: '#eee',
    },
  },
  f = {
    transitionSpec: n,
    screenInterpolator: module614.default.forVertical,
    containerStyle: {
      backgroundColor: '#eee',
    },
  },
  O = {
    transitionSpec: {
      duration: 350,
      easing: module2.Easing.out(module2.Easing.poly(5)),
      timing: module2.Animated.timing,
    },
    screenInterpolator: module614.default.forFadeFromBottomAndroid,
  },
  b = {
    transitionSpec: {
      duration: 150,
      easing: module2.Easing.in(module2.Easing.linear),
      timing: module2.Animated.timing,
    },
    screenInterpolator: module614.default.forFadeToBottomAndroid,
  },
  S = {
    transitionSpec: {
      duration: 0,
      timing: module2.Animated.timing,
    },
    screenInterpolator: module614.default.forNoAnimation,
    containerStyle: {
      backgroundColor: '#eee',
    },
  };

function y(t, n, o) {
  if ('ios' !== module2.Platform.OS) return n && t.index < n.index ? b : O;
  else return o ? f : module615;
}

var v = {
  defaultTransitionConfig: y,
  getTransitionConfig: function (t, n, o, s) {
    var c = y(n, o, s);
    return t ? u({}, c, {}, t(n, o, s)) : c;
  },
  SlideFromRightIOS: module615,
  ModalSlideFromBottomIOS: f,
  FadeInFromBottomAndroid: O,
  FadeOutToBottomAndroid: b,
  NoAnimation: S,
};
exports.default = v;
