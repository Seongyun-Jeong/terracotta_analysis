var regeneratorRuntime = require('regenerator-runtime'),
  module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module601 = require('./601'),
  module619 = require('./619');

function P(t, n) {
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

function T(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      P(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      P(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var y = {
    duration: 250,
    easing: module2.Easing.inOut(module2.Easing.ease),
    timing: module2.Animated.timing,
  },
  x = (function (t) {
    function s(t, u) {
      var l;
      module356.default(this, s);

      (l = module358.default(this, module361.default(s).call(this, t, u)))._computeScenes = function (t, n) {
        var s = module619.default(l.state.scenes, n.navigation.state, t.navigation.state, n.descriptors);
        if (
          (n.navigation.state.isTransitioning || (s = O(s)),
          n.screenProps !== l.props.screenProps &&
            l.setState({
              nextScenes: s,
            }),
          s !== l.state.scenes)
        )
          return s;
      };

      l._onLayout = function (t) {
        var n = t.nativeEvent.layout,
          s = n.height,
          o = n.width;

        if (l.state.layout.initWidth !== o || l.state.layout.initHeight !== s) {
          var u = T({}, l.state.layout, {
            initHeight: s,
            initWidth: o,
            isMeasured: true,
          });
          u.height.setValue(s);
          u.width.setValue(o);
          var p = T({}, l.state, {
            layout: u,
          });
          l._transitionProps = b(l.props, p);
          l.setState(p);
        }
      };

      l._onTransitionEnd = function () {
        if (l._isMounted) {
          var t = l._prevTransitionProps;
          l._prevTransitionProps = null;
          var s = O(l.state.scenes),
            o = T({}, l.state, {
              scenes: s,
            });
          l._transitionProps = b(l.props, o);
          l.setState(o, function () {
            var s, o;
            return regeneratorRuntime.default.async(function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    if (!l.props.onTransitionEnd) {
                      u.next = 5;
                      break;
                    }

                    if (!((s = l.props.onTransitionEnd(l._transitionProps, t)) instanceof Promise)) {
                      u.next = 5;
                      break;
                    }

                    u.next = 5;
                    return regeneratorRuntime.default.awrap(s);

                  case 5:
                    if (l._queuedTransition) {
                      o = l._queuedTransition.prevProps;
                      l._queuedTransition = null;

                      l._startTransition(o, l.props);
                    } else l._isTransitionRunning = false;

                  case 6:
                  case 'end':
                    return u.stop();
                }
            });
          });
        }
      };

      var f = {
          height: new module2.Animated.Value(0),
          initHeight: 0,
          initWidth: 0,
          isMeasured: false,
          width: new module2.Animated.Value(0),
        },
        h = new module2.Animated.Value(l.props.navigation.state.index);
      l._positionListener = h.addListener(function () {});
      l.state = {
        layout: f,
        position: h,
        scenes: module619.default([], l.props.navigation.state, null, l.props.descriptors),
      };
      l._prevTransitionProps = null;
      l._transitionProps = b(t, l.state);
      l._isMounted = false;
      l._isTransitionRunning = false;
      l._queuedTransition = null;
      return l;
    }

    module362.default(s, t);
    module357.default(s, [
      {
        key: 'componentDidMount',
        value: function () {
          this._isMounted = true;
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._isMounted = false;
          if (this._positionListener) this.state.position.removeListener(this._positionListener);
        },
      },
      {
        key: 'componentWillReceiveProps',
        value: function (t) {
          if (this._isTransitionRunning) {
            if (!this._queuedTransition)
              this._queuedTransition = {
                prevProps: this.props,
              };
          } else this._startTransition(this.props, t);
        },
      },
      {
        key: '_startTransition',
        value: function (t, s) {
          var o = this,
            u = t.navigation.state.index !== s.navigation.state.index,
            p = this._computeScenes(t, s);

          if (!p) {
            this._prevTransitionProps = this._transitionProps;
            this.state.position.setValue(t.navigation.state.index);
            return void this._onTransitionEnd();
          }

          var c = T({}, this.state, {
              scenes: p,
            }),
            l = c.position,
            f = s.navigation.state.index;
          this._prevTransitionProps = this._transitionProps;
          this._transitionProps = b(s, c);
          var v = this._transitionProps.navigation.state.isTransitioning;
          if (v && u) {
            if (v) {
              this._isTransitionRunning = true;
              this.setState(c, function () {
                var t, p, c, v, h;
                return regeneratorRuntime.default.async(function (_) {
                  for (;;)
                    switch ((_.prev = _.next)) {
                      case 0:
                        if (!s.onTransitionStart) {
                          _.next = 5;
                          break;
                        }

                        if (!((t = s.onTransitionStart(o._transitionProps, o._prevTransitionProps)) instanceof Promise)) {
                          _.next = 5;
                          break;
                        }

                        _.next = 5;
                        return regeneratorRuntime.default.awrap(t);

                      case 5:
                        p = s.configureTransition ? s.configureTransition(o._transitionProps, o._prevTransitionProps) : null;
                        c = T({}, y, {}, p);
                        v = c.timing;
                        delete c.timing;
                        h = l.__getValue() !== f;
                        if (u && h)
                          v(
                            l,
                            T({}, c, {
                              toValue: s.navigation.state.index,
                            })
                          ).start(function () {
                            requestAnimationFrame(o._onTransitionEnd);
                          });
                        else o._onTransitionEnd();

                      case 11:
                      case 'end':
                        return _.stop();
                    }
                });
              });
            }
          } else
            this.setState(c, function () {
              var t;
              return regeneratorRuntime.default.async(function (p) {
                for (;;)
                  switch ((p.prev = p.next)) {
                    case 0:
                      if (!s.onTransitionStart) {
                        p.next = 5;
                        break;
                      }

                      if (!((t = s.onTransitionStart(o._transitionProps, o._prevTransitionProps)) instanceof Promise)) {
                        p.next = 5;
                        break;
                      }

                      p.next = 5;
                      return regeneratorRuntime.default.awrap(t);

                    case 5:
                      if (u) l.setValue(f);

                      o._onTransitionEnd();

                    case 7:
                    case 'end':
                      return p.stop();
                  }
              });
            });
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            module2.View,
            {
              onLayout: this._onLayout,
              style: E.main,
            },
            this.props.render(this._transitionProps, this._prevTransitionProps)
          );
        },
      },
    ]);
    return s;
  })(React.default.Component);

function b(t, n) {
  var s = t.navigation,
    o = t.options,
    u = n.layout,
    p = n.position,
    c = n.scenes,
    l = c.find(S);
  module601.default(l, 'Could not find active scene');
  return {
    layout: u,
    navigation: s,
    position: p,
    scenes: c,
    scene: l,
    options: o,
    index: l.index,
  };
}

function w(t) {
  return !t.isStale;
}

function O(t) {
  var n = t.filter(w);
  return n.length === t.length ? t : n;
}

function S(t) {
  return t.isActive;
}

var E = module2.StyleSheet.create({
    main: {
      flex: 1,
    },
  }),
  j = x;
exports.default = j;
