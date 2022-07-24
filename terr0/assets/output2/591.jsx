var module404 = require('./404');

import React from 'react';
import module2 from './2';

var module51 = require('./51'),
  module284 = require('./284'),
  module405 = require('./405'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module436 = require('./436'),
  module522 = module404(require('./522')),
  module588 = require('./588'),
  I = '/Users/osdnk/work/react-native-tab-view/src/Pager.tsx';

function T(t, n) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    s.push.apply(s, o);
  }

  return s;
}

function V(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      T(s, true).forEach(function (n) {
        module284.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      T(s).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

var C = module522.default.Clock,
  b = module522.default.Value,
  E = module522.default.onChange,
  X = module522.default.and,
  k = module522.default.abs,
  L = module522.default.add,
  D = module522.default.block,
  O = module522.default.call,
  j = module522.default.ceil,
  P = module522.default.clockRunning,
  M = module522.default.cond,
  F = module522.default.divide,
  G = module522.default.eq,
  R = module522.default.event,
  _ = module522.default.floor,
  W = module522.default.greaterThan,
  N = module522.default.lessThan,
  A = module522.default.max,
  U = module522.default.min,
  H = module522.default.multiply,
  q = module522.default.neq,
  K = module522.default.not,
  Y = module522.default.round,
  z = module522.default.set,
  B = module522.default.spring,
  J = module522.default.startClock,
  Q = module522.default.stopClock,
  Z = module522.default.sub,
  $ = module522.default.timing,
  ee = 1,
  te = 0,
  ne = 0,
  ie = -1,
  se = 1,
  oe = -1,
  re = 20,
  ae = 0.2,
  de = {
    stiffness: 1e3,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
  le = 1,
  pe = {
    duration: 200,
    easing: module522.Easing.out(module522.Easing.cubic),
  },
  ue = (function (t, ...args) {
    function n() {
      var t, s;
      module356.default(this, n);
      (s = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).clock = new C();
      s.velocityX = new b(0);
      s.gestureX = new b(0);
      s.gestureState = new b(module436.State.UNDETERMINED);
      s.offsetX = new b(0);
      s.progress = new b(s.props.navigationState.index * s.props.layout.width * oe);
      s.index = new b(s.props.navigationState.index);
      s.nextIndex = new b(ie);
      s.lastEnteredIndex = new b(s.props.navigationState.index);
      s.isSwiping = new b(te);
      s.isSwipeGesture = new b(te);
      s.indexAtSwipeEnd = new b(s.props.navigationState.index);
      s.routesLength = new b(s.props.navigationState.routes.length);
      s.layoutWidth = new b(s.props.layout.width);
      s.swipeVelocityImpact = new b(undefined !== s.props.swipeVelocityImpact ? s.props.swipeVelocityImpact : ae);
      s.springVelocityScale = new b(undefined !== s.props.springVelocityScale ? s.props.springVelocityScale : le);
      s.position = M(s.layoutWidth, F(H(s.progress, -1), s.layoutWidth), s.index);
      s.springConfig = {
        damping: new b(undefined !== s.props.springConfig.damping ? s.props.springConfig.damping : de.damping),
        mass: new b(undefined !== s.props.springConfig.mass ? s.props.springConfig.mass : de.mass),
        stiffness: new b(undefined !== s.props.springConfig.stiffness ? s.props.springConfig.stiffness : de.stiffness),
        restSpeedThreshold: new b(undefined !== s.props.springConfig.restSpeedThreshold ? s.props.springConfig.restSpeedThreshold : de.restSpeedThreshold),
        restDisplacementThreshold: new b(
          undefined !== s.props.springConfig.restDisplacementThreshold ? s.props.springConfig.restDisplacementThreshold : de.restDisplacementThreshold
        ),
      };
      s.timingConfig = {
        duration: new b(undefined !== s.props.timingConfig.duration ? s.props.timingConfig.duration : pe.duration),
      };
      s.initialVelocityForSpring = new b(0);
      s.currentIndexValue = s.props.navigationState.index;
      s.pendingIndexValue = undefined;
      s.previouslyFocusedTextInput = null;
      s.enterListeners = [];

      s.jumpToIndex = function (t) {
        s.isSwipeGesture.setValue(te);
        s.nextIndex.setValue(t);
      };

      s.jumpTo = function (t) {
        var n = s.props,
          o = n.navigationState,
          l = n.keyboardDismissMode,
          p = n.onIndexChange,
          u = o.routes.findIndex(function (n) {
            return n.key === t;
          });
        if (o.index === u) s.jumpToIndex(u);
        else {
          p(u);
          if ('auto' === l) module2.Keyboard.dismiss();
        }
      };

      s.addListener = function (t, n) {
        switch (t) {
          case 'enter':
            s.enterListeners.push(n);
        }
      };

      s.removeListener = function (t, n) {
        switch (t) {
          case 'enter':
            var o = s.enterListeners.indexOf(n);
            if (o > -1) s.enterListeners.splice(o, 1);
        }
      };

      s.handleEnteredIndexChange = function (t) {
        var n = module405.default(t, 1)[0],
          o = 0 ** (n ** (s.props.navigationState.routes.length - 1));
        s.enterListeners.forEach(function (t) {
          return t(o);
        });
      };

      s.transitionTo = function (t) {
        var n = new b(0),
          o = new b(0),
          l = {
            position: s.progress,
            time: new b(0),
            finished: new b(te),
          };
        return D([
          M(P(s.clock), ne, [z(n, H(t, s.layoutWidth, oe)), z(o, 0), z(l.time, 0), z(l.finished, te), z(s.index, t)]),
          M(
            s.isSwipeGesture,
            [
              M(
                K(P(s.clock)),
                module2.I18nManager.isRTL
                  ? z(s.initialVelocityForSpring, H(-1, s.velocityX, s.springVelocityScale))
                  : z(s.initialVelocityForSpring, H(s.velocityX, s.springVelocityScale))
              ),
              B(
                s.clock,
                V({}, l, {
                  velocity: s.initialVelocityForSpring,
                }),
                V({}, de, {}, s.springConfig, {
                  toValue: n,
                })
              ),
            ],
            $(
              s.clock,
              V({}, l, {
                frameTime: o,
              }),
              V({}, pe, {}, s.timingConfig, {
                toValue: n,
              })
            )
          ),
          M(K(P(s.clock)), J(s.clock)),
          M(l.finished, [z(s.isSwipeGesture, te), z(s.gestureX, 0), z(s.velocityX, 0), Q(s.clock)]),
        ]);
      };

      s.handleGestureEvent = R([
        {
          nativeEvent: {
            translationX: s.gestureX,
            velocityX: s.velocityX,
            state: s.gestureState,
          },
        },
      ]);
      s.extrapolatedPosition = L(s.gestureX, H(s.velocityX, s.swipeVelocityImpact));
      s.translateX = D([
        E(
          s.index,
          O([s.index], function (t) {
            var n = module405.default(t, 1)[0];
            s.currentIndexValue = n;

            if (n !== s.props.navigationState.index) {
              s.props.onIndexChange(n);
              s.pendingIndexValue = n;
              s.forceUpdate();
            }
          })
        ),
        E(
          s.position,
          M(
            module2.I18nManager.isRTL ? N(s.gestureX, 0) : W(s.gestureX, 0),
            M(q(_(s.position), s.lastEnteredIndex), [z(s.lastEnteredIndex, _(s.position)), O([_(s.position)], s.handleEnteredIndexChange)]),
            M(q(j(s.position), s.lastEnteredIndex), [z(s.lastEnteredIndex, j(s.position)), O([j(s.position)], s.handleEnteredIndexChange)])
          )
        ),
        E(
          s.isSwiping,
          O([s.isSwiping, s.indexAtSwipeEnd, s.index], function (t) {
            var n = module405.default(t, 3),
              o = n[0],
              p = n[1],
              u = n[2],
              c = s.props,
              f = c.keyboardDismissMode,
              h = c.onSwipeStart,
              v = c.onSwipeEnd;
            if (o === ee) {
              if ((h && h(), 'auto' === f)) {
                var x = module2.TextInput.State.currentlyFocusedField();
                module2.TextInput.State.blurTextInput(x);
                s.previouslyFocusedTextInput = x;
              } else 'on-drag' === f && module2.Keyboard.dismiss();
            } else if ((v && v(), 'auto' === f)) {
              if (p === u) {
                var y = s.previouslyFocusedTextInput;
                if (y) module2.TextInput.State.focusTextInput(y);
              }

              s.previouslyFocusedTextInput = null;
            }
          })
        ),
        E(s.nextIndex, M(q(s.nextIndex, ie), [M(P(s.clock), Q(s.clock)), z(s.gestureX, 0), z(s.index, s.nextIndex), z(s.nextIndex, ie)])),
        M(
          G(s.gestureState, module436.State.ACTIVE),
          [
            M(s.isSwiping, ne, [z(s.isSwiping, ee), z(s.isSwipeGesture, ee), z(s.offsetX, s.progress)]),
            z(s.progress, module2.I18nManager.isRTL ? Z(s.offsetX, s.gestureX) : L(s.offsetX, s.gestureX)),
            Q(s.clock),
          ],
          [
            z(s.isSwiping, te),
            z(s.indexAtSwipeEnd, s.index),
            s.transitionTo(
              M(
                X(W(k(s.gestureX), re), W(k(s.extrapolatedPosition), F(s.layoutWidth, 2))),
                Y(U(A(0, Z(s.index, M(W(s.extrapolatedPosition, 0), module2.I18nManager.isRTL ? oe : se, module2.I18nManager.isRTL ? se : oe))), Z(s.routesLength, 1))),
                s.index
              )
            ),
          ]
        ),
        s.progress,
      ]);
      s.getTranslateX = module588.default(function (t, n, s) {
        return H(U(A(H(t, Z(n, 1), oe), s), 0), module2.I18nManager.isRTL ? -1 : 1);
      });
      return s;
    }

    module362.default(n, t);
    module357(n, [
      {
        key: 'componentDidUpdate',
        value: function (t) {
          var n = this.props,
            s = n.navigationState,
            o = n.layout,
            l = n.swipeVelocityImpact,
            p = n.springVelocityScale,
            u = n.springConfig,
            c = n.timingConfig,
            f = s.index,
            h = s.routes;
          if ((f !== t.navigationState.index && f !== this.currentIndexValue) || ('number' == typeof this.pendingIndexValue && f !== this.pendingIndexValue)) this.jumpToIndex(f);
          this.pendingIndexValue = undefined;
          if (t.navigationState.routes.length !== h.length) this.routesLength.setValue(h.length);

          if (t.layout.width !== o.width) {
            this.progress.setValue(-f * o.width);
            this.layoutWidth.setValue(o.width);
          }

          if (t.swipeVelocityImpact !== l) this.swipeVelocityImpact.setValue(undefined !== l ? l : ae);
          if (t.springVelocityScale !== p) this.springVelocityScale.setValue(undefined !== p ? p : le);

          if (t.springConfig !== u) {
            this.springConfig.damping.setValue(undefined !== u.damping ? u.damping : de.damping);
            this.springConfig.mass.setValue(undefined !== u.mass ? u.mass : de.mass);
            this.springConfig.stiffness.setValue(undefined !== u.stiffness ? u.stiffness : de.stiffness);
            this.springConfig.restSpeedThreshold.setValue(undefined !== u.restSpeedThreshold ? u.restSpeedThreshold : de.restSpeedThreshold);
            this.springConfig.restDisplacementThreshold.setValue(undefined !== u.restDisplacementThreshold ? u.restDisplacementThreshold : de.restDisplacementThreshold);
          }

          if (t.timingConfig !== c) this.timingConfig.duration.setValue(undefined !== c.duration ? c.duration : pe.duration);
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            o = n.layout,
            l = n.navigationState,
            p = n.swipeEnabled,
            u = n.children,
            c = n.removeClippedSubviews,
            f = n.gestureHandlerProps,
            h = this.getTranslateX(this.layoutWidth, this.routesLength, this.translateX);
          return u({
            position: this.position,
            addListener: this.addListener,
            removeListener: this.removeListener,
            jumpTo: this.jumpTo,
            render: function (n) {
              return (
                <module436.PanGestureHandler>
                  {React.createElement(
                    module522.default.View,
                    {
                      removeClippedSubviews: c,
                      style: [
                        ge.container,
                        o.width
                          ? {
                              width: o.width * l.routes.length,
                              transform: [
                                {
                                  translateX: h,
                                },
                              ],
                            }
                          : null,
                      ],
                      __source: {
                        fileName: I,
                        lineNumber: 667,
                      },
                    },
                    n
                  )}
                </module436.PanGestureHandler>
              );
            },
          });
        },
      },
    ]);
    return n;
  })(React.Component);

export default ue;
ue.defaultProps = {
  swipeVelocityImpact: ae,
  springVelocityScale: le,
};
var ge = module2.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
