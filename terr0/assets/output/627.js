exports.getInputRangeFromIndexes = u;

exports.defaultScrollInterpolator = function (t, n) {
  return {
    inputRange: u([1, 0, -1], t, n),
    outputRange: [0, 1, 0],
  };
};

exports.defaultAnimatedStyles = function (t, n, p) {
  var l = {},
    u = {};
  if (p.inactiveSlideOpacity < 1)
    l = {
      opacity: n.interpolate({
        inputRange: [0, 1],
        outputRange: [p.inactiveSlideOpacity, 1],
      }),
    };
  if (p.inactiveSlideScale < 1)
    u = {
      transform: [
        {
          scale: n.interpolate({
            inputRange: [0, 1],
            outputRange: [p.inactiveSlideScale, 1],
          }),
        },
      ],
    };
  return o({}, l, {}, u);
};

exports.shiftAnimatedStyles = function (t, p, l) {
  var u = {},
    c = {},
    R = {};
  if (l.inactiveSlideOpacity < 1)
    u = {
      opacity: p.interpolate({
        inputRange: [0, 1],
        outputRange: [l.inactiveSlideOpacity, 1],
      }),
    };
  if (l.inactiveSlideScale < 1)
    c = {
      scale: p.interpolate({
        inputRange: [0, 1],
        outputRange: [l.inactiveSlideScale, 1],
      }),
    };

  if (0 !== l.inactiveSlideShift) {
    var f = l.vertical ? 'translateX' : 'translateY';
    R = module284.default(
      {},
      f,
      p.interpolate({
        inputRange: [0, 1],
        outputRange: [l.inactiveSlideShift, 0],
      })
    );
  }

  return o({}, u, {
    transform: [o({}, c), o({}, R)],
  });
};

exports.stackScrollInterpolator = function (t, n) {
  var p = module2 ? [1, 0, -1, -2, -3] : [3, 2, 1, 0, -1];
  return {
    inputRange: u(p, t, n),
    outputRange: p,
  };
};

exports.stackAnimatedStyles = function (t, p, o, u) {
  var c = o.vertical ? o.itemHeight : o.itemWidth,
    R = o.vertical ? 'translateY' : 'translateX';
  u = u || 0 === u ? u : 18;

  var f = function (t, n) {
    var p = (1 / n) * t,
      o = -Math.round(c * p),
      R = Math.round((c - c * n) / 2),
      f = Math.round((u * Math.abs(t)) / n);
    return module2 ? o - R - f : o + R + f;
  };

  return module2
    ? {
        opacity: p.interpolate({
          inputRange: [-3, -2, -1, 0],
          outputRange: [0, 0.5, 0.75, 1],
          extrapolate: 'clamp',
        }),
        transform: [
          {
            scale: p.interpolate({
              inputRange: [-2, -1, 0, 1],
              outputRange: [0.8, 0.9, 1, 0.9],
              extrapolate: 'clamp',
            }),
          },
          module284.default(
            {},
            R,
            p.interpolate({
              inputRange: [-3, -2, -1, 0, 1],
              outputRange: [f(-3, 0.8), f(-2, 0.8), f(-1, 0.9), 0, 0.5 * c],
              extrapolate: 'clamp',
            })
          ),
        ],
      }
    : {
        zIndex: o.data.length - t,
        opacity: p.interpolate({
          inputRange: [0, 1, 2, 3],
          outputRange: [1, 0.75, 0.5, 0],
          extrapolate: 'clamp',
        }),
        transform: [
          {
            scale: p.interpolate({
              inputRange: [-1, 0, 1, 2],
              outputRange: [0.9, 1, 0.9, 0.8],
              extrapolate: 'clamp',
            }),
          },
          module284.default(
            {},
            R,
            p.interpolate({
              inputRange: [-1, 0, 1, 2, 3],
              outputRange: [0.5 * -c, 0, f(1, 0.9), f(2, 0.8), f(3, 0.8)],
              extrapolate: 'clamp',
            })
          ),
        ],
      };
};

exports.tinderScrollInterpolator = function (t, n) {
  var p = module2 ? [1, 0, -1, -2, -3] : [3, 2, 1, 0, -1];
  return {
    inputRange: u(p, t, n),
    outputRange: p,
  };
};

exports.tinderAnimatedStyles = function (t, p, o, u) {
  var c = o.vertical ? o.itemHeight : o.itemWidth,
    R = o.vertical ? 'translateY' : 'translateX',
    f = o.vertical ? 'translateX' : 'translateY',
    s = module2 ? 0.92 : 1;
  u = u || 0 === u ? u : 9;

  var v = function (t, n) {
      var p = (1 / n) * t;
      return -Math.round(c * p);
    },
    y = function (t, n) {
      return Math.round((u * Math.abs(t)) / n);
    };

  return module2
    ? {
        opacity: p.interpolate({
          inputRange: [-3, -2, -1, 0, 1],
          outputRange: [0, s, s, 1, 0],
          extrapolate: 'clamp',
        }),
        transform: [
          {
            scale: p.interpolate({
              inputRange: [-3, -2, -1, 0],
              outputRange: [0.88, 0.92, 0.96, 1],
              extrapolate: 'clamp',
            }),
          },
          {
            rotate: p.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '22deg'],
              extrapolate: 'clamp',
            }),
          },
          module284.default(
            {},
            R,
            p.interpolate({
              inputRange: [-3, -2, -1, 0, 1],
              outputRange: [v(-3, 0.88), v(-2, 0.92), v(-1, 0.96), 0, 1.1 * c],
              extrapolate: 'clamp',
            })
          ),
          module284.default(
            {},
            f,
            p.interpolate({
              inputRange: [-3, -2, -1, 0],
              outputRange: [y(-3, 0.88), y(-2, 0.92), y(-1, 0.96), 0],
              extrapolate: 'clamp',
            })
          ),
        ],
      }
    : {
        zIndex: o.data.length - t,
        opacity: p.interpolate({
          inputRange: [-1, 0, 1, 2, 3],
          outputRange: [0, 1, s, s, 0],
          extrapolate: 'clamp',
        }),
        transform: [
          {
            scale: p.interpolate({
              inputRange: [0, 1, 2, 3],
              outputRange: [1, 0.96, 0.92, 0.88],
              extrapolate: 'clamp',
            }),
          },
          {
            rotate: p.interpolate({
              inputRange: [-1, 0],
              outputRange: ['-22deg', '0deg'],
              extrapolate: 'clamp',
            }),
          },
          module284.default(
            {},
            R,
            p.interpolate({
              inputRange: [-1, 0, 1, 2, 3],
              outputRange: [1.1 * -c, 0, v(1, 0.96), v(2, 0.92), v(3, 0.88)],
              extrapolate: 'clamp',
            })
          ),
          module284.default(
            {},
            f,
            p.interpolate({
              inputRange: [0, 1, 2, 3],
              outputRange: [0, y(1, 0.96), y(2, 0.92), y(3, 0.88)],
              extrapolate: 'clamp',
            })
          ),
        ],
      };
};

var module284 = require('./284');

function p(t, n) {
  var p = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    p.push.apply(p, o);
  }

  return p;
}

function o(t) {
  for (var o = 1; o < arguments.length; o++) {
    var l = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      p(Object(l), true).forEach(function (p) {
        module284.default(t, p, l[p]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      p(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var module2 = 'android' === require('./2').Platform.OS;

function u(t, n, p) {
  for (var o = p.vertical ? p.itemHeight : p.itemWidth, l = [], u = 0; u < t.length; u++) l.push((n - t[u]) * o);

  return l;
}
