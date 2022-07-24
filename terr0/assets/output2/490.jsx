import React from 'react';
import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  y = (function (t) {
    function y() {
      module356.default(this, y);
      return module358.default(this, module361.default(y).apply(this, arguments));
    }

    module362.default(y, t);
    module357(y, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.route,
            o = t.activeOpacity,
            l = t.inactiveOpacity,
            u = t.activeTintColor,
            c = t.inactiveTintColor,
            y = t.renderIcon,
            p = t.horizontal,
            v = t.style;
          return (
            <module2.View style={v}>
              {React.createElement(
                module2.Animated.View,
                {
                  style: [
                    h.icon,
                    {
                      opacity: o,
                    },
                  ],
                },
                y({
                  route: n,
                  focused: true,
                  horizontal: p,
                  tintColor: u,
                })
              )}
              {React.createElement(
                module2.Animated.View,
                {
                  style: [
                    h.icon,
                    {
                      opacity: l,
                    },
                  ],
                },
                y({
                  route: n,
                  focused: false,
                  horizontal: p,
                  tintColor: c,
                })
              )}
            </module2.View>
          );
        },
      },
    ]);
    return y;
  })(React.Component);

export default y;
var h = module2.StyleSheet.create({
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
