var module2 = require('./2'),
  module476 = require('./476'),
  u = 1e-5;

function l(t) {
  var n = t.navigation,
    o = t.scene,
    u = n.state.index === o.index,
    l = u ? 0 : 1e6;
  return {
    opacity: u ? 1 : 0,
    transform: [
      {
        translateX: l,
      },
      {
        translateY: l,
      },
    ],
  };
}

var p = {
  forHorizontal: function (t) {
    var p = t.layout,
      s = t.position,
      f = t.scene;
    if (!p.isMeasured) return l(t);
    var c = module476.default(t);
    if (!c)
      return {
        opacity: 0,
      };
    var v = c.first,
      y = c.last,
      R = f.index,
      x = p.initWidth,
      M = s.interpolate({
        inputRange: [v, R, y],
        outputRange: module2.I18nManager.isRTL ? [-x, 0, 0.3 * x] : [x, 0, -0.3 * x],
        extrapolate: 'clamp',
      }),
      h = t.shadowEnabled
        ? s.interpolate({
            inputRange: [v, R, y],
            outputRange: [0, 0.7, 0],
            extrapolate: 'clamp',
          })
        : null;
    return {
      transform: [
        {
          translateX: M,
        },
      ],
      overlayOpacity: t.cardOverlayEnabled
        ? s.interpolate({
            inputRange: [R, y - 0.5, y, y + u],
            outputRange: [0, 0.07, 0.07, 0],
            extrapolate: 'clamp',
          })
        : null,
      shadowOpacity: h,
    };
  },
  forVertical: function (t) {
    var n = t.layout,
      u = t.position,
      p = t.scene;
    if (!n.isMeasured) return l(t);
    var s = module476.default(t);
    if (!s)
      return {
        opacity: 0,
      };
    var f = s.first,
      c = s.last,
      v = p.index,
      y = n.initHeight;
    return {
      transform: [
        {
          translateY: u.interpolate({
            inputRange: [f, v, c],
            outputRange: [y, 0, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  },
  forFadeFromBottomAndroid: function (t) {
    var n = t.layout,
      u = t.position,
      p = t.scene;
    if (!n.isMeasured) return l(t);
    var s = module476.default(t);
    if (!s)
      return {
        opacity: 0,
      };
    var f = s.first,
      c = s.last,
      v = p.index,
      y = u.interpolate({
        inputRange: [f, f + 0.5, f + 0.9, v, c - 1e-5, c],
        outputRange: [0, 0.25, 0.7, 1, 1, 0],
        extrapolate: 'clamp',
      }),
      R = 0.08 * n.initHeight;
    return {
      opacity: y,
      transform: [
        {
          translateY: u.interpolate({
            inputRange: [f, v, c],
            outputRange: [R, 0, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  },
  forFadeToBottomAndroid: function (t) {
    var n = t.layout,
      u = t.position,
      p = t.scene;
    if (!n.isMeasured) return l(t);
    var s = module476.default(t);
    if (!s)
      return {
        opacity: 0,
      };
    var f = s.first,
      c = s.last,
      v = [f, p.index, c],
      y = u.interpolate({
        inputRange: v,
        outputRange: [0, 1, 1],
        extrapolate: 'clamp',
      }),
      R = 0.08 * n.initHeight;
    return {
      opacity: y,
      transform: [
        {
          translateY: u.interpolate({
            inputRange: v,
            outputRange: [R, 0, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  },
  forFade: function (t) {
    var n = t.layout,
      u = t.position,
      p = t.scene;
    if (!n.isMeasured) return l(t);
    var s = module476.default(t);
    if (!s)
      return {
        opacity: 0,
      };
    var f = s.first,
      c = s.last,
      v = p.index;
    return {
      opacity: u.interpolate({
        inputRange: [f, v, c],
        outputRange: [0, 1, 1],
        extrapolate: 'clamp',
      }),
    };
  },
  forNoAnimation: function (t) {
    return {};
  },
};
exports.default = p;
