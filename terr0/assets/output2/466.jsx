export default function default(t) {
  return function (h) {
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
              pointerEvents: t
            });
          }
        }
      };

      s._pointerEvents = s._computePointerEvents();
      return s;
    }

    module362.default(P, h);
    module357(P, [{
      key: "componentWillUnmount",
      value: function () {
        if (this._positionListener) this._positionListener.remove();
      }
    }, {
      key: "render",
      value: function () {
        this._bindPosition();

        this._pointerEvents = this._computePointerEvents();
        return <t />;
      }
    }, {
      key: "_bindPosition",
      value: function () {
        if (this._positionListener) this._positionListener.remove();
        this._positionListener = new c(this.props.realPosition, this._onPositionChange);
      }
    }, {
      key: "_computePointerEvents",
      value: function () {
        var t = this.props,
            n = t.navigation,
            o = t.realPosition,
            s = t.scene;
        if (s.isStale || n.state.index !== s.index) return s.index > n.state.index ? 'box-only' : 'none';
        var u = o.__getAnimatedValue() - n.state.index;
        return Math.abs(u) > _ ? 'box-only' : 'auto';
      }
    }]);
    return P;
  }(React.Component);
}
import React from "react";

var module51 = require("./51"),
    module356 = require("./356"),
    module358 = require("./358"),
    module361 = require("./361"),
    module362 = require("./362"),
    module467 = require("./467"),
    _ = .01;

class c {
  constructor(n, s) {
    module356.default(this, t);
    this._value = n;
    this._token = n.addListener(s);
  }

  remove() {
    this._value.removeListener(this._token);
  }

}