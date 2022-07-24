import { Dimensions, I18nManager } from './2';

var module476 = require('./476');

function u(t) {
  return !t || null !== t.descriptor.options.header;
}

var s = function (t, n, o, s) {
  return {
    inputRange: [n, n + 0.001, o - 0.9, o - 0.2, o, s - 0.001, s],
    outputRange: [0, u(t[n]) ? 0 : 1, u(t[n]) ? 0 : 1, u(t[n]) ? 0.3 : 1, u(t[o]) ? 1 : 0, u(t[s]) ? 0 : 1, 0],
    extrapolate: 'clamp',
  };
};

function p(t) {
  return !t[t.length - 1].isActive;
}

var f = Dimensions.get('window').width / 2 - 70 - 25;
var c = Dimensions.get('window').width / 2 - 70 + 25;
var l = {
    opacity: 1,
  },
  v = {
    opacity: 0,
  };

function R(t) {
  var n = t.navigation,
    o = t.scene;
  return n.state.index === o.index ? l : v;
}

var x = Dimensions.get('window').width;
var y = {
  forLayout: function (t) {
    var s = t.layout,
      f = t.position,
      c = t.scene,
      l = t.scenes;
    if ('float' !== t.mode) return {};
    var v = p(l),
      R = module476.default(t);
    if (!R) return {};
    var x = R.first,
      y = R.last,
      h = c.index,
      w = s.initWidth || Dimensions.get('window').width;
    if ((v && !u(l[h]) && !u(l[y])) || (!v && !u(l[x]) && !u(l[h])))
      return {
        transform: [
          {
            translateX: w,
          },
        ],
      };
    var L = I18nManager.isRTL ? -1 : 1;
    return {
      transform: [
        {
          translateX: f.interpolate({
            inputRange: [x, h, y],
            outputRange: [L * (u(l[x]) ? 0 : w), L * (u(l[h]) ? 0 : v ? w : -w), L * (u(l[y]) ? 0 : -w)],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  },
  forLeft: function (t) {
    var n = t.position,
      u = t.scene,
      p = t.scenes,
      f = module476.default(t);
    if (!f)
      return {
        opacity: 0,
      };
    var c = f.first,
      l = f.last,
      v = u.index;
    return {
      opacity: n.interpolate(s(p, c, v, l)),
    };
  },
  forLeftButton: function (t) {
    var n = t.position,
      s = t.scene,
      p = t.scenes,
      f = module476.default(t);
    if (!f)
      return {
        opacity: 0,
      };
    var c = f.first,
      l = f.last,
      v = s.index,
      R = [c, c + 0.001, c + Math.abs(v - c) / 2, v, l - Math.abs(l - v) / 2, l - 0.001, l],
      x = [0, u(p[c]) ? 0 : 1, u(p[c]) ? 0.3 : 1, u(p[v]) ? 1 : 0, u(p[l]) ? 0.3 : 1, u(p[l]) ? 0 : 1, 0];
    return {
      opacity: n.interpolate({
        inputRange: R,
        outputRange: x,
        extrapolate: 'clamp',
      }),
    };
  },
  forLeftLabel: function (t) {
    var s = t.position,
      p = t.scene,
      c = t.scenes,
      l = module476.default(t);
    if (!l)
      return {
        opacity: 0,
      };
    var v = l.first,
      R = l.last,
      x = p.index,
      y = f;
    return {
      opacity: s.interpolate({
        inputRange: [v, v + 0.001, x - 0.35, x, x + 0.5, R - 0.001, R],
        outputRange: [0, u(c[v]) ? 0 : 1, u(c[v]) ? 0 : 1, u(c[x]) ? 1 : 0, u(c[R]) ? 0.5 : 1, u(c[R]) ? 0 : 1, 0],
        extrapolate: 'clamp',
      }),
      transform: [
        {
          translateX: s.interpolate({
            inputRange: [v, v + 0.001, x, R - 0.001, R],
            outputRange: I18nManager.isRTL ? [1.5 * -y, u(c[v]) ? 1.5 * -y : 0, 0, u(c[R]) ? y : 0, y] : [y, u(c[v]) ? y : 0, 0, u(c[R]) ? 1.5 * -y : 0, 1.5 * -y],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  },
  forCenterFromLeft: function (t) {
    var s = t.position,
      p = t.scene,
      f = t.scenes,
      l = module476.default(t);
    if (!l)
      return {
        opacity: 0,
      };
    var v = l.first,
      R = l.last,
      x = p.index,
      y = c;
    return {
      opacity: s.interpolate({
        inputRange: [v, v + 0.001, x - 0.5, x, x + 0.7, R - 0.001, R],
        outputRange: [0, u(f[v]) ? 0 : 1, u(f[v]) ? 0 : 1, u(f[x]) ? 1 : 0, u(f[R]) ? 0 : 1, u(f[R]) ? 0 : 1, 0],
        extrapolate: 'clamp',
      }),
      transform: [
        {
          translateX: s.interpolate({
            inputRange: [v, v + 0.001, x, R - 0.001, R],
            outputRange: I18nManager.isRTL ? [-y, u(f[v]) ? -y : 0, 0, u(f[R]) ? y : 0, y] : [y, u(f[v]) ? y : 0, 0, u(f[R]) ? -y : 0, -y],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  },
  forCenter: function (t) {
    var n = t.position,
      u = t.scene,
      p = t.scenes,
      f = module476.default(t);
    if (!f)
      return {
        opacity: 0,
      };
    var c = f.first,
      l = f.last,
      v = u.index;
    return {
      opacity: n.interpolate(s(p, c, v, l)),
    };
  },
  forRight: function (t) {
    var n = t.position,
      u = t.scene,
      p = t.scenes,
      f = module476.default(t);
    if (!f)
      return {
        opacity: 0,
      };
    var c = f.first,
      l = f.last,
      v = u.index;
    return {
      opacity: n.interpolate(s(p, c, v, l)),
    };
  },
  forBackground: R,
  forBackgroundWithInactiveHidden: R,
  forBackgroundWithFade: function (t) {
    var n = t.position,
      u = t.scene,
      s = module476.default(t);
    return s
      ? {
          opacity: n.interpolate({
            inputRange: [s.first, u.index, s.last],
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          }),
        }
      : {
          opacity: 0,
        };
  },
  forBackgroundWithTranslation: function (t) {
    var u = t.position,
      s = t.scene,
      p = module476.default(t);
    if (!p)
      return {
        opacity: 0,
      };
    var f = p.first,
      c = p.last,
      l = s.index,
      v = [x, 0, -x];
    return {
      transform: [
        {
          translateX: u.interpolate({
            inputRange: [f, l, c],
            outputRange: I18nManager.isRTL ? v.reverse() : v,
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  },
};
export default y;
