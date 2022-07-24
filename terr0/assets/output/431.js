exports.default = function (n) {
  var L = (function (v) {
    function L() {
      var n;
      module356.default(this, L);

      (n = module358.default(this, module361.default(L).call(this))).handleOrientationChange = function (t) {
        var o = t.window,
          u = p(o);
        n.setState({
          isLandscape: u,
        });
      };

      var t = p(module2.Dimensions.get('window'));
      n.state = {
        isLandscape: t,
      };
      return n;
    }

    module362.default(L, v);
    module357.default(L, [
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
          return React.default.createElement(n, module51.default({}, this.props, this.state));
        },
      },
    ]);
    return L;
  })(React.default.Component);

  return module430.default(L, n);
};

var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module430 = require('./430'),
  p = function (n) {
    return n.width > n.height;
  };

exports.isOrientationLandscape = p;
