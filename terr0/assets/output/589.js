var module404 = require('./404');

var module392 = require('./392'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module522 = module404(require('./522')),
  module588 = require('./588'),
  w = module522.default.interpolate,
  b = module522.default.multiply,
  I = module522.default.Extrapolate,
  S = (function (t, ...args) {
    function n() {
      var t, l;
      module356.default(this, n);

      (l = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).fadeInIndicator = function () {
        var t = l.props,
          n = t.navigationState,
          o = t.layout,
          u = t.width,
          c = t.getTabWidth;

        if (
          !l.isIndicatorShown &&
          'auto' === u &&
          o.width &&
          n.routes.every(function (t, n) {
            return c(n);
          })
        ) {
          l.isIndicatorShown = true;
          module522.default
            .timing(l.opacity, {
              duration: 150,
              toValue: 1,
              easing: module522.Easing.in(module522.Easing.linear),
            })
            .start();
        }
      };

      l.isIndicatorShown = false;
      l.opacity = new module522.default.Value('auto' === l.props.width ? 0 : 1);
      l.getTranslateX = module588.default(function (t, n, u) {
        var l = n.map(function (t, n) {
            return n;
          }),
          c = n.reduce(function (t, n, l) {
            return 0 === l ? [0] : [].concat(module392.default(t), [t[l - 1] + u(l - 1)]);
          }, []),
          f = w(t, {
            inputRange: l,
            outputRange: c,
            extrapolate: I.CLAMP,
          });
        return b(f, module2.I18nManager.isRTL ? -1 : 1);
      });
      l.getWidth = module588.default(function (t, n, o) {
        var u = n.map(function (t, n) {
            return n;
          }),
          l = u.map(o);
        return w(t, {
          inputRange: u,
          outputRange: l,
          extrapolate: I.CLAMP,
        });
      });
      return l;
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'componentDidMount',
        value: function () {
          this.fadeInIndicator();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          this.fadeInIndicator();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.position,
            o = t.navigationState,
            u = t.getTabWidth,
            l = t.width,
            c = t.style,
            f = t.layout,
            s = o.routes,
            h = s.length > 1 ? this.getTranslateX(n, s, u) : 0,
            y = 'auto' === l ? (s.length > 1 ? this.getWidth(n, s, u) : u(0)) : l;
          return React.createElement(module522.default.View, {
            style: [
              k.indicator,
              {
                width: y,
              },
              f.width
                ? {
                    transform: [
                      {
                        translateX: h,
                      },
                    ],
                  }
                : {
                    left: (100 / s.length) * o.index + '%',
                  },
              'auto' === l
                ? {
                    opacity: this.opacity,
                  }
                : null,
              c,
            ],
            __source: {
              fileName: '/Users/osdnk/work/react-native-tab-view/src/TabBarIndicator.tsx',
              lineNumber: 117,
            },
          });
        },
      },
    ]);
    return n;
  })(React.Component);

exports.default = S;
var k = module2.StyleSheet.create({
  indicator: {
    backgroundColor: '#ffeb3b',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 2,
  },
});
