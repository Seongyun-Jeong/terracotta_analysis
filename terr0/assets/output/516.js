var module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  b = (function (t) {
    function b() {
      module356.default(this, b);
      return module358.default(this, module361.default(b).apply(this, arguments));
    }

    module362.default(b, t);
    module357.default(b, [
      {
        key: 'render',
        value: function () {
          if ('android' === module2.Platform.OS && module2.Platform.Version >= 21) {
            var t = this.props,
              u = t.style,
              s = module370.default(t, ['style']);
            return React.default.createElement(
              module2.TouchableNativeFeedback,
              module51.default({}, s, {
                style: null,
                background: module2.TouchableNativeFeedback.Ripple(this.props.pressColor, this.props.borderless),
              }),
              React.default.createElement(
                module2.View,
                {
                  style: u,
                },
                React.default.Children.only(this.props.children)
              )
            );
          }

          return React.default.createElement(module2.TouchableOpacity, this.props, this.props.children);
        },
      },
    ]);
    return b;
  })(React.default.Component);

exports.default = b;
b.defaultProps = {
  borderless: false,
  pressColor: 'rgba(0, 0, 0, .32)',
};
