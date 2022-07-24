var module404 = require('./404');

import React from 'react';
import module2 from './2';

var module51 = require('./51'),
  module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module522 = require('./522'),
  module585 = require('./585'),
  module590 = require('./590'),
  module591 = require('./591'),
  P = '/Users/osdnk/work/react-native-tab-view/src/TabView.tsx';

function O(t, n) {
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

function _(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      O(o, true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      O(o).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var j = (function (t, ...args) {
  function n() {
    var t, o;
    module356.default(this, n);
    (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).state = {
      layout: _(
        {
          width: 0,
          height: 0,
        },
        o.props.initialLayout
      ),
    };

    o.jumpToIndex = function (t) {
      if (t !== o.props.navigationState.index) o.props.onIndexChange(t);
    };

    o.handleLayout = function (t) {
      var n = t.nativeEvent.layout,
        l = n.height,
        u = n.width;
      if (!(o.state.layout.width === u && o.state.layout.height === l))
        o.setState({
          layout: {
            height: l,
            width: u,
          },
        });
    };

    return o;
  }

  module362.default(n, t);
  module357(n, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.position,
          l = t.onSwipeStart,
          u = t.onSwipeEnd,
          s = t.navigationState,
          c = t.lazy,
          p = t.lazyPreloadDistance,
          f = t.removeClippedSubviews,
          h = t.keyboardDismissMode,
          S = t.swipeEnabled,
          O = t.swipeVelocityImpact,
          j = t.timingConfig,
          E = t.springConfig,
          N = t.tabBarPosition,
          D = t.renderTabBar,
          L = t.renderScene,
          k = t.renderLazyPlaceholder,
          x = t.sceneContainerStyle,
          z = t.style,
          T = t.gestureHandlerProps,
          I = t.springVelocityScale,
          V = t.renderPager,
          B = this.state.layout;
        return (
          <module2.View
            onLayout={this.handleLayout}
            style={[C.pager, z]}
            __source={{
              fileName: P,
              lineNumber: 128,
            }}
          >
            {V({
              navigationState: s,
              layout: B,
              keyboardDismissMode: h,
              swipeEnabled: S,
              swipeVelocityImpact: O,
              timingConfig: j,
              springConfig: E,
              onSwipeStart: l,
              onSwipeEnd: u,
              onIndexChange: this.jumpToIndex,
              springVelocityScale: I,
              removeClippedSubviews: f,
              gestureHandlerProps: T,
              children: function (t) {
                var l = t.position,
                  u = t.render,
                  f = t.addListener,
                  b = t.removeListener,
                  h = t.jumpTo,
                  S = {
                    position: l,
                    layout: B,
                    jumpTo: h,
                  };
                return (
                  <React.Fragment
                    __source={{
                      fileName: P,
                      lineNumber: 159,
                    }}
                  >
                    {n
                      ? React.createElement(module522.default.Code, {
                          exec: module522.default.set(n, l),
                          __source: {
                            fileName: P,
                            lineNumber: 161,
                          },
                        })
                      : null}
                    {'top' === N &&
                      D(
                        _({}, S, {
                          navigationState: s,
                        })
                      )}
                    {u(
                      s.routes.map(function (t, n) {
                        return React.createElement(
                          module590.default,
                          module51.default({}, S, {
                            addListener: f,
                            removeListener: b,
                            key: t.key,
                            index: n,
                            lazy: c,
                            lazyPreloadDistance: p,
                            navigationState: s,
                            style: x,
                            __source: {
                              fileName: P,
                              lineNumber: 173,
                            },
                          }),
                          function (n) {
                            return n.loading
                              ? k({
                                  route: t,
                                })
                              : L(
                                  _({}, S, {
                                    route: t,
                                  })
                                );
                          }
                        );
                      })
                    )}
                    {'bottom' === N &&
                      D(
                        _({}, S, {
                          navigationState: s,
                        })
                      )}
                  </React.Fragment>
                );
              },
            })}
          </module2.View>
        );
      },
    },
  ]);
  return n;
})(React.Component);

export default j;
j.defaultProps = {
  tabBarPosition: 'top',
  renderTabBar: function (t) {
    return React.createElement(
      module585.default,
      module51.default({}, t, {
        __source: {
          fileName: P,
          lineNumber: 59,
        },
      })
    );
  },
  renderLazyPlaceholder: function () {
    return null;
  },
  keyboardDismissMode: 'auto',
  swipeEnabled: true,
  lazy: false,
  lazyPreloadDistance: 0,
  removeClippedSubviews: false,
  springConfig: {},
  timingConfig: {},
  gestureHandlerProps: {},
  renderPager: function (t) {
    return React.createElement(
      module591.default,
      module51.default({}, t, {
        __source: {
          fileName: P,
          lineNumber: 70,
        },
      })
    );
  },
};
var C = module2.StyleSheet.create({
  pager: {
    flex: 1,
    overflow: 'hidden',
  },
});
