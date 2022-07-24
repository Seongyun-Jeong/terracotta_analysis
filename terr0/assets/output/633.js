var module404 = require('./404');

var module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  PropTypes = require('prop-types'),
  module634 = module404(require('./634')),
  module655 = require('./655'),
  module656 = require('./656');

function D(t, n) {
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

function T(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      D(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      D(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

module655.initializeAnimations();

var k = function (t) {
    return -(t - 1);
  },
  M = (function (t) {
    function n(t) {
      var o;
      module356.default(this, n);
      (o = module358.default(this, module361.default(n).call(this, t))).state = {
        showContent: true,
        isVisible: false,
        deviceWidth: module2.Dimensions.get('window').width,
        deviceHeight: module2.Dimensions.get('window').height,
        isSwipeable: !!o.props.swipeDirection,
        pan: null,
      };
      o.isTransitioning = false;
      o.inSwipeClosingState = false;
      o.currentSwipingDirection = null;

      o.buildPanResponder = function () {
        var t = null;
        o.panResponder = module2.PanResponder.create({
          onMoveShouldSetPanResponder: function (n, s) {
            if (!o.props.propagateSwipe) {
              var p = Math.abs(s.dx) >= 4 || Math.abs(s.dy) >= 4;
              if (p && o.props.onSwipeStart) o.props.onSwipeStart();
              o.currentSwipingDirection = o.getSwipingDirection(s);
              t = o.createAnimationEventForSwipe();
              return p;
            }
          },
          onStartShouldSetPanResponder: function () {
            return !(o.props.scrollTo && o.props.scrollOffset > 0) && (o.props.onSwipeStart && o.props.onSwipeStart(), (o.currentSwipingDirection = null), true);
          },
          onPanResponderMove: function (n, s) {
            if (!o.currentSwipingDirection) {
              if (0 === s.dx && 0 === s.dy) return;
              o.currentSwipingDirection = o.getSwipingDirection(s);
              t = o.createAnimationEventForSwipe();
            }

            if (o.isSwipeDirectionAllowed(s)) {
              var p = 1 - o.calcDistancePercentage(s);
              if (o.backdropRef)
                o.backdropRef.transitionTo({
                  opacity: o.props.backdropOpacity * p,
                });
              t(n, s);
              if (o.props.onSwipeMove) o.props.onSwipeMove(p);
            } else if (o.props.scrollTo)
              if (o.props.scrollHorizontal) {
                var l = -s.dx;
                if (l > o.props.scrollOffsetMax) l -= (l - o.props.scrollOffsetMax) / 2;
                o.props.scrollTo({
                  x: l,
                  animated: false,
                });
              } else {
                var c = -s.dy;
                if (c > o.props.scrollOffsetMax) c -= (c - o.props.scrollOffsetMax) / 2;
                o.props.scrollTo({
                  y: c,
                  animated: false,
                });
              }
          },
          onPanResponderRelease: function (t, n) {
            if (o.getAccDistancePerDirection(n) > o.props.swipeThreshold && o.isSwipeDirectionAllowed(n)) {
              if (o.props.onSwipeComplete) {
                o.inSwipeClosingState = true;
                return void o.props.onSwipeComplete();
              }

              if (o.props.onSwipe) {
                o.inSwipeClosingState = true;
                return void o.props.onSwipe();
              }
            }

            if (o.props.onSwipeCancel) o.props.onSwipeCancel();
            if (o.backdropRef)
              o.backdropRef.transitionTo({
                opacity: o.props.backdropOpacity,
              });
            module2.Animated.spring(o.state.pan, {
              toValue: {
                x: 0,
                y: 0,
              },
              bounciness: 0,
            }).start();
            if (o.props.scrollOffset > o.props.scrollOffsetMax)
              o.props.scrollTo({
                y: o.props.scrollOffsetMax,
                animated: true,
              });
          },
        });
      };

      o.getAccDistancePerDirection = function (t) {
        switch (o.currentSwipingDirection) {
          case 'up':
            return -t.dy;

          case 'down':
            return t.dy;

          case 'right':
            return t.dx;

          case 'left':
            return -t.dx;

          default:
            return 0;
        }
      };

      o.getSwipingDirection = function (t) {
        if (Math.abs(t.dx) > Math.abs(t.dy)) return t.dx > 0 ? 'right' : 'left';
        else return t.dy > 0 ? 'down' : 'up';
      };

      o.calcDistancePercentage = function (t) {
        switch (o.currentSwipingDirection) {
          case 'down':
            return (t.moveY - t.y0) / ((o.props.deviceHeight || o.state.deviceHeight) - t.y0);

          case 'up':
            return k(t.moveY / t.y0);

          case 'left':
            return k(t.moveX / t.x0);

          case 'right':
            return (t.moveX - t.x0) / ((o.props.deviceWidth || o.state.deviceWidth) - t.x0);

          default:
            return 0;
        }
      };

      o.createAnimationEventForSwipe = function () {
        return 'right' === o.currentSwipingDirection || 'left' === o.currentSwipingDirection
          ? module2.Animated.event([
              null,
              {
                dx: o.state.pan.x,
              },
            ])
          : module2.Animated.event([
              null,
              {
                dy: o.state.pan.y,
              },
            ]);
      };

      o.isDirectionIncluded = function (t) {
        return Array.isArray(o.props.swipeDirection) ? o.props.swipeDirection.includes(t) : o.props.swipeDirection === t;
      };

      o.isSwipeDirectionAllowed = function (t) {
        var n = t.dy,
          s = t.dx,
          p = n > 0,
          l = n < 0,
          c = s < 0,
          u = s > 0;
        return (
          !('up' !== o.currentSwipingDirection || !o.isDirectionIncluded('up') || !l) ||
          !('down' !== o.currentSwipingDirection || !o.isDirectionIncluded('down') || !p) ||
          !('right' !== o.currentSwipingDirection || !o.isDirectionIncluded('right') || !u) ||
          !('left' !== o.currentSwipingDirection || !o.isDirectionIncluded('left') || !c)
        );
      };

      o.handleDimensionsUpdate = function (t) {
        if (!o.props.deviceHeight && !o.props.deviceWidth) {
          var n = module2.Dimensions.get('window').width,
            s = module2.Dimensions.get('window').height;
          if (!(n === o.state.deviceWidth && s === o.state.deviceHeight))
            o.setState({
              deviceWidth: n,
              deviceHeight: s,
            });
        }
      };

      o.open = function () {
        if (!o.isTransitioning) {
          o.isTransitioning = true;
          if (o.backdropRef)
            o.backdropRef.transitionTo(
              {
                opacity: o.props.backdropOpacity,
              },
              o.props.backdropTransitionInTiming
            );
          if (o.state.isSwipeable)
            o.state.pan.setValue({
              x: 0,
              y: 0,
            });

          if (o.contentRef) {
            if (o.props.onModalWillShow) o.props.onModalWillShow();
            o.contentRef[o.animationIn](o.props.animationInTiming).then(function () {
              o.isTransitioning = false;
              if (o.props.isVisible) o.props.onModalShow();
              else o.close();
            });
          }
        }
      };

      o.close = function () {
        if (!o.isTransitioning) {
          o.isTransitioning = true;
          if (o.backdropRef)
            o.backdropRef.transitionTo(
              {
                opacity: 0,
              },
              o.props.backdropTransitionOutTiming
            );
          var t = o.animationOut;

          if (o.inSwipeClosingState) {
            o.inSwipeClosingState = false;
            if ('up' === o.currentSwipingDirection) t = 'slideOutUp';
            else if ('down' === o.currentSwipingDirection) t = 'slideOutDown';
            else if ('right' === o.currentSwipingDirection) t = 'slideOutRight';
            else if ('left' === o.currentSwipingDirection) t = 'slideOutLeft';
          }

          if (o.contentRef) {
            if (o.props.onModalWillHide) o.props.onModalWillHide();
            o.contentRef[t](o.props.animationOutTiming).then(function () {
              o.isTransitioning = false;
              if (o.props.isVisible) o.open();
              else
                o.setState(
                  {
                    showContent: false,
                  },
                  function () {
                    o.setState(
                      {
                        isVisible: false,
                      },
                      function () {
                        o.props.onModalHide();
                      }
                    );
                  }
                );
            });
          }
        }
      };

      var s = module655.buildAnimations(t),
        p = s.animationIn,
        c = s.animationOut;
      o.animationIn = p;
      o.animationOut = c;

      if (o.state.isSwipeable) {
        o.state = T({}, o.state, {
          pan: new module2.Animated.ValueXY(),
        });
        o.buildPanResponder();
      }

      if (o.props.isVisible)
        o.state = T({}, o.state, {
          isVisible: true,
          showContent: true,
        });
      return o;
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'UNSAFE_componentWillReceiveProps',
        value: function (t) {
          if (
            (!this.state.isVisible &&
              t.isVisible &&
              this.setState({
                isVisible: true,
                showContent: true,
              }),
            this.props.animationIn !== t.animationIn || this.props.animationOut !== t.animationOut)
          ) {
            var n = module655.buildAnimations(t),
              o = n.animationIn,
              s = n.animationOut;
            this.animationIn = o;
            this.animationOut = s;
          }

          if (this.props.backdropOpacity !== t.backdropOpacity && this.backdropRef)
            this.backdropRef.transitionTo(
              {
                opacity: t.backdropOpacity,
              },
              this.props.backdropTransitionInTiming
            );
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          if (this.props.onSwipe) console.warn('`<Modal onSwipe="..." />` is deprecated. Use `<Modal onSwipeComplete="..." />` instead.');
          if (this.state.isVisible) this.open();
          module2.DeviceEventEmitter.addListener('didUpdateDimensions', this.handleDimensionsUpdate);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          module2.DeviceEventEmitter.removeListener('didUpdateDimensions', this.handleDimensionsUpdate);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (t, n) {
          if (this.props.isVisible && !t.isVisible) this.open();
          else if (!this.props.isVisible && t.isVisible) this.close();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this,
            n = this.props,
            p = n.avoidKeyboard,
            l = n.coverScreen,
            c = n.hasBackdrop,
            u = n.backdropColor,
            f = n.children,
            h = n.deviceHeight,
            v = n.deviceWidth,
            O = n.onBackdropPress,
            D = n.onBackButtonPress,
            k = n.useNativeDriver,
            M = n.style,
            R = module370.default(n, [
              'animationIn',
              'animationInTiming',
              'animationOut',
              'animationOutTiming',
              'avoidKeyboard',
              'coverScreen',
              'hasBackdrop',
              'backdropColor',
              'backdropOpacity',
              'backdropTransitionInTiming',
              'backdropTransitionOutTiming',
              'children',
              'deviceHeight',
              'deviceWidth',
              'isVisible',
              'onModalShow',
              'onBackdropPress',
              'onBackButtonPress',
              'useNativeDriver',
              'propagateSwipe',
              'style',
            ]),
            P = v || this.state.deviceWidth,
            C = h || this.state.deviceHeight,
            I = [
              {
                margin: 0.05 * P,
                transform: [
                  {
                    translateY: 0,
                  },
                ],
              },
              module656.default.content,
              M,
            ],
            x = {},
            V = {};

          if (this.state.isSwipeable) {
            x = T({}, this.panResponder.panHandlers);
            V = k
              ? {
                  transform: this.state.pan.getTranslateTransform(),
                }
              : this.state.pan.getLayout();
          }

          var W = this.props.hideModalContentWhileAnimating && this.props.useNativeDriver && !this.state.showContent ? React.default.createElement(module634.View, null) : f,
            A = React.default.createElement(
              module634.View,
              module51.default(
                {},
                x,
                {
                  ref: function (n) {
                    return (t.contentRef = n);
                  },
                  style: [V, I],
                  pointerEvents: 'box-none',
                  useNativeDriver: k,
                },
                R
              ),
              W
            ),
            H = React.default.createElement(
              module2.TouchableWithoutFeedback,
              {
                onPress: O,
              },
              React.default.createElement(module634.View, {
                ref: function (n) {
                  return (t.backdropRef = n);
                },
                useNativeDriver: k,
                style: [
                  module656.default.backdrop,
                  {
                    backgroundColor: this.state.showContent ? u : 'transparent',
                    width: P,
                    height: C,
                  },
                ],
              })
            );
          return !l && this.state.isVisible
            ? React.default.createElement(
                module2.View,
                {
                  pointerEvents: 'box-none',
                  style: [
                    module656.default.backdrop,
                    {
                      zIndex: 2,
                      opacity: 1,
                      backgroundColor: 'transparent',
                    },
                  ],
                },
                c && H,
                A
              )
            : React.default.createElement(
                module2.Modal,
                module51.default(
                  {
                    transparent: true,
                    animationType: 'none',
                    visible: this.state.isVisible,
                    onRequestClose: D,
                  },
                  R
                ),
                c && H,
                p &&
                  React.default.createElement(
                    module2.KeyboardAvoidingView,
                    {
                      behavior: 'ios' === module2.Platform.OS ? 'padding' : null,
                      pointerEvents: 'box-none',
                      style: I.concat([
                        {
                          margin: 0,
                        },
                      ]),
                    },
                    A
                  ),
                !p && A
              );
        },
      },
    ]);
    return n;
  })(React.Component);

exports.ReactNativeModal = M;
M.propTypes = {
  animationIn: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.object]),
  animationInTiming: PropTypes.default.number,
  animationOut: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.object]),
  animationOutTiming: PropTypes.default.number,
  avoidKeyboard: PropTypes.default.bool,
  coverScreen: PropTypes.default.bool,
  hasBackdrop: PropTypes.default.bool,
  backdropColor: PropTypes.default.string,
  backdropOpacity: PropTypes.default.number,
  backdropTransitionInTiming: PropTypes.default.number,
  backdropTransitionOutTiming: PropTypes.default.number,
  children: PropTypes.default.node.isRequired,
  deviceHeight: PropTypes.default.number,
  deviceWidth: PropTypes.default.number,
  isVisible: PropTypes.default.bool.isRequired,
  hideModalContentWhileAnimating: PropTypes.default.bool,
  propagateSwipe: PropTypes.default.bool,
  onModalShow: PropTypes.default.func,
  onModalWillShow: PropTypes.default.func,
  onModalHide: PropTypes.default.func,
  onModalWillHide: PropTypes.default.func,
  onBackButtonPress: PropTypes.default.func,
  onBackdropPress: PropTypes.default.func,
  onSwipeStart: PropTypes.default.func,
  onSwipeMove: PropTypes.default.func,
  onSwipeComplete: PropTypes.default.func,
  onSwipeCancel: PropTypes.default.func,
  swipeThreshold: PropTypes.default.number,
  swipeDirection: PropTypes.default.oneOfType([
    PropTypes.default.arrayOf(PropTypes.default.oneOf(['up', 'down', 'left', 'right'])),
    PropTypes.default.oneOf(['up', 'down', 'left', 'right']),
  ]),
  useNativeDriver: PropTypes.default.bool,
  style: PropTypes.default.any,
  scrollTo: PropTypes.default.func,
  scrollOffset: PropTypes.default.number,
  scrollOffsetMax: PropTypes.default.number,
  scrollHorizontal: PropTypes.default.bool,
  supportedOrientations: PropTypes.default.arrayOf(PropTypes.default.oneOf(['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'])),
};
M.defaultProps = {
  animationIn: 'slideInUp',
  animationInTiming: 300,
  animationOut: 'slideOutDown',
  animationOutTiming: 300,
  avoidKeyboard: false,
  coverScreen: true,
  hasBackdrop: true,
  backdropColor: 'black',
  backdropOpacity: 0.7,
  backdropTransitionInTiming: 300,
  backdropTransitionOutTiming: 300,
  onModalShow: function () {
    return null;
  },
  onModalWillShow: function () {
    return null;
  },
  deviceHeight: null,
  deviceWidth: null,
  onModalHide: function () {
    return null;
  },
  onModalWillHide: function () {
    return null;
  },
  isVisible: false,
  hideModalContentWhileAnimating: false,
  propagateSwipe: PropTypes.default.false,
  onBackdropPress: function () {
    return null;
  },
  onBackButtonPress: function () {
    return null;
  },
  swipeThreshold: 100,
  useNativeDriver: false,
  scrollTo: null,
  scrollOffset: 0,
  scrollOffsetMax: 0,
  scrollHorizontal: false,
  supportedOrientations: ['portrait', 'landscape'],
};
var R = M;
exports.default = R;
