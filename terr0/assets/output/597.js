var module51 = require('./51'),
  module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module373 = require('./373'),
  module598 = require('./598'),
  module618 = require('./618'),
  module613 = require('./613');

function O(n, t) {
  var o = Object.keys(n);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(n);
    if (t)
      s = s.filter(function (t) {
        return Object.getOwnPropertyDescriptor(n, t).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function E(n) {
  for (var t = 1; t < arguments.length; t++) {
    var s = null != arguments[t] ? arguments[t] : {};
    if (t % 2)
      O(Object(s), true).forEach(function (t) {
        module284.default(n, t, s[t]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(s));
    else
      O(Object(s)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(s, t));
      });
  }

  return n;
}

var P = true,
  T = {
    mode: 'card',
    cardShadowEnabled: true,
    cardOverlayEnabled: false,
  },
  w = (function (n, ...args) {
    function o() {
      var n, c;
      module356.default(this, o);

      (c = module358.default(this, (n = module361.default(o)).call.apply(n, [this].concat(args))))._configureTransition = function (n, t) {
        return E({}, module613.default.getTransitionConfig(c.props.navigationConfig.transitionConfig, n, t, 'modal' === c.props.navigationConfig.mode).transitionSpec, {
          useNativeDriver: P,
        });
      };

      c._getShadowEnabled = function () {
        var n = c.props.navigationConfig;
        return n && n.hasOwnProperty('cardShadowEnabled') ? n.cardShadowEnabled : T.cardShadowEnabled;
      };

      c._getCardOverlayEnabled = function () {
        var n = c.props.navigationConfig;
        return n && n.hasOwnProperty('cardOverlayEnabled') ? n.cardOverlayEnabled : T.cardOverlayEnabled;
      };

      c._render = function (n, o) {
        var s = c.props,
          p = s.screenProps,
          l = s.navigationConfig;
        return React.default.createElement(
          module598.default,
          module51.default({}, l, {
            shadowEnabled: c._getShadowEnabled(),
            cardOverlayEnabled: c._getCardOverlayEnabled(),
            onGestureBegin: c.props.onGestureBegin,
            onGestureCanceled: c.props.onGestureCanceled,
            onGestureEnd: c.props.onGestureEnd,
            screenProps: p,
            descriptors: c.props.descriptors,
            transitionProps: n,
            lastTransitionProps: o,
          })
        );
      };

      c._onTransitionEnd = function (n, t) {
        var o = c.props,
          s = o.navigationConfig,
          p = o.navigation,
          l = o.onTransitionEnd,
          u = undefined === l ? s.onTransitionEnd : l,
          f = n.scene.route.key,
          y = p.state.routes[p.state.index].key === f;
        if (n.navigation.state.isTransitioning && y)
          p.dispatch(
            module373.StackActions.completeTransition({
              key: p.state.key,
              toChildKey: f,
            })
          );
        if (u) u(n, t);
      };

      return c;
    }

    module362.default(o, n);
    module357.default(o, [
      {
        key: 'render',
        value: function () {
          return React.default.createElement(module618.default, {
            render: this._render,
            configureTransition: this._configureTransition,
            screenProps: this.props.screenProps,
            navigation: this.props.navigation,
            descriptors: this.props.descriptors,
            onTransitionStart: this.props.onTransitionStart || this.props.navigationConfig.onTransitionStart,
            onTransitionEnd: this._onTransitionEnd,
          });
        },
      },
      {
        key: 'componentDidMount',
        value: function () {
          var n = this.props.navigation;
          if (n.state.isTransitioning)
            n.dispatch(
              module373.StackActions.completeTransition({
                key: n.state.key,
              })
            );
        },
      },
    ]);
    return o;
  })(React.default.Component);

exports.default = w;
