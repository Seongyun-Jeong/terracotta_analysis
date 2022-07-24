var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module416 = require('./416'),
  c = (function (t) {
    function c() {
      module356.default(this, c);
      return module358.default(this, module361.default(c).apply(this, arguments));
    }

    module362.default(c, t);
    module357.default(c, [
      {
        key: 'render',
        value: function () {
          var t = this.props.navigation.state,
            n = t.routes[t.index].key,
            o = this.props.descriptors[n],
            u = o.getComponent();
          return React.default.createElement(module416.default, {
            component: u,
            navigation: o.navigation,
            screenProps: this.props.screenProps,
          });
        },
      },
    ]);
    return c;
  })(React.default.Component);

exports.default = c;
