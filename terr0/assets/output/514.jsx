var module404 = require('./404');

var module51 = require('./51'),
  module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module464 = require('./464'),
  y = (function (t) {
    function l() {
      module356.default(this, l);
      return module358.default(this, module361.default(l).apply(this, arguments));
    }

    module362.default(l, t);
    module357.default(l, [
      {
        key: 'render',
        value: function () {
          if (module464.screensEnabled && module464.screensEnabled()) {
            var t = this.props,
              l = t.isVisible,
              u = module370.default(t, ['isVisible']);
            return <module464.Screen />;
          }

          var o = this.props,
            c = o.isVisible,
            f = o.children,
            h = o.style,
            y = module370.default(o, ['isVisible', 'children', 'style']);
          return (
            <module2.View>
              <module2.View style={c ? E.attached : E.detached}>{f}</module2.View>
            </module2.View>
          );
        },
      },
    ]);
    return l;
  })(React.Component);

exports.default = y;
var E = module2.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  attached: {
    flex: 1,
  },
  detached: {
    flex: 1,
    top: 3e3,
  },
});
