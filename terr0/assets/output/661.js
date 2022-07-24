var module404 = require('./404');

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module662 = require('./662'),
  module622 = require('./622'),
  v = (function (t) {
    function n(t) {
      var module357;
      module356.default(this, n);
      module357 = module358.default(this, module361.default(n).call(this, t));
      module662.default.init(function (t, n) {
        n();
      });
      return module357;
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
              style: x.container,
              header: null,
            },
            React.default.createElement(
              module2.View,
              null,
              React.default.createElement(module622.default, {
                style: x.slider,
                screenProps: this.props.screenProps.womans,
                secondProps: this.props.screenProps.mens,
                gender: 'female',
                updateState: this.updateState.bind(this),
              })
            )
          );
        },
      },
    ]);
    return n;
  })(React.Component);

exports.default = v;
var x = module2.StyleSheet.create({
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
  txtview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  txt: {
    padding: 5,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
  },
});
