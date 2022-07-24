var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module522 = require('./522'),
  h = (function (t) {
    function h() {
      module356.default(this, h);
      return module358.default(this, module361.default(h).apply(this, arguments));
    }

    module362.default(h, t);
    module357.default(h, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.route,
            o = t.activeOpacity,
            l = t.inactiveOpacity,
            u = t.activeTintColor,
            c = t.inactiveTintColor,
            h = t.renderIcon,
            v = t.horizontal,
            C = t.style;
          return React.default.createElement(
            module2.View,
            {
              style: C,
            },
            React.default.createElement(
              module522.default.View,
              {
                style: [
                  p.icon,
                  {
                    opacity: o,
                  },
                ],
              },
              h({
                route: n,
                focused: true,
                horizontal: v,
                tintColor: u,
              })
            ),
            React.default.createElement(
              module522.default.View,
              {
                style: [
                  p.icon,
                  {
                    opacity: l,
                  },
                ],
              },
              h({
                route: n,
                focused: false,
                horizontal: v,
                tintColor: c,
              })
            )
          );
        },
      },
    ]);
    return h;
  })(React.default.Component);

exports.default = h;
var p = module2.StyleSheet.create({
  icon: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    minWidth: 25,
  },
});
