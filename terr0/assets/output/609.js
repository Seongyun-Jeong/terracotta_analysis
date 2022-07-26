var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module605 = require('./605'),
  module607 = require('./607'),
  b = (function (t, ...args) {
    function b() {
      var t, l;
      module356.default(this, b);
      (l = module358.default(this, (t = module361.default(b)).call.apply(t, [this].concat(args)))).state = {};

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
          u = l.state.initialTextWidth;
        return null === o ? null : o ? (u && n && u > n ? s : o.length > 8 ? s : o) : s;
      };

      return l;
    }

    module362.default(b, t);
    module357.default(b, [
      {
        key: '_renderBackImage',
        value: function () {
          var t,
            n,
            l = this.props,
            o = l.backImage,
            s = l.backTitleVisible,
            u = l.tintColor;
          if (React.default.isValidElement(o)) return o;
          else {
            if (o) {
              t = o;
              n = {
                tintColor: u,
              };
            } else {
              t = module2.Image;
              n = {
                style: [
                  p.icon,
                  !!s && p.iconWithTitle,
                  !!u && {
                    tintColor: u,
                  },
                ],
                source: module607.default,
              };
            }

            return React.default.createElement(t, n);
          }
        },
      },
      {
        key: '_maybeRenderTitle',
        value: function () {
          var t = this.props,
            n = t.backTitleVisible,
            l = t.titleStyle,
            o = t.tintColor,
            s = this._getTitleText();

          if (!n || null === s) return null;
          var u = this.props.LabelContainerComponent;
          return React.default.createElement(
            u,
            null,
            React.default.createElement(
              module2.Text,
              {
                accessible: false,
                onLayout: this._onTextLayout,
                style: [
                  p.title,
                  !!o && {
                    color: o,
                  },
                  l,
                ],
                numberOfLines: 1,
              },
              this._getTitleText()
            )
          );
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.onPress,
            l = t.title,
            o = this.props.ButtonContainerComponent;
          return React.default.createElement(
            module605.default,
            {
              accessibilityComponentType: 'button',
              accessibilityLabel: l ? l + ', back' : 'Go back',
              accessibilityTraits: 'button',
              testID: 'header-back',
              delayPressIn: 0,
              onPress: n,
              style: p.container,
              borderless: true,
            },
            React.default.createElement(
              module2.View,
              {
                style: p.container,
              },
              React.default.createElement(o, null, this._renderBackImage()),
              this._maybeRenderTitle()
            )
          );
        },
      },
    ]);
    return b;
  })(React.default.PureComponent);

b.defaultProps = {
  tintColor: '#037aff',
  truncatedTitle: 'Back',
};
var p = module2.StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      marginBottom: 1,
      overflow: 'visible',
    },
    title: {
      fontSize: 17,
      paddingRight: 10,
    },
    icon: {
      height: 21,
      width: 12,
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
    iconWithTitle: {
      marginRight: 3,
    },
  }),
  T = b;
exports.default = T;
