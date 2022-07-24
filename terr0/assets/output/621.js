var module404 = require('./404');

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module622 = require('./622'),
  y = (function (t) {
    function n() {
      module356.default(this, n);
      return module358.default(this, module361.default(n).apply(this, arguments));
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'updateState',
        value: function (t) {
          return this.props.screenProps.updateState(t);
        },
      },
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            module2.View,
            {
              style: v.container,
              header: null,
            },
            React.default.createElement(
              module2.View,
              null,
              React.default.createElement(module622.default, {
                style: v.slider,
                screenProps: this.props.screenProps.mens,
                secondProps: this.props.screenProps.womans,
                gender: 'male',
                updateState: this.updateState.bind(this),
              })
            )
          );
        },
      },
    ]);
    return n;
  })(React.Component);

exports.default = y;
var v = module2.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slider: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});
