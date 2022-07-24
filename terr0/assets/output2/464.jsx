import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';

var t,
  n,
  o,
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module96 = require('./96'),
  R = false,
  y = function (t) {
    return undefined !== module2.UIManager.getViewManagerConfig ? module2.UIManager.getViewManagerConfig(t) : module2.UIManager[t];
  };

var E = {
    get NativeScreen() {
      t = t || module2.requireNativeComponent('RNSScreen', null);
      return t;
    },

    get NativeScreenContainer() {
      n = n || module2.requireNativeComponent('RNSScreenContainer', null);
      return n;
    },
  },
  w = (function (t, ...args) {
    function n() {
      var t, o;
      module356.default(this, n);

      (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).setRef = function (t) {
        o._ref = t;
        if (o.props.onComponentRef) o.props.onComponentRef(t);
      };

      return o;
    }

    module362.default(n, t);
    module357(n, [
      {
        key: 'setNativeProps',
        value: function (t) {
          this._ref.setNativeProps(t);
        },
      },
      {
        key: 'render',
        value: function () {
          if (R) {
            if (((o = o || module2.Animated.createAnimatedComponent(E.NativeScreen)), module96.version.minor >= 57)) return <o />;
            var t = this.props,
              n = t.style,
              u = t.children,
              c = module370(t, ['style', 'children']);
            return (
              <o>
                {React.createElement(
                  module2.Animated.View,
                  {
                    style: n,
                  },
                  u
                )}
              </o>
            );
          }

          var s = this.props,
            p = module370(s, ['active', 'onComponentRef']);
          return React.createElement(
            module2.Animated.View,
            module51.default({}, p, {
              ref: this.setRef,
            })
          );
        },
      },
    ]);
    return n;
  })(React.Component),
  A = (function (t) {
    function n() {
      module356.default(this, n);
      return module358.default(this, module361.default(n).apply(this, arguments));
    }

    module362.default(n, t);
    module357(n, [
      {
        key: 'render',
        value: function () {
          return R ? React.createElement(E.NativeScreenContainer, this.props) : React.createElement(module2.View, this.props);
        },
      },
    ]);
    return n;
  })(React.Component);

module.exports = {
  ScreenContainer: A,
  Screen: w,

  get NativeScreen() {
    return E.NativeScreen;
  },

  get NativeScreenContainer() {
    return E.NativeScreenContainer;
  },

  useScreens: function () {
    var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
    if ((R = t) && !y('RNSScreen')) console.error("Screen native module hasn't been linked. Please check the react-native-screens README for more details");
  },
  screensEnabled: function () {
    return R;
  },
};
