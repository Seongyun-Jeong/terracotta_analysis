var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  h = (function (t) {
    function h(t) {
      module356.default(this, h);
      return module358.default(this, module361.default(h).call(this, t));
    }

    module362.default(h, t);
    module357.default(h, [
      {
        key: 'render',
        value: function () {
          this.props.navigation.navigate;
          return React.default.createElement(module2.View, {
            style: v.container,
            header: null,
          });
        },
      },
    ]);
    return h;
  })(React.default.Component);

exports.default = h;
h.navigationOptions = {
  header: null,
};
var v = module2.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  txt: {
    padding: 5,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  image: {
    flex: 2,
    justifyContent: 'center',
    width: 400,
  },
});
