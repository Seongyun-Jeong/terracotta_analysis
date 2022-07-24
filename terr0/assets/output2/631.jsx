var module404 = require('./404');

import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';
import PropTypes from 'prop-types';

var module284 = require('./284'),
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module632 = require('./632');

function O(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

var P = (function (t) {
  function n(t) {
    var o;
    module356.default(this, n);
    (o = module358.default(this, module361.default(n).call(this, t))).state = {
      offset: 0,
      width: 0,
      height: 0,
      status: 1,
      animOpacity: new module2.Animated.Value(0),
    };
    o._onLoad = o._onLoad.bind(module360.default(o));
    o._onError = o._onError.bind(module360.default(o));
    o._measureLayout = o._measureLayout.bind(module360.default(o));
    return o;
  }

  module362.default(n, t);
  module357(n, [
    {
      key: 'setNativeProps',
      value: function (t) {
        this._container.setNativeProps(t);
      },
    },
    {
      key: 'componentDidMount',
      value: function () {
        var t = this;
        this._mounted = true;
        setTimeout(function () {
          t._measureLayout();
        }, 0);
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this._mounted = false;
      },
    },
    {
      key: '_measureLayout',
      value: function () {
        var t = this;

        if (this._container) {
          var n = this.props,
            o = n.dimensions,
            s = n.vertical,
            u = n.carouselRef,
            l = n.sliderWidth,
            c = n.sliderHeight,
            f = n.itemWidth,
            p = n.itemHeight;
          if (u)
            this._container.measureLayout(module2.findNodeHandle(u), function (n, u, h, y, v, b) {
              var _ = s ? u - (c - p) / 2 : n - (l - f) / 2;

              t.setState({
                offset: _,
                width: o && o.width ? o.width : Math.ceil(h),
                height: o && o.height ? o.height : Math.ceil(y),
              });
            });
        }
      },
    },
    {
      key: '_onLoad',
      value: function (t) {
        var n = this,
          o = this.state.animOpacity,
          s = this.props,
          u = s.fadeDuration,
          l = s.onLoad;

        if (this._mounted) {
          this.setState({
            status: 2,
          });
          if (l) l(t);
          module2.Animated.timing(o, {
            toValue: 1,
            duration: u,
            easing: module2.Easing.out(module2.Easing.quad),
            isInteraction: false,
            useNativeDriver: true,
          }).start(function () {
            n.setState({
              status: 3,
            });
          });
        }
      },
    },
    {
      key: '_onError',
      value: function (t) {
        var n = this.props.onError;
        this.setState({
          status: 4,
        });
        if (n) n(t);
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this,
          n = this.props.containerStyle;
        return (
          <module2.View
            ref={function (n) {
              t._container = n;
            }}
            pointerEvents="none"
            style={[n, module632.default.container]}
            onLayout={this._measureLayout}
          >
            {this.image}
            {this.spinner}
          </module2.View>
        );
      },
    },
    {
      key: 'image',
      get: function () {
        var t = this.state,
          n = t.status,
          o = t.animOpacity,
          l = t.offset,
          c = t.width,
          f = t.height,
          p = this.props,
          h = p.scrollPosition,
          y = p.vertical,
          _ = p.sliderWidth,
          O = p.sliderHeight,
          P = p.parallaxFactor,
          E = p.style,
          j = module370(p, ['scrollPosition', 'dimensions', 'vertical', 'sliderWidth', 'sliderHeight', 'parallaxFactor', 'style']),
          L = (y ? f : c) * P,
          S = {
            width: y ? c : c + 2 * L,
            height: y ? f + 2 * L : f,
            opacity: o,
            transform: h
              ? [
                  {
                    translateX: y
                      ? 0
                      : h.interpolate({
                          inputRange: [l - _, l + _],
                          outputRange: [-L, L],
                          extrapolate: 'clamp',
                        }),
                  },
                  {
                    translateY: y
                      ? h.interpolate({
                          inputRange: [l - O, l + O],
                          outputRange: [-L, L],
                          extrapolate: 'clamp',
                        })
                      : 0,
                  },
                ]
              : [],
          };
        return React.createElement(
          module2.Animated.Image,
          module51.default({}, j, {
            style: [
              module632.default.image,
              E,
              {
                position: 'relative',
              },
              S,
            ],
            onLoad: this._onLoad,
            onError: 3 !== n ? this._onError : undefined,
          })
        );
      },
    },
    {
      key: 'spinner',
      get: function () {
        var t = this.state.status,
          n = this.props,
          o = n.showSpinner,
          s = n.spinnerColor;
        return (
          !(1 !== t || !o) &&
          React.createElement(
            module2.View,
            {
              style: module632.default.loaderContainer,
            },
            React.createElement(module2.ActivityIndicator, {
              size: 'small',
              color: s,
              animating: true,
            })
          )
        );
      },
    },
  ]);
  return n;
})(React.Component);

export default P;

P.propTypes = (function (t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      O(Object(s), true).forEach(function (n) {
        module284.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      O(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
})({}, module2.Image.propTypes, {
  carouselRef: PropTypes.object,
  itemHeight: PropTypes.number,
  itemWidth: PropTypes.number,
  scrollPosition: PropTypes.object,
  sliderHeight: PropTypes.number,
  sliderWidth: PropTypes.number,
  vertical: PropTypes.bool,
  containerStyle: module2.ViewPropTypes ? module2.ViewPropTypes.style : module2.View.propTypes.style,
  dimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  fadeDuration: PropTypes.number,
  parallaxFactor: PropTypes.number,
  showSpinner: PropTypes.bool,
  spinnerColor: PropTypes.string,
});

P.defaultProps = {
  containerStyle: {},
  fadeDuration: 500,
  parallaxFactor: 0.3,
  showSpinner: true,
  spinnerColor: 'rgba(0, 0, 0, 0.4)',
};
