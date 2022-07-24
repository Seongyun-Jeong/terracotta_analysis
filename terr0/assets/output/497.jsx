var module404 = require('./404');

var module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  PropTypes = require('prop-types'),
  module2 = require('./2'),
  v = (function (t) {
    function l() {
      module356.default(this, l);
      return module358.default(this, module361.default(l).apply(this, arguments));
    }

    module362.default(l, t);
    module357.default(l, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            l = t.style,
            n = t.pressOpacity,
            u = t.pressColor,
            p = t.borderless,
            c = module370.default(t, ['style', 'pressOpacity', 'pressColor', 'borderless']);
          return 'android' === module2.Platform.OS && module2.Platform.Version >= 21 ? (
            <module2.TouchableNativeFeedback>
              <module2.View style={l}>{React.Children.only(this.props.children)}</module2.View>
            </module2.TouchableNativeFeedback>
          ) : (
            <module2.TouchableOpacity>{this.props.children}</module2.TouchableOpacity>
          );
        },
      },
    ]);
    return l;
  })(React.Component);

exports.default = v;
v.propTypes = {
  onPress: PropTypes.default.func.isRequired,
  delayPressIn: PropTypes.default.number,
  borderless: PropTypes.default.bool,
  pressColor: PropTypes.default.string,
  pressOpacity: PropTypes.default.number,
  children: PropTypes.default.node.isRequired,
};
v.defaultProps = {
  pressColor: 'rgba(255, 255, 255, .4)',
};
