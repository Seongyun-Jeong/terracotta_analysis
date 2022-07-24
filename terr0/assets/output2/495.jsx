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
  module496 = require('./496'),
  module499 = require('./499'),
  module498 = require('./498');

function w(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function O(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      w(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      w(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

class T {
  constructor(t) {
    var o;
    module356.default(this, n);
    (o = module358.default(this, module361.default(n).call(this, t)))._mounted = false;

    o._renderScene = function (t) {
      return o.props.renderScene(t);
    };

    o._handleLayout = function (t) {
      var n = t.nativeEvent.layout,
        u = n.height,
        s = n.width;

      if (!(o.state.layout.width === s && o.state.layout.height === u)) {
        o.state.panX.setValue(0);
        o.state.offsetX.setValue(-o.props.navigationState.index * s);
        o.state.layoutXY.setValue({
          x: s || 0.001,
          y: u || 0.001,
        });
        o.setState({
          layout: {
            measured: true,
            height: u,
            width: s,
          },
        });
      }
    };

    o._buildSceneRendererProps = function () {
      return {
        panX: o.state.panX,
        offsetX: o.state.offsetX,
        position: o.state.position,
        layout: o.state.layout,
        navigationState: o.props.navigationState,
        jumpTo: o._jumpTo,
        useNativeDriver: true === o.props.useNativeDriver,
      };
    };

    o._jumpTo = function (t) {
      if (o._mounted) {
        var n = o.props,
          u = n.canJumpToTab,
          s = n.navigationState,
          l = s.routes.findIndex(function (n) {
            return n.key === t;
          });
        if (u(s.routes[l]) && l !== s.index) o.props.onIndexChange(l);
      }
    };

    var u = o.props.navigationState,
      l = O({}, o.props.initialLayout, {
        measured: false,
      }),
      p = new module2.Animated.Value(0),
      h = new module2.Animated.Value(-u.index * l.width),
      y = new module2.Animated.ValueXY({
        x: l.width || 0.001,
        y: l.height || 0.001,
      }),
      b = module2.Animated.multiply(module2.Animated.divide(module2.Animated.add(p, h), y.x), -1);
    o.state = {
      layout: l,
      layoutXY: y,
      panX: p,
      offsetX: h,
      position: b,
      renderUnfocusedScenes: false,
    };
    return o;
  }

  componentDidMount() {
    var t = this;
    this._mounted = true;
    setTimeout(function () {
      return t.setState({
        renderUnfocusedScenes: true,
      });
    }, 0);
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    var t = this,
      n = this.props,
      u = n.navigationState,
      s = n.renderPager,
      l = n.renderTabBar,
      f = n.tabBarPosition,
      c = module370(n, ['navigationState', 'onIndexChange', 'initialLayout', 'renderScene', 'renderPager', 'renderTabBar', 'tabBarPosition']),
      p = this._buildSceneRendererProps();

    return (
      <module2.View collapsable={false} style={[_.container, this.props.style]}>
        {'top' === f && l(p)}
        <module2.View onLayout={this._handleLayout} style={_.pager}>
          {s(
            O({}, p, {}, c, {
              panX: this.state.panX,
              offsetX: this.state.offsetX,
              children: u.routes.map(function (n, o) {
                var u;
                u =
                  t.props.navigationState.index === o || t.state.renderUnfocusedScenes ? (
                    t._renderScene(
                      O({}, p, {
                        route: n,
                      })
                    )
                  ) : (
                    <module2.View />
                  );
                if (React.isValidElement(u))
                  u = React.cloneElement(u, {
                    key: n.key,
                  });
                return u;
              }),
            })
          )}
        </module2.View>
        {'bottom' === f && l(p)}
      </module2.View>
    );
  }
}

export default T;
T.propTypes = {
  navigationState: module498.NavigationStatePropType.isRequired,
  onIndexChange: PropTypes.func.isRequired,
  initialLayout: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  canJumpToTab: PropTypes.func.isRequired,
  renderPager: PropTypes.func.isRequired,
  renderScene: PropTypes.func.isRequired,
  renderTabBar: PropTypes.func,
  tabBarPosition: PropTypes.oneOf(['top', 'bottom']),
};
T.defaultProps = {
  canJumpToTab: function () {
    return true;
  },
  tabBarPosition: 'top',
  renderTabBar: function (t) {
    return <module496.default />;
  },
  renderPager: function (t) {
    return <module499.default />;
  },
  getTestID: function (t) {
    var n = t.route;
    return 'string' == typeof n.testID ? n.testID : undefined;
  },
  initialLayout: {
    height: 0,
    width: 0,
  },
  useNativeDriver: false,
};

var _ = module2.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  pager: {
    flex: 1,
  },
});
