exports.default = function (t) {
  var y = (function (l) {
    function p(t) {
      var u;
      module356.default(this, p);
      (u = module358.default(this, module361.default(p).call(this, t))).state = {
        isFocused: !!t.navigation && t.navigation.isFocused(),
      };
      return u;
    }

    module362.default(p, l);
    module357.default(p, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this,
            n = this.props.navigation;
          this.subscriptions = [
            n.addListener('didFocus', function () {
              return t.setState({
                isFocused: true,
              });
            }),
            n.addListener('willBlur', function () {
              return t.setState({
                isFocused: false,
              });
            }),
          ];
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.subscriptions.forEach(function (t) {
            return t.remove();
          });
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            t,
            v({}, this.props, {
              isFocused: this.state.isFocused,
              ref: this.props.onRef,
            })
          );
        },
      },
    ]);
    return p;
  })(React.default.Component);

  h(y, 'displayName', 'withNavigationFocus(' + (t.displayName || t.name) + ')');
  return module424.default(
    module423.default(y, {
      forwardRef: false,
    }),
    t
  );
};

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module424 = require('./424'),
  module423 = require('./423');

function v() {
  return (v =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var u = arguments[n];

        for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
      }

      return t;
    }).apply(this, arguments);
}

function h(t, n, u) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: u,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = u;
  return t;
}
