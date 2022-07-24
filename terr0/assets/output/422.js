var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  React = require('react'),
  module423 = require('./423');

var v = {
    willFocus: 'onWillFocus',
    didFocus: 'onDidFocus',
    willBlur: 'onWillBlur',
    didBlur: 'onDidBlur',
  },
  b = Object.keys(v),
  h = (function (n, ...args) {
    function s() {
      var n, module357, module362, p, b;
      module356.default(this, s);
      module357 = module358.default(this, (n = module361.default(s)).call.apply(n, [this].concat(args)));
      module362 = module360.default(module357);

      b = function (n) {
        return module357.props[v[n]];
      };

      if ((p = 'getPropListener') in module362)
        Object.defineProperty(module362, p, {
          value: b,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      else module362[p] = b;
      return module357;
    }

    module362.default(s, n);
    module357.default(s, [
      {
        key: 'componentDidMount',
        value: function () {
          var n = this;
          this.subscriptions = {};
          b.forEach(function (t) {
            n.subscriptions[t] = n.props.navigation.addListener(t, function () {
              var u = n.getPropListener(t);
              return u && u.apply(undefined, arguments);
            });
          });
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          var n = this;
          b.forEach(function (t) {
            n.subscriptions[t].remove();
          });
        },
      },
      {
        key: 'render',
        value: function () {
          return null;
        },
      },
    ]);
    return s;
  })(React.default.Component),
  y = module423.default(h);

exports.default = y;
