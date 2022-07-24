exports.default = function (t) {
  return (function (h) {
    function P(t, n) {
      var s;
      module356.default(this, P);

      (s = module358.default(this, module361.default(P).call(this, t, n)))._onComponentRef = function (t) {
        s._component = t;
        if (t) module467.default('function' == typeof t.setNativeProps, 'component must implement method `setNativeProps`');
      };

      s._onPositionChange = function () {
        if (s._component) {
          var t = s._computePointerEvents();

          if (s._pointerEvents !== t) {
            s._pointerEvents = t;

            s._component.setNativeProps({
              pointerEvents: t,
            });
          }
        }
      };

      s._pointerEvents = s._computePointerEvents();
      return s;
    }

    module362.default(P, h);
    module357.default(P, [
      {
        key: 'componentWillUnmount',
        value: function () {
          if (this._positionListener) this._positionListener.remove();
        },
      },
      {
        key: 'render',
        value: function () {
          this._bindPosition();

          this._pointerEvents = this._computePointerEvents();
          return React.default.createElement(
            t,
            module51.default({}, this.props, {
              pointerEvents: this._pointerEvents,
              onComponentRef: this._onComponentRef,
            })
          );
        },
      },
      {
        key: '_bindPosition',
        value: function () {
          if (this._positionListener) this._positionListener.remove();
          this._positionListener = new c(this.props.realPosition, this._onPositionChange);
        },
      },
      {
        key: '_computePointerEvents',
        value: function () {
          var t = this.props,
            n = t.navigation,
            o = t.realPosition,
            s = t.scene;
          if (s.isStale || n.state.index !== s.index) return s.index > n.state.index ? 'box-only' : 'none';
          var u = o.__getAnimatedValue() - n.state.index;
          return Math.abs(u) > _ ? 'box-only' : 'auto';
        },
      },
    ]);
    return P;
  })(React.default.Component);
};

var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module467 = require('./467'),
  _ = 0.01;

var c = (function () {
  function t(n, s) {
    module356.default(this, t);
    this._value = n;
    this._token = n.addListener(s);
  }

  module357.default(t, [
    {
      key: 'remove',
      value: function () {
        this._value.removeListener(this._token);
      },
    },
  ]);
  return t;
})();
