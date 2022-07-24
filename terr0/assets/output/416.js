var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module384 = require('./384'),
  v = (function (t) {
    function v() {
      module356.default(this, v);
      return module358.default(this, module361.default(v).apply(this, arguments));
    }

    module362.default(v, t);
    module357.default(v, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.screenProps,
            u = t.component,
            l = t.navigation;
          return React.default.createElement(
            module384.default.Provider,
            {
              value: l,
            },
            React.default.createElement(u, {
              screenProps: n,
              navigation: l,
            })
          );
        },
      },
    ]);
    return v;
  })(React.default.PureComponent);

exports.default = v;
