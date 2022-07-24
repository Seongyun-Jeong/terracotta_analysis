exports.default = function (t) {
  var b =
      arguments.length > 1 && undefined !== arguments[1]
        ? arguments[1]
        : {
            forwardRef: true,
          },
    w = (function (p) {
      function y() {
        module356.default(this, y);
        return module358.default(this, module361.default(y).apply(this, arguments));
      }

      module362.default(y, p);
      module357.default(y, [
        {
          key: 'render',
          value: function () {
            var n = this,
              o = this.props.navigation;
            return React.default.createElement(module384.default.Consumer, null, function (u) {
              var f = o || u;
              module375.default(
                !!f,
                'withNavigation can only be used on a view hierarchy of a navigator. The wrapped component is unable to get access to navigation from props or context.'
              );
              return React.default.createElement(
                t,
                h({}, n.props, {
                  navigation: f,
                  ref: b.forwardRef ? n.props.onRef : undefined,
                })
              );
            });
          },
        },
      ]);
      return y;
    })(React.default.Component);

  y(w, 'displayName', 'withNavigation(' + (t.displayName || t.name) + ')');
  return module424.default(w, t);
};

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module424 = require('./424'),
  module375 = require('./375'),
  module384 = require('./384');

function h() {
  return (h =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];

        for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (t[u] = o[u]);
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
