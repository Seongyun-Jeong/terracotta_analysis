import React from 'react';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module375 = require('./375');

function f() {
  return (f =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
      }

      return t;
    }).apply(this, arguments);
}

function y(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}

var h = function (t, h, P) {
  var k = (function (k, ...args) {
    function b() {
      var t, module357;
      module356.default(this, b);
      module357 = module358.default(this, (t = module361.default(b)).call.apply(t, [this].concat(args)));
      y(module360.default(module357), 'state', {
        descriptors: {},
        screenProps: module357.props.screenProps,
      });
      return module357;
    }

    module362.default(b, k);
    module357(
      b,
      [
        {
          key: 'render',
          value: function () {
            return <t />;
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, n) {
            var o = n.descriptors,
              s = t.navigation,
              p = t.screenProps;
            module375.default(
              null != s,
              'The navigation prop is missing for this navigator. In react-navigation 3 you must set up your app container directly. More info: https://reactnavigation.org/docs/en/app-containers.html'
            );
            var u = s.state.routes;
            if (undefined === u)
              throw new TypeError(
                'No "routes" found in navigation state. Did you try to pass the navigation prop of a React component to a Navigator child? See https://reactnavigation.org/docs/en/custom-navigators.html#navigator-navigation-prop'
              );
            var c = {};
            u.forEach(function (t) {
              if (o && o[t.key] && t === o[t.key].state && p === n.screenProps) c[t.key] = o[t.key];
              else {
                var u = h.getComponentForRouteName.bind(null, t.routeName),
                  v = s.getChildNavigation(t.key),
                  l = h.getScreenOptions(v, p);
                c[t.key] = {
                  key: t.key,
                  getComponent: u,
                  options: l,
                  state: t,
                  navigation: v,
                };
              }
            });
            return {
              descriptors: c,
              screenProps: p,
            };
          },
        },
      ]
    );
    return b;
  })(React.Component);

  y(k, 'router', h);
  y(k, 'navigationOptions', P.navigationOptions);
  return k;
};

export default h;
