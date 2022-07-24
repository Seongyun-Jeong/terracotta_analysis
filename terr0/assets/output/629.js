var module404 = require('./404');

var module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  PropTypes = require('prop-types'),
  module630 = require('./630');

function O(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, l);
  }

  return o;
}

function h(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      O(Object(l), true).forEach(function (n) {
        module284.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      O(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var P = (function (t) {
  function n(t) {
    var o;
    module356.default(this, n);
    (o = module358.default(this, module361.default(n).call(this, t))).state = {
      animColor: new module2.Animated.Value(0),
      animOpacity: new module2.Animated.Value(0),
      animTransform: new module2.Animated.Value(0),
    };
    return o;
  }

  module362.default(n, t);
  module357.default(n, [
    {
      key: 'componentDidMount',
      value: function () {
        if (this.props.active) this._animate(1);
      },
    },
    {
      key: 'componentWillReceiveProps',
      value: function (t) {
        if (t.active !== this.props.active) this._animate(t.active ? 1 : 0);
      },
    },
    {
      key: '_animate',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 0,
          n = this.state,
          o = n.animColor,
          l = n.animOpacity,
          s = n.animTransform,
          c = {
            toValue: t,
            duration: 250,
            isInteraction: false,
            useNativeDriver: !this._shouldAnimateColor,
          },
          u = [
            module2.Animated.timing(
              l,
              h(
                {
                  easing: module2.Easing.linear,
                },
                c
              )
            ),
            module2.Animated.spring(
              s,
              h(
                {
                  friction: 4,
                  tension: 50,
                },
                c
              )
            ),
          ];
        if (this._shouldAnimateColor)
          u.push(
            module2.Animated.timing(
              o,
              h(
                {
                  easing: module2.Easing.linear,
                },
                c
              )
            )
          );
        module2.Animated.parallel(u).start();
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.state,
          n = t.animColor,
          o = t.animOpacity,
          l = t.animTransform,
          s = this.props,
          c = s.active,
          u = s.activeOpacity,
          p = s.carouselRef,
          v = s.color,
          O = s.containerStyle,
          h = s.inactiveColor,
          P = s.inactiveStyle,
          w = s.inactiveOpacity,
          T = s.inactiveScale,
          V = s.index,
          j = s.style,
          C = s.tappable,
          _ = {
            opacity: o.interpolate({
              inputRange: [0, 1],
              outputRange: [w, 1],
            }),
            transform: [
              {
                scale: l.interpolate({
                  inputRange: [0, 1],
                  outputRange: [T, 1],
                }),
              },
            ],
          },
          A = this._shouldAnimateColor
            ? {
                backgroundColor: n.interpolate({
                  inputRange: [0, 1],
                  outputRange: [h, v],
                }),
              }
            : {},
          R = [module630.default.sliderPaginationDotContainer, O || {}],
          D = [module630.default.sliderPaginationDot, j || {}, (!c && P) || {}, _, A],
          S = C
            ? function () {
                if (p) p._snapToItem(p._getPositionIndex(V));
              }
            : undefined;
        return React.default.createElement(
          module2.TouchableOpacity,
          {
            accessible: false,
            style: R,
            activeOpacity: C ? u : 1,
            onPress: S,
          },
          React.default.createElement(module2.Animated.View, {
            style: D,
          })
        );
      },
    },
    {
      key: '_shouldAnimateColor',
      get: function () {
        var t = this.props,
          n = t.color,
          o = t.inactiveColor;
        return n && o;
      },
    },
  ]);
  return n;
})(React.PureComponent);

exports.default = P;
P.propTypes = {
  inactiveOpacity: PropTypes.default.number.isRequired,
  inactiveScale: PropTypes.default.number.isRequired,
  active: PropTypes.default.bool,
  activeOpacity: PropTypes.default.number,
  carouselRef: PropTypes.default.object,
  color: PropTypes.default.string,
  containerStyle: module2.ViewPropTypes ? module2.ViewPropTypes.style : module2.View.propTypes.style,
  inactiveColor: PropTypes.default.string,
  inactiveStyle: module2.ViewPropTypes ? module2.ViewPropTypes.style : module2.View.propTypes.style,
  index: PropTypes.default.number,
  style: module2.ViewPropTypes ? module2.ViewPropTypes.style : module2.View.propTypes.style,
  tappable: PropTypes.default.bool,
};
