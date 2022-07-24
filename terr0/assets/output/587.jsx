var module404 = require('./404');

var module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  h = '/Users/osdnk/work/react-native-tab-view/src/TouchableItem.tsx',
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
            u = t.pressOpacity,
            n = t.pressColor,
            c = t.borderless,
            f = t.children,
            p = module370.default(t, ['style', 'pressOpacity', 'pressColor', 'borderless', 'children']);
          return 'android' === module2.Platform.OS && module2.Platform.Version >= 21 ? (
            <module2.TouchableNativeFeedback>
              <module2.View
                style={l}
                __source={{
                  fileName: h,
                  lineNumber: 46,
                }}
              >
                <f />
              </module2.View>
            </module2.TouchableNativeFeedback>
          ) : (
            <module2.TouchableOpacity>{f}</module2.TouchableOpacity>
          );
        },
      },
    ]);
    return l;
  })(React.Component);

exports.default = v;
v.defaultProps = {
  pressColor: 'rgba(255, 255, 255, .4)',
};
