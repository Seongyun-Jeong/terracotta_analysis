var module284 = require('./284'),
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module605 = require('./605'),
  module607 = require('./607'),
  module608 = require('./608');

function v(t, n) {
  var l = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    l.push.apply(l, o);
  }

  return l;
}

var O = (function (t, ...args) {
  function n() {
    var t, l;
    module356.default(this, n);
    (l = module358.default(this, (t = module361.default(n)).call.apply(t, [this].concat(args)))).state = {};

    l._onTextLayout = function (t) {
      if (!l.state.initialTextWidth)
        l.setState({
          initialTextWidth: t.nativeEvent.layout.x + t.nativeEvent.layout.width,
        });
    };

    l._getTitleText = function () {
      var t = l.props,
        n = t.width,
        o = t.title,
        s = t.truncatedTitle,
        c = l.state.initialTextWidth;
      return null === o ? null : o ? (c && n && c > n ? s : o) : s;
    };

    return l;
  }

  module362.default(n, t);
  module357.default(n, [
    {
      key: '_renderBackImage',
      value: function () {
        var t,
          n,
          o = this.props,
          s = o.backImage,
          c = o.backTitleVisible,
          u = o.tintColor,
          f = this._getTitleText();

        if (React.default.isValidElement(s)) return s;
        else {
          if (s) {
            t = s;
            n = {
              tintColor: u,
              title: f,
            };
          } else {
            t = module2.Image;
            n = {
              style: [
                P.icon,
                !!c && P.iconWithTitle,
                !!u && {
                  tintColor: u,
                },
              ],
              source: module607.default,
            };
          }

          return React.default.createElement(
            t,
            module51.default({}, n, {
              fadeDuration: 0,
            })
          );
        }
      },
    },
    {
      key: '_maybeRenderTitle',
      value: function () {
        var t = this.props,
          n = t.allowFontScaling,
          l = t.backTitleVisible,
          o = t.titleStyle,
          s = t.tintColor,
          c = this._getTitleText();

        return l && null !== c
          ? React.default.createElement(
              module2.Text,
              {
                accessible: false,
                onLayout: this._onTextLayout,
                style: [
                  P.title,
                  !!s && {
                    color: s,
                  },
                  o,
                ],
                numberOfLines: 1,
                allowFontScaling: !!n,
              },
              this._getTitleText()
            )
          : null;
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.onPress,
          l = t.pressColorAndroid,
          o = t.title,
          s = t.disabled,
          c = React.default.createElement(
            module605.default,
            {
              disabled: s,
              accessible: true,
              accessibilityRole: 'button',
              accessibilityComponentType: 'button',
              accessibilityLabel: o ? o + ', back' : 'Go back',
              accessibilityTraits: 'button',
              testID: 'header-back',
              delayPressIn: 0,
              onPress: s ? undefined : n,
              pressColor: l,
              style: [P.container, s && P.disabled],
              borderless: true,
            },
            React.default.createElement(
              module2.View,
              {
                style: P.container,
              },
              this._renderBackImage(),
              this._maybeRenderTitle()
            )
          );
        return 'ios' === module2.Platform.OS
          ? c
          : React.default.createElement(
              module2.View,
              {
                style: P.androidButtonWrapper,
              },
              c
            );
      },
    },
  ]);
  return n;
})(React.default.PureComponent);

O.defaultProps = {
  pressColorAndroid: 'rgba(0, 0, 0, .32)',
  tintColor: module2.Platform.select({
    ios: '#037aff',
    web: '#5f6368',
  }),
  truncatedTitle: 'Back',
  backImage: module2.Platform.select({
    web: module608.default,
  }),
};
var P = module2.StyleSheet.create({
    disabled: {
      opacity: 0.5,
    },
    androidButtonWrapper: (function (t) {
      for (var l = 1; l < arguments.length; l++) {
        var o = null != arguments[l] ? arguments[l] : {};
        if (l % 2)
          v(Object(o), true).forEach(function (l) {
            module284.default(t, l, o[l]);
          });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
        else
          v(Object(o)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
          });
      }

      return t;
    })(
      {
        margin: 13,
        backgroundColor: 'transparent',
      },
      module2.Platform.select({
        web: {
          marginLeft: 21,
        },
        default: {},
      })
    ),
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'transparent',
    },
    title: {
      fontSize: 17,
      paddingRight: 10,
    },
    icon: module2.Platform.select({
      ios: {
        backgroundColor: 'transparent',
        height: 21,
        width: 13,
        marginLeft: 9,
        marginRight: 22,
        marginVertical: 12,
        resizeMode: 'contain',
        transform: [
          {
            scaleX: module2.I18nManager.isRTL ? -1 : 1,
          },
        ],
      },
      default: {
        height: 24,
        width: 24,
        margin: 3,
        resizeMode: 'contain',
        backgroundColor: 'transparent',
        transform: [
          {
            scaleX: module2.I18nManager.isRTL ? -1 : 1,
          },
        ],
      },
    }),
    iconWithTitle:
      'ios' === module2.Platform.OS
        ? {
            marginRight: 6,
          }
        : {},
  }),
  w = O;
exports.default = w;
