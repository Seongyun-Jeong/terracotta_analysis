var module404 = require('./404');

exports.default = function (t) {
  var n,
    module284,
    V = t.displayName || t.name || 'Component',
    E = module2.Animated.createAnimatedComponent(t);

  module284 = n = (function (t) {
    function n(t) {
      var o;
      module356.default(this, n);
      (o = module358.default(this, module361.default(n).call(this, t))).ref = null;

      o.handleRef = function (t) {
        o.ref = t;
      };

      var u = new module2.Animated.Value(P(0, o.props.direction)),
        p = {},
        y = {};

      if (t.animation) {
        y = B(t.animation);
        p = x(y, u);
      }

      o.state = {
        animationValue: u,
        animationStyle: p,
        compiledAnimation: y,
        transitionStyle: {},
        transitionValues: {},
        currentTransitionValues: {},
      };
      if (t.transition) o.state = j({}, o.state, {}, o.initializeTransitionState(t.transition));
      o.delayTimer = null;
      module641.getAnimationNames().forEach(function (t) {
        if (!(t in module360.default(o))) o[t] = o.animate.bind(module360.default(o), t);
      });
      return o;
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'initializeTransitionState',
        value: function (t) {
          var n = {},
            o = {},
            s = module637.default(t, this.props.style);
          Object.keys(s).forEach(function (t) {
            var u = s[t];

            if (-1 !== w.indexOf(t) || 'number' != typeof u) {
              n[t] = new module2.Animated.Value(0);
              o[t] = u;
            } else {
              var l = new module2.Animated.Value(u);
              n[t] = l;
              o[t] = l;
            }
          });
          return {
            currentTransitionValues: s,
            transitionStyle: o,
            transitionValues: n,
          };
        },
      },
      {
        key: 'getTransitionState',
        value: function (t) {
          var n = this,
            o = 'string' == typeof t ? [t] : t,
            s = this.state,
            u = s.transitionValues,
            l = s.currentTransitionValues,
            f = s.transitionStyle,
            c = o.filter(function (t) {
              return !n.state.transitionValues[t];
            });

          if (c.length) {
            var p = this.initializeTransitionState(c);
            u = j({}, u, {}, p.transitionValues);
            l = j({}, l, {}, p.currentTransitionValues);
            f = j({}, f, {}, p.transitionStyle);
          }

          return {
            transitionValues: u,
            currentTransitionValues: l,
            transitionStyle: f,
          };
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          if (this.ref) this.ref.setNativeProps(t);
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var t = this,
            n = this.props,
            o = n.animation,
            s = n.duration,
            u = n.delay,
            l = n.onAnimationBegin,
            f = n.iterationDelay;

          if (o) {
            var c = function () {
              l();
              t.startAnimation(s, 0, f, function (n) {
                return t.props.onAnimationEnd(n);
              });
              t.delayTimer = null;
            };

            if (u) this.delayTimer = setTimeout(c, u);
            else c();
          }
        },
      },
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          var n,
            o,
            s = this,
            u = t.animation,
            l = t.delay,
            f = t.duration,
            c = t.easing,
            p = t.iterationDelay,
            y = t.transition,
            v = t.onAnimationBegin;

          if (y) {
            var h = module637.default(y, t.style);
            this.transitionTo(h, f, c, l);
          } else {
            n = u;
            o = this.props.animation;
            if (n !== o && JSON.stringify(n) !== JSON.stringify(o))
              u
                ? this.delayTimer
                  ? this.setAnimation(u)
                  : (v(),
                    this.animate(u, f, p).then(function (t) {
                      return s.props.onAnimationEnd(t);
                    }))
                : this.stopAnimation();
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this.delayTimer) clearTimeout(this.delayTimer);
        },
      },
      {
        key: 'setAnimation',
        value: function (t, n) {
          var o = B(t);
          this.setState(function (t) {
            return {
              animationStyle: x(o, t.animationValue),
              compiledAnimation: o,
            };
          }, n);
        },
      },
      {
        key: 'animate',
        value: function (t, n, o) {
          var s = this;
          return new Promise(function (u) {
            s.setAnimation(t, function () {
              s.startAnimation(n, 0, o, u);
            });
          });
        },
      },
      {
        key: 'stopAnimation',
        value: function () {
          this.setState({
            scheduledAnimation: false,
            animationStyle: {},
          });
          this.state.animationValue.stopAnimation();

          if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = null;
          }
        },
      },
      {
        key: 'startAnimation',
        value: function (t, n, o, s) {
          var u = this,
            l = this.state,
            f = l.animationValue,
            c = l.compiledAnimation,
            p = this.props,
            y = p.direction,
            v = p.iterationCount,
            h = p.useNativeDriver,
            T = this.props.easing || c.easing || 'ease',
            O = n || 0,
            A = P(O, y),
            V = C(O, y);
          f.setValue(A);
          if ('string' == typeof T) T = module642.default[T];
          var k = 'reverse' === y || ('alternate' === y && !V) || ('alternate-reverse' === y && !V);
          if (k) T = module2.Easing.out(T);
          var E = {
            toValue: V,
            easing: T,
            isInteraction: v <= 1,
            duration: t || this.props.duration || 1e3,
            useNativeDriver: h,
            delay: o || 0,
          };
          module2.Animated.timing(f, E).start(function (n) {
            O += 1;
            if (n.finished && u.props.animation && ('infinite' === v || O < v)) u.startAnimation(t, O, o, s);
            else if (s) s(n);
          });
        },
      },
      {
        key: 'transition',
        value: function (t, n, o, s) {
          var u = this,
            l = module638.default(t),
            f = module638.default(n),
            c = Object.keys(f),
            p = this.getTransitionState(c),
            y = p.transitionValues,
            v = p.currentTransitionValues,
            h = p.transitionStyle;
          c.forEach(function (t) {
            var n = l[t],
              o = f[t],
              s = y[t];
            if (!s) s = new module2.Animated.Value(0);
            var u = -1 !== w.indexOf(t) || 'number' != typeof value,
              c = -1 !== D.indexOf(t);

            if (u) {
              s.setValue(0);
              h[t] = s.interpolate({
                inputRange: [0, 1],
                outputRange: [n, o],
              });
              v[t] = o;
              f[t] = 1;
            } else {
              if (c) {
                h[t] = s.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolateLeft: 'clamp',
                });
                v[t] = o;
              } else h[t] = s;

              s.setValue(n);
            }
          });
          this.setState(
            {
              transitionValues: y,
              transitionStyle: h,
              currentTransitionValues: v,
            },
            function () {
              u.transitionToValues(f, o || u.props.duration, s, u.props.delay);
            }
          );
        },
      },
      {
        key: 'transitionTo',
        value: function (t, n, o, s) {
          var u = this,
            l = this.state.currentTransitionValues,
            f = module638.default(t),
            c = {
              from: {},
              to: {},
            };
          Object.keys(f).forEach(function (t) {
            var p = f[t],
              y = -1 !== w.indexOf(t) || 'number' != typeof value,
              v = -1 !== D.indexOf(t),
              h = u.state.transitionStyle[t],
              b = u.state.transitionValues[t];

            if (y || v || !h || h !== b) {
              var T = l[t];

              if (undefined === T && u.props.style) {
                var A = module637.default(t, u.props.style);
                T = A[t];
              }

              c.from[t] = T;
              c.to[t] = p;
            } else
              R(
                t,
                b,
                p,
                n,
                o,
                u.props.useNativeDriver,
                s,
                function (t) {
                  return u.props.onTransitionBegin(t);
                },
                function (t) {
                  return u.props.onTransitionEnd(t);
                }
              );
          });
          if (Object.keys(c.from).length) this.transition(c.from, c.to, n, o);
        },
      },
      {
        key: 'transitionToValues',
        value: function (t, n, o, s) {
          var u = this;
          Object.keys(t).forEach(function (l) {
            var f = u.state.transitionValues[l],
              c = t[l];
            R(
              l,
              f,
              c,
              n,
              o,
              u.props.useNativeDriver,
              s,
              function (t) {
                return u.props.onTransitionBegin(t);
              },
              function (t) {
                return u.props.onTransitionEnd(t);
              }
            );
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.style,
            o = t.animation,
            s = t.transition;
          if (o && s) throw new Error('You cannot combine animation and transition props');
          var u = N(
            [
              'animation',
              'duration',
              'direction',
              'delay',
              'easing',
              'iterationCount',
              'iterationDelay',
              'onAnimationBegin',
              'onAnimationEnd',
              'onTransitionBegin',
              'onTransitionEnd',
              'style',
              'transition',
              'useNativeDriver',
            ],
            this.props
          );
          return React.default.createElement(
            E,
            module51.default(
              {
                ref: this.handleRef,
                style: [n, this.state.animationStyle, module636.default(this.state.transitionStyle)],
              },
              u
            )
          );
        },
      },
    ]);
    return n;
  })(React.Component);

  n.displayName = 'withAnimatable(' + V + ')';
  n.propTypes = {
    animation: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.object]),
    duration: PropTypes.default.number,
    direction: PropTypes.default.oneOf(['normal', 'reverse', 'alternate', 'alternate-reverse']),
    delay: PropTypes.default.number,
    easing: PropTypes.default.oneOfType([PropTypes.default.oneOf(Object.keys(module642.default)), PropTypes.default.func]),
    iterationCount: function (t, n) {
      var o = t[n];
      return 'infinite' === o || ('number' == typeof o && o >= 1) ? null : new Error('iterationCount must be a positive number or "infinite"');
    },
    iterationDelay: PropTypes.default.number,
    onAnimationBegin: PropTypes.default.func,
    onAnimationEnd: PropTypes.default.func,
    onTransitionBegin: PropTypes.default.func,
    onTransitionEnd: PropTypes.default.func,
    style: PropTypes.default.oneOfType([PropTypes.default.number, PropTypes.default.array, PropTypes.default.object]),
    transition: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.arrayOf(PropTypes.default.string)]),
    useNativeDriver: PropTypes.default.bool,
  };
  n.defaultProps = {
    animation: undefined,
    delay: 0,
    direction: 'normal',
    duration: undefined,
    easing: undefined,
    iterationCount: 1,
    iterationDelay: 0,
    onAnimationBegin: function () {},
    onAnimationEnd: function () {},
    onTransitionBegin: function () {},
    onTransitionEnd: function () {},
    style: undefined,
    transition: undefined,
    useNativeDriver: false,
  };
  return module284;
};

var module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module51 = require('./51'),
  React = module404(require('react')),
  PropTypes = require('prop-types'),
  module2 = require('./2'),
  module636 = require('./636'),
  module637 = require('./637'),
  module638 = require('./638'),
  module640 = require('./640'),
  module641 = require('./641'),
  module642 = require('./642');

function E(t, n) {
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

function j(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      E(Object(s), true).forEach(function (n) {
        module284.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      E(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

var w = [
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skewX',
    'skewY',
    'transformMatrix',
    'backgroundColor',
    'borderColor',
    'borderTopColor',
    'borderRightColor',
    'borderBottomColor',
    'borderLeftColor',
    'shadowColor',
    'color',
    'textDecorationColor',
    'tintColor',
  ],
  D = ['width', 'height'];

function N(t, n) {
  var o = {};
  Object.keys(n).forEach(function (s) {
    if (-1 === t.indexOf(s)) o[s] = n[s];
  });
  return o;
}

function C(t, n) {
  switch (n) {
    case 'reverse':
      return 0;

    case 'alternate':
      return t % 2 ? 0 : 1;

    case 'alternate-reverse':
      return t % 2 ? 1 : 0;

    case 'normal':
    default:
      return 1;
  }
}

function P(t, n) {
  return C(t, n) ? 0 : 1;
}

function B(t) {
  if ('string' == typeof t) {
    var n = module641.getAnimationByName(t);
    if (!n) throw new Error('No animation registred by the name of ' + t);
    return n;
  }

  return module640.default(t);
}

function x(t, n) {
  var o = {};
  Object.keys(t).forEach(function (s) {
    if ('style' === s) module51.default(o, t.style);
    else if ('easing' !== s) o[s] = n.interpolate(t[s]);
  });
  return module636.default(o);
}

function R(t, n, o, s, u) {
  var l = arguments.length > 5 && undefined !== arguments[5] && arguments[5],
    f = arguments.length > 6 ? arguments[6] : undefined,
    c = arguments.length > 7 ? arguments[7] : undefined,
    p = arguments.length > 8 ? arguments[8] : undefined,
    y =
      s || u || f
        ? module2.Animated.timing(n, {
            toValue: o,
            delay: f,
            duration: s || 1e3,
            easing: 'function' == typeof u ? u : module642.default[u || 'ease'],
            useNativeDriver: l,
          })
        : module2.Animated.spring(n, {
            toValue: o,
            useNativeDriver: l,
          });
  setTimeout(function () {
    return c(t);
  }, f);
  y.start(function () {
    return p(t);
  });
}
