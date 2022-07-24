var module404 = require('./404');

var module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module583 = require('./583'),
  module519 = require('./519'),
  module594 = require('./594'),
  y = (function (t, ...args) {
    function n() {
      var t, o;
      module356.default(this, n);

      (o = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args))))._renderLazyPlaceholder = function (t) {
        var n = o.props.lazyPlaceholderComponent;
        return null != n ? <n /> : null;
      };

      o._renderTabBar = function (t) {
        var n = o.props.navigation.state,
          l = n.routes[n.index],
          b = o.props.descriptors[l.key].options,
          c = null == b.tabBarVisible || b.tabBarVisible,
          p = o.props,
          u = p.navigation,
          P = p.getLabelText,
          T = p.getAccessibilityLabel,
          y = p.getTestID,
          L = p.renderIcon,
          h = p.onTabPress,
          B = p.onTabLongPress,
          I = p.tabBarComponent,
          _ = undefined === I ? module594.default : I,
          C = p.tabBarPosition,
          E = p.tabBarOptions,
          w = p.screenProps;

        return null !== _ && c ? <_ /> : null;
      };

      return o;
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.navigation,
            l = t.descriptors,
            b = module370.default(t, [
              'getLabelText',
              'getAccessibilityLabel',
              'getTestID',
              'renderIcon',
              'onTabPress',
              'onTabLongPress',
              'screenProps',
              'lazyPlaceholderComponent',
              'tabBarComponent',
              'tabBarOptions',
              'navigation',
              'descriptors',
            ]),
            c = n.state,
            p = l[c.routes[c.index].key].options,
            u = null == p.swipeEnabled ? this.props.swipeEnabled : p.swipeEnabled;
          if ('function' == typeof u) u = u(c);
          return <module583.TabView />;
        },
      },
    ]);
    return n;
  })(React.PureComponent),
  L = module519.default(y);

exports.default = L;
