var module404 = require('./404');

exports.default = function (n) {
  var t = (function (t) {
    function p() {
      var n;
      module356.default(this, p);

      (n = module358.default(this, module361.default(p).call(this))).handleOrientationChange = function (t) {
        var o = t.window,
          s = L(o);
        n.setState({
          isLandscape: s,
        });
      };

      var t = L(module2.Dimensions.get('window'));
      n.state = {
        isLandscape: t,
      };
      return n;
    }

    module362.default(p, t);
    module357.default(p, [
      {
        key: 'componentDidMount',
        value: function () {
          if ('function' == typeof module2.Dimensions.addEventListener) module2.Dimensions.addEventListener('change', this.handleOrientationChange);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          if ('function' == typeof module2.Dimensions.removeEventListener) module2.Dimensions.removeEventListener('change', this.handleOrientationChange);
        },
      },
      {
        key: 'render',
        value: function () {
          return <n />;
        },
      },
    ]);
    return p;
  })(React.Component);

  return module424.default(t, n);
};

var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module424 = require('./424'),
  L = function (n) {
    return n.width > n.height;
  };

exports.isOrientationLandscape = L;
