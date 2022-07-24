var module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module472 = require('./472'),
  y = (function (t) {
    function y() {
      module356.default(this, y);
      return module358.default(this, module361.default(y).apply(this, arguments));
    }

    module362.default(y, t);
    module357.default(y, [
      {
        key: 'render',
        value: function () {
          if ('android' === module2.Platform.OS && module2.Platform.Version >= 21) {
            var t = this.props,
              s = t.style,
              u = module370.default(t, ['style']);
            return React.default.createElement(
              module2.TouchableNativeFeedback,
              module51.default({}, u, {
                style: null,
                background: module2.TouchableNativeFeedback.Ripple(this.props.pressColor, this.props.borderless),
              }),
              React.default.createElement(
                module2.View,
                {
                  style: s,
                },
                React.default.Children.only(this.props.children)
              )
            );
          }

          return 'ios' === module2.Platform.OS
            ? React.default.createElement(
                module472.default,
                module51.default(
                  {
                    hitSlop: {
                      top: 10,
                      bottom: 10,
                      right: 10,
                      left: 10,
                    },
                    disallowInterruption: true,
                    enabled: !this.props.disabled,
                  },
                  this.props
                ),
                this.props.children
              )
            : React.default.createElement(module2.TouchableOpacity, this.props, this.props.children);
        },
      },
    ]);
    return y;
  })(React.default.Component);

exports.default = y;
y.defaultProps = {
  borderless: false,
  pressColor: 'rgba(0, 0, 0, .32)',
};
