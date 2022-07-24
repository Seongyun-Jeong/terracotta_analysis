var module404 = require('./404');

import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import PropTypes from 'prop-types';
import module2 from './2';

var module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module498 = require('./498');

function S(t, n) {
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

function w(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      S(Object(s), true).forEach(function (n) {
        module284.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      S(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

var E = {
    timing: module2.Animated.spring,
    tension: 68,
    friction: 12,
  },
  O = (function (t, ...args) {
    function n() {
      var t, o;
      module356.default(this, n);

      (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args))))._handleHandlerStateChange = function (t) {
        var n = o.props.GestureHandler;
        if (t.nativeEvent.state === n.State.BEGAN) o.props.onSwipeStart && o.props.onSwipeStart();
        else if (t.nativeEvent.state === n.State.END) {
          if (o.props.onSwipeEnd) o.props.onSwipeEnd();
          var s = o.props,
            p = s.navigationState,
            l = s.layout,
            u = s.swipeDistanceThreshold,
            h = undefined === u ? l.width / 1.75 : u,
            c = s.swipeVelocityThreshold,
            v = undefined === c ? 150 : c,
            f = t.nativeEvent,
            y = f.translationX,
            b = f.translationY,
            S = f.velocityX,
            w = f.velocityY,
            E = 'number' == typeof o._pendingIndex ? o._pendingIndex : p.index,
            O = E;
          if (Math.abs(y) > Math.abs(b) && Math.abs(S) > Math.abs(w) && (Math.abs(y) > h || Math.abs(S) > v)) O = Math.round((0 ** (E - y / Math.abs(y))) ** (p.routes.length - 1));
          if (!(isFinite(O) && o.props.canJumpToTab(o.props.navigationState.routes[O]))) O = E;

          o._transitionTo(O, S);
        }
      };

      o._transitionTo = function (t, n) {
        var p = !(arguments.length > 2 && undefined !== arguments[2]) || arguments[2],
          l = -t * o.props.layout.width;

        if (false === o.props.animationEnabled || false === p) {
          o.props.panX.setValue(0);
          return void o.props.offsetX.setValue(l);
        }

        var u = E.timing,
          h = module370(E, ['timing']),
          c = o.props.useNativeDriver;
        module2.Animated.parallel([
          u(
            o.props.panX,
            w({}, h, {
              toValue: 0,
              velocity: n,
              useNativeDriver: c,
            })
          ),
          u(
            o.props.offsetX,
            w({}, h, {
              toValue: l,
              velocity: n,
              useNativeDriver: c,
            })
          ),
        ]).start(function (n) {
          if (n.finished) {
            var s = o.props.navigationState.routes[t];
            o.props.jumpTo(s.key);
            if (o.props.onAnimationEnd) o.props.onAnimationEnd();
            o._pendingIndex = null;
          }
        });
        o._pendingIndex = t;
      };

      return o;
    }

    module362.default(n, t);
    module357(n, [
      {
        key: 'componentDidUpdate',
        value: function (t) {
          if (t.navigationState.routes.length !== this.props.navigationState.routes.length || t.layout.width !== this.props.layout.width)
            this._transitionTo(this.props.navigationState.index, undefined, false);
          else if (t.navigationState.index !== this.props.navigationState.index && this.props.navigationState.index !== this._pendingIndex)
            this._transitionTo(this.props.navigationState.index);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            o = n.GestureHandler,
            s = n.panX,
            p = n.offsetX,
            l = n.layout,
            u = n.navigationState,
            h = n.swipeEnabled,
            c = n.children,
            f = l.width,
            b = u.routes,
            S = f * (b.length - 1),
            w =
              b.length > 1
                ? module2.Animated.add(s, p).interpolate({
                    inputRange: [-S, 0],
                    outputRange: [-S, 0],
                    extrapolate: 'clamp',
                  })
                : 0;
          return (
            <o.PanGestureHandler
              enabled={0 !== l.width && false !== h}
              minDeltaX={10}
              onGestureEvent={module2.Animated.event(
                [
                  {
                    nativeEvent: {
                      translationX: this.props.panX,
                    },
                  },
                ],
                {
                  useNativeDriver: this.props.useNativeDriver,
                }
              )}
              onHandlerStateChange={this._handleHandlerStateChange}
            >
              {React.createElement(
                module2.Animated.View,
                {
                  style: [
                    D.sheet,
                    f
                      ? {
                          width: b.length * f,
                          transform: [
                            {
                              translateX: w,
                            },
                          ],
                        }
                      : null,
                  ],
                },
                React.Children.map(c, function (n, o) {
                  var s = u.routes[o],
                    p = o === u.index;
                  return React.createElement(
                    module2.View,
                    {
                      key: s.key,
                      testID: t.props.getTestID({
                        route: s,
                      }),
                      accessibilityElementsHidden: !p,
                      importantForAccessibility: p ? 'auto' : 'no-hide-descendants',
                      style: f
                        ? {
                            width: f,
                          }
                        : p
                        ? module2.StyleSheet.absoluteFill
                        : null,
                    },
                    p || f ? n : null
                  );
                })
              )}
            </o.PanGestureHandler>
          );
        },
      },
    ]);
    return n;
  })(React.Component);

export default O;
O.propTypes = w({}, module498.PagerRendererPropType, {
  swipeDistanceThreshold: PropTypes.number,
  swipeVelocityThreshold: PropTypes.number,
  GestureHandler: PropTypes.object,
});
O.defaultProps = {
  canJumpToTab: function () {
    return true;
  },
};
var D = module2.StyleSheet.create({
  sheet: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});
