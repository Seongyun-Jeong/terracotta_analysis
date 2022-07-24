var module404 = require('./404');

exports.default = function (n) {
  var t = module2.Dimensions.get('window'),
    y = t.width,
    L = t.height,
    O = (function (t, ...args) {
      function v() {
        var n, t;
        module356.default(this, v);
        (t = module358.default(this, (n = module361.default(v)).call.apply(n, [this].concat(args)))).state = {
          dimensions: {
            width: y,
            height: L,
          },
          isLandscape: w({
            width: y,
            height: L,
          }),
        };

        t.handleOrientationChange = function (n) {
          var o = n.window,
            s = w(o);
          t.setState({
            isLandscape: s,
          });
        };

        return t;
      }

      module362.default(v, t);
      module357.default(v, [
        {
          key: 'componentDidMount',
          value: function () {
            module2.Dimensions.addEventListener('change', this.handleOrientationChange);
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            module2.Dimensions.removeEventListener('change', this.handleOrientationChange);
          },
        },
        {
          key: 'render',
          value: function () {
            return <n />;
          },
        },
      ]);
      return v;
    })(React.Component);

  O.displayName = 'withDimensions(' + n.displayName + ')';
  return module424.default(O, n);
};

var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module424 = require('./424'),
  w = function (n) {
    return n.width > n.height;
  };

exports.isOrientationLandscape = w;
