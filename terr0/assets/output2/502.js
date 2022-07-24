var module404 = require('./404');

import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import PropTypes from 'prop-types';
import module2 from './2';

var module51 = require('./51'),
  module284 = require('./284'),
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

function _(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      S(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      S(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var w = 12,
  M = {
    timing: module2.Animated.spring,
    tension: 300,
    friction: 35,
  },
  T = (function (t, ...args) {
    function n() {
      var t, o;
      module356.default(this, n);
      (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args))))._currentIndex = o.props.navigationState.index;

      o._isMovingHorizontally = function (t, n) {
        return Math.abs(n.dx) > Math.abs(2 * n.dy) && Math.abs(n.vx) > Math.abs(2 * n.vy);
      };

      o._canMoveScreen = function (t, n) {
        if (false === o.props.swipeEnabled) return false;
        var s = o.props.navigationState.routes;
        return o._isMovingHorizontally(t, n) && ((n.dx >= w && o._currentIndex > 0) || (n.dx <= -12 && o._currentIndex < s.length - 1));
      };

      o._startGesture = function () {
        if (o.props.onSwipeStart) o.props.onSwipeStart();
        o.props.panX.stopAnimation();
      };

      o._respondToGesture = function (t, n) {
        var s = o.props.navigationState,
          p = s.routes,
          u = s.index;
        if (!((n.dx > 0 && u <= 0) || (n.dx < 0 && u >= p.length - 1))) o.props.panX.setValue(n.dx);
      };

      o._finishGesture = function (t, n) {
        var s = o.props,
          p = s.navigationState,
          u = s.layout,
          l = s.swipeDistanceThreshold,
          h = undefined === l ? u.width / 1.75 : l,
          c = o.props.swipeVelocityThreshold,
          f = undefined === c ? 0.15 : c;
        if (o.props.onSwipeEnd) o.props.onSwipeEnd();
        if ('android' === module2.Platform.OS) f /= 1e6;
        var v = 'number' == typeof o._pendingIndex ? o._pendingIndex : o._currentIndex,
          y = v;

        if (Math.abs(n.dx) > Math.abs(n.dy) && Math.abs(n.vx) > Math.abs(n.vy) && (Math.abs(n.dx) > h || Math.abs(n.vx) > f)) {
          y = Math.round((0 ** (v - n.dx / Math.abs(n.dx))) ** (p.routes.length - 1));
          o._currentIndex = y;
        }

        if (
          !(
            isFinite(y) &&
            o.props.canJumpToTab({
              route: o.props.navigationState.routes[y],
            })
          )
        )
          y = v;

        o._transitionTo(y);
      };

      o._transitionTo = function (t) {
        var n = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1],
          s = -t * o.props.layout.width,
          u = o.props.navigationState.routes[t];

        if (false === o.props.animationEnabled || false === n) {
          o.props.panX.setValue(0);
          o.props.offsetX.setValue(s);
          return void o.props.jumpTo(u.key);
        }

        var l = M.timing,
          h = module370(M, ['timing']);
        module2.Animated.parallel([
          l(
            o.props.panX,
            _({}, h, {
              toValue: 0,
            })
          ),
          l(
            o.props.offsetX,
            _({}, h, {
              toValue: s,
            })
          ),
        ]).start(function (t) {
          if (t.finished) {
            o.props.jumpTo(u.key);
            if (o.props.onAnimationEnd) o.props.onAnimationEnd();
            o._pendingIndex = null;
          }
        });
        o._pendingIndex = t;
      };

      o._panResponder = module2.PanResponder.create({
        onMoveShouldSetPanResponder: o._canMoveScreen,
        onMoveShouldSetPanResponderCapture: o._canMoveScreen,
        onPanResponderGrant: o._startGesture,
        onPanResponderMove: o._respondToGesture,
        onPanResponderTerminate: o._finishGesture,
        onPanResponderRelease: o._finishGesture,
        onPanResponderTerminationRequest: function () {
          return true;
        },
      });
      return o;
    }

    module362.default(n, t);
    module357(n, [
      {
        key: 'componentDidUpdate',
        value: function (t) {
          this._currentIndex = this.props.navigationState.index;
          if (t.navigationState.routes.length !== this.props.navigationState.routes.length || t.layout.width !== this.props.layout.width)
            this._transitionTo(this.props.navigationState.index, false);
          else if (t.navigationState.index !== this.props.navigationState.index) this._transitionTo(this.props.navigationState.index);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            s = n.panX,
            p = n.offsetX,
            u = n.navigationState,
            l = n.layout,
            h = n.children,
            c = l.width,
            f = u.routes,
            y = c * (f.length - 1),
            b = module2.Animated.multiply(
              module2.Animated.add(s, p).interpolate({
                inputRange: [-y, 0],
                outputRange: [-y, 0],
                extrapolate: 'clamp',
              }),
              module2.I18nManager.isRTL ? -1 : 1
            );
          return React.createElement(
            module2.Animated.View,
            module51.default(
              {
                style: [
                  P.sheet,
                  c
                    ? {
                        width: f.length * c,
                        transform: [
                          {
                            translateX: b,
                          },
                        ],
                      }
                    : null,
                ],
              },
              this._panResponder.panHandlers
            ),
            React.Children.map(h, function (n, o) {
              var s = u.routes[o],
                p = o === u.index;
              return React.createElement(
                module2.View,
                {
                  key: s.key,
                  testID: t.props.getTestID({
                    route: s,
                  }),
                  style: c
                    ? {
                        width: c,
                      }
                    : p
                    ? module2.StyleSheet.absoluteFill
                    : null,
                },
                p || c ? n : null
              );
            })
          );
        },
      },
    ]);
    return n;
  })(React.Component);

export default T;
T.propTypes = _({}, module498.PagerRendererPropType, {
  swipeDistanceThreshold: PropTypes.number,
  swipeVelocityThreshold: PropTypes.number,
});
T.defaultProps = {
  canJumpToTab: function () {
    return true;
  },
  initialLayout: {
    height: 0,
    width: 0,
  },
};
var P = module2.StyleSheet.create({
  sheet: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});
