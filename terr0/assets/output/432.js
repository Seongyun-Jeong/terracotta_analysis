var module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module372 = require('./372'),
  module373 = require('./373'),
  y = (function (t) {
    function h(t) {
      var l;
      module356.default(this, h);

      (l = module358.default(this, module361.default(h).call(this)))._mustAlwaysBeVisible = function () {
        return l.props.animationEnabled || l.props.swipeEnabled;
      };

      l.state = {
        awake: !t.lazy || t.isFocused,
      };
      return l;
    }

    module362.default(h, t);
    module357.default(h, null, [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, l) {
          return t.isFocused && !l.awake
            ? {
                awake: true,
              }
            : null;
        },
      },
    ]);
    module357.default(h, [
      {
        key: 'render',
        value: function () {
          var t = this.state.awake,
            u = this.props,
            o = u.isFocused,
            s = u.childNavigation,
            f = u.removeClippedSubviews,
            c = module370.default(u, ['isFocused', 'childNavigation', 'removeClippedSubviews']);
          return React.default.createElement(
            module2.View,
            {
              style: b.container,
              collapsable: false,
              removeClippedSubviews: 'android' === module2.Platform.OS ? f : !o && f,
            },
            React.default.createElement(
              module2.View,
              {
                style: this._mustAlwaysBeVisible() || o ? b.innerAttached : b.innerDetached,
              },
              t
                ? React.default.createElement(
                    module373.SceneView,
                    module51.default({}, c, {
                      navigation: s,
                    })
                  )
                : null
            )
          );
        },
      },
    ]);
    return h;
  })(React.default.PureComponent),
  b = module2.StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden',
    },
    innerAttached: {
      flex: 1,
    },
    innerDetached: {
      flex: 1,
      top: 3e3,
    },
  }),
  S = module372.polyfill(y);

exports.default = S;
