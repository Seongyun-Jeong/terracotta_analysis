var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2'),
  module471 = require('./471'),
  module473 = require('./473'),
  y = (function (t, ...args) {
    function y() {
      var t, n;
      module356.default(this, y);
      (n = module358.default(this, (t = module361.default(y)).call.apply(t, [this].concat(args)))).state = {};

      n._onTextLayout = function (t) {
        if (!n.state.initialTextWidth)
          n.setState({
            initialTextWidth: t.nativeEvent.layout.x + t.nativeEvent.layout.width,
          });
      };

      n._getTitleText = function () {
        var t = n.props,
          l = t.width,
          o = t.title,
          s = t.truncatedTitle,
          c = n.state.initialTextWidth;
        return null === o ? null : o ? (c && l && c > l ? s : o) : s;
      };

      return n;
    }

    module362.default(y, t);
    module357.default(y, [
      {
        key: '_renderBackImage',
        value: function () {
          var t,
            l,
            o = this.props,
            s = o.backImage,
            c = o.backTitleVisible,
            u = o.tintColor,
            h = this._getTitleText();

          if (React.default.isValidElement(s)) return s;
          else {
            if (s) {
              t = s;
              l = {
                tintColor: u,
                title: h,
              };
            } else {
              t = module2.Image;
              l = {
                style: [
                  T.icon,
                  !!c && T.iconWithTitle,
                  !!u && {
                    tintColor: u,
                  },
                ],
                source: module473.default,
              };
            }

            return React.default.createElement(
              t,
              module51.default({}, l, {
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
                    T.title,
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
              module471.default,
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
                style: [T.container, s && T.disabled],
                borderless: true,
              },
              React.default.createElement(
                module2.View,
                {
                  style: T.container,
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
                  style: T.androidButtonWrapper,
                },
                c
              );
        },
      },
    ]);
    return y;
  })(React.default.PureComponent);

y.defaultProps = {
  pressColorAndroid: 'rgba(0, 0, 0, .32)',
  tintColor: module2.Platform.select({
    ios: '#037aff',
  }),
  truncatedTitle: 'Back',
};
var T = module2.StyleSheet.create({
    disabled: {
      opacity: 0.5,
    },
    androidButtonWrapper: {
      margin: 13,
      backgroundColor: 'transparent',
    },
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'transparent',
    },
    title: {
      fontSize: 17,
      paddingRight: 10,
    },
    icon:
      'ios' === module2.Platform.OS
        ? {
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
          }
        : {
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
    iconWithTitle:
      'ios' === module2.Platform.OS
        ? {
            marginRight: 6,
          }
        : {},
  }),
  v = y;
exports.default = v;
