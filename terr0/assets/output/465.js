var module284 = require('./284'),
  module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module464 = require('./464'),
  module466 = require('./466');

function v(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function w(t) {
  return 'ios' === module2.Platform.OS
    ? {
        accessibilityElementsHidden: !t,
      }
    : 'android' === module2.Platform.OS
    ? {
        importantForAccessibility: t ? 'yes' : 'no-hide-descendants',
      }
    : {};
}

var S = (function (t) {
    function n() {
      module356.default(this, n);
      return module358.default(this, module361.default(n).apply(this, arguments));
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.children,
            s = t.pointerEvents,
            c = t.style,
            u = t.position,
            f = t.transparent,
            p = t.scene,
            O = p.index,
            v = p.isActive,
            S =
              f || v
                ? 1
                : u.interpolate({
                    inputRange: [O, O + 1 - 1e-5, O + 1],
                    outputRange: [1, 1, 0],
                    extrapolate: 'clamp',
                  }),
            C = this.props.animatedStyle || {},
            E = C.shadowOpacity,
            P = C.overlayOpacity,
            k = module370.default(C, ['shadowOpacity', 'overlayOpacity']),
            A = module2.StyleSheet.flatten(c) || {},
            R = A.backgroundColor,
            x = module370.default(A, ['backgroundColor']);
          return React.default.createElement(
            module464.Screen,
            {
              pointerEvents: s,
              onComponentRef: this.props.onComponentRef,
              style: [module2.StyleSheet.absoluteFill, k, x],
              active: S,
            },
            !f && E
              ? React.default.createElement(module2.Animated.View, {
                  style: [
                    j.shadow,
                    {
                      shadowOpacity: E,
                    },
                  ],
                  pointerEvents: 'none',
                })
              : null,
            React.default.createElement(
              module2.Animated.View,
              module51.default({}, w(v), {
                style: [
                  f ? j.transparent : j.card,
                  R && 'transparent' !== R
                    ? {
                        backgroundColor: R,
                      }
                    : null,
                ],
              }),
              n
            ),
            P
              ? React.default.createElement(module2.Animated.View, {
                  pointerEvents: 'none',
                  style: [
                    j.overlay,
                    {
                      opacity: P,
                    },
                  ],
                })
              : null
          );
        },
      },
    ]);
    return n;
  })(React.default.Component),
  j = module2.StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: '#fff',
    },
    overlay: (function (t) {
      for (var o = 1; o < arguments.length; o++) {
        var l = null != arguments[o] ? arguments[o] : {};
        if (o % 2)
          v(Object(l), true).forEach(function (o) {
            module284.default(t, o, l[o]);
          });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
        else
          v(Object(l)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
          });
      }

      return t;
    })({}, module2.StyleSheet.absoluteFillObject, {
      backgroundColor: '#000',
    }),
    shadow: {
      top: 0,
      left: 0,
      bottom: 0,
      width: 3,
      position: 'absolute',
      backgroundColor: '#fff',
      shadowOffset: {
        width: -1,
        height: 1,
      },
      shadowRadius: 5,
      shadowColor: '#000',
    },
    transparent: {
      flex: 1,
      backgroundColor: 'transparent',
    },
  }),
  C = module466.default(S);

exports.default = C;
