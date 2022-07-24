exports._TESTING_ONLY_reset_container_count = function () {
  0;
};

exports.default = function (t) {
  var k = (function (_) {
    function k(n) {
      var l;
      module356.default(this, k);
      (l = module358.default(this, module361.default(k).call(this, n))).subs = null;
      l._actionEventSubscribers = new Set();

      l._handleOpenURL = function (n) {
        var o = n.url,
          s = l.props,
          u = s.enableURLHandling,
          c = s.uriPrefix;

        if (false !== u) {
          var p = y(o, c);

          if (p) {
            var v = p.path,
              f = p.params,
              h = t.router.getActionForPathAndParams(v, f);
            if (h) l.dispatch(h);
          }
        }
      };

      l._persistNavigationState = function (t) {
        var n;
        return regeneratorRuntime.default.async(function (s) {
          for (;;)
            switch ((s.prev = s.next)) {
              case 0:
                if ((n = l.props.persistenceKey)) {
                  s.next = 3;
                  break;
                }

                return s.abrupt('return');

              case 3:
                s.next = 5;
                return regeneratorRuntime.default.awrap(module2.AsyncStorage.setItem(n, JSON.stringify(t)));

              case 5:
              case 'end':
                return s.stop();
            }
        });
      };

      l.dispatch = function (n) {
        if (l.props.navigation) return l.props.navigation.dispatch(n);
        l._navState = l._navState || l.state.nav;
        var o = l._navState;
        module426.default(o, 'should be set in constructor if stateful');

        var s = t.router.getStateForAction(n, o),
          u = null === s ? o : s,
          c = function () {
            l._actionEventSubscribers.forEach(function (t) {
              return t({
                type: 'action',
                action: n,
                state: u,
                lastState: o,
              });
            });
          };

        if (null === s) {
          c();
          return true;
        } else if (u !== o) {
          l._navState = u;
          l.setState(
            {
              nav: u,
            },
            function () {
              l._onNavigationStateChange(o, u, n);

              c();

              l._persistNavigationState(u);
            }
          );
          return true;
        } else {
          c();
          return false;
        }
      };

      l._getScreenProps = function () {
        return l.props.screenProps;
      };

      A(n);
      l._initialAction = module373.NavigationActions.init();
      if (l._isStateful())
        l.subs = module2.BackHandler.addEventListener('hardwareBackPress', function () {
          if (l._isMounted) return l.dispatch(module373.NavigationActions.back());
          if (l.subs) l.subs.remove();
        });
      l.state = {
        nav: l._isStateful() && !n.persistenceKey ? t.router.getStateForAction(l._initialAction) : null,
      };
      return l;
    }

    module362.default(k, _);
    module357.default(k, null, [
      {
        key: 'getDerivedStateFromProps',
        value: function (t) {
          A(t);
          return null;
        },
      },
    ]);
    module357.default(k, [
      {
        key: '_renderLoading',
        value: function () {
          return this.props.renderLoadingExperimental ? this.props.renderLoadingExperimental() : null;
        },
      },
      {
        key: '_isStateful',
        value: function () {
          return N(this.props);
        },
      },
      {
        key: '_validateProps',
        value: function (t) {
          if (!this._isStateful()) {
            var n = module370.default(t, ['navigation', 'screenProps']),
              o = Object.keys(n);
            if (0 !== o.length)
              throw new Error(
                'This navigator has both navigation and container props, so it is unclear if it should own its own state. Remove props: "' +
                  o.join(', ') +
                  '" if the navigator should get its state from the navigation prop. If the navigator should maintain its own state, do not pass a navigation prop.'
              );
          }
        },
      },
      {
        key: '_onNavigationStateChange',
        value: function (t, n, o) {
          if (undefined === this.props.onNavigationStateChange && this._isStateful() && process.env.REACT_NAV_LOGGING)
            console.group
              ? (console.group('Navigation Dispatch: '), console.log('Action: ', o), console.log('New State: ', n), console.log('Last State: ', t), console.groupEnd())
              : console.log('Navigation Dispatch: ', {
                  action: o,
                  newState: n,
                  lastState: t,
                });
          else if ('function' == typeof this.props.onNavigationStateChange) this.props.onNavigationStateChange(t, n, o);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          if (this._navState === this.state.nav) this._navState = null;
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var n,
            s,
            u,
            c,
            l,
            module362,
            v,
            f,
            _,
            S,
            b,
            N,
            A,
            k,
            L = this;

          return regeneratorRuntime.default.async(
            function (E) {
              for (;;)
                switch ((E.prev = E.next)) {
                  case 0:
                    if (((this._isMounted = true), this._isStateful())) {
                      E.next = 3;
                      break;
                    }

                    return E.abrupt('return');

                  case 3:
                    if (
                      (0,
                      module2.Linking.addEventListener('url', this._handleOpenURL),
                      (n = this.props),
                      (s = n.persistenceKey),
                      (u = n.uriPrefix),
                      (c = n.enableURLHandling),
                      (l = null),
                      (module362 = null),
                      false === c)
                    ) {
                      E.next = 20;
                      break;
                    }

                    if (((E.t0 = s), !E.t0)) {
                      E.next = 15;
                      break;
                    }

                    E.next = 14;
                    return regeneratorRuntime.default.awrap(module2.AsyncStorage.getItem(s));

                  case 14:
                    E.t0 = E.sent;

                  case 15:
                    module362 = E.t0;
                    E.next = 18;
                    return regeneratorRuntime.default.awrap(module2.Linking.getInitialURL());

                  case 18:
                    v = E.sent;
                    l = v && y(v, u);

                  case 20:
                    if (
                      ((f = this._initialAction),
                      (_ = this.state.nav) || (process.env.REACT_NAV_LOGGING && console.log('Init new Navigation State'), (_ = t.router.getStateForAction(f))),
                      module362)
                    )
                      try {
                        _ = JSON.parse(module362);
                        w = true;
                      } catch (t) {}

                    if (
                      (l &&
                        ((b = (S = l).path),
                        (N = S.params),
                        (A = t.router.getActionForPathAndParams(b, N)) &&
                          (process.env.REACT_NAV_LOGGING && console.log('Applying Navigation Action for Initial URL:', l), (f = A), (_ = t.router.getStateForAction(A, _)))),
                      (k = function () {
                        return L._actionEventSubscribers.forEach(function (t) {
                          return t({
                            type: 'action',
                            action: f,
                            state: L.state.nav,
                            lastState: null,
                          });
                        });
                      }),
                      _ !== this.state.nav)
                    ) {
                      E.next = 29;
                      break;
                    }

                    k();
                    return E.abrupt('return');

                  case 29:
                    this.setState(
                      {
                        nav: _,
                      },
                      function () {
                        w = false;
                        k();
                      }
                    );

                  case 30:
                  case 'end':
                    return E.stop();
                }
            },
            null,
            this
          );
        },
      },
      {
        key: 'componentDidCatch',
        value: function (t) {
          if (!w) throw t;
          w = false;
          console.warn('Uncaught exception while starting app from persisted navigation state! Trying to render again with a fresh navigation state..');
          this.dispatch(module373.NavigationActions.init());
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this._isMounted = false;
          module2.Linking.removeEventListener('url', this._handleOpenURL);
          if (this.subs) this.subs.remove();
          if (this._isStateful()) 0;
        },
      },
      {
        key: 'render',
        value: function () {
          var o = this,
            s = this.props.navigation;

          if (this._isStateful()) {
            var u = this.state.nav;
            if (!u) return this._renderLoading();
            if (!(this._navigation && this._navigation.state === u))
              this._navigation = module373.getNavigation(t.router, u, this.dispatch, this._actionEventSubscribers, this._getScreenProps, function () {
                return o._navigation;
              });
            s = this._navigation;
          }

          module426.default(s, 'failed to get navigation');
          return React.default.createElement(
            module373.NavigationProvider,
            {
              value: s,
            },
            React.default.createElement(
              t,
              module51.default({}, this.props, {
                navigation: s,
              })
            )
          );
        },
      },
    ]);
    return k;
  })(React.default.Component);

  k.router = t.router;
  k.navigationOptions = null;
  return module372.polyfill(k);
};

require('./427');

var module51 = require('./51'),
  regeneratorRuntime = require('regenerator-runtime'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  React = require('react'),
  module2 = require('./2'),
  module372 = require('./372'),
  module373 = require('./373'),
  module426 = require('./426'),
  y = module373.pathUtils.urlToPathAndParams;

function N(t) {
  return !t.navigation;
}

function A(t) {
  if (!N(t)) {
    var n = module370.default(t, ['navigation', 'screenProps']),
      o = Object.keys(n);
    if (0 !== o.length)
      throw new Error(
        'This navigator has both navigation and container props, so it is unclear if it should own its own state. Remove props: "' +
          o.join(', ') +
          '" if the navigator should get its state from the navigation prop. If the navigator should maintain its own state, do not pass a navigation prop.'
      );
  }
}

var w = false;
