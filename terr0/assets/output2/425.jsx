export default function default(t) {
  class y {
    constructor(t) {
      var u;
      module356.default(this, p);
      (u = module358.default(this, module361.default(p).call(this, t))).state = {
        isFocused: !!t.navigation && t.navigation.isFocused()
      };
      return u;
    }

    componentDidMount() {
      var t = this,
          n = this.props.navigation;
      this.subscriptions = [n.addListener('didFocus', function () {
        return t.setState({
          isFocused: true
        });
      }), n.addListener('willBlur', function () {
        return t.setState({
          isFocused: false
        });
      })];
    }

    componentWillUnmount() {
      this.subscriptions.forEach(function (t) {
        return t.remove();
      });
    }

    render() {
      return <t />;
    }

  }

  h(y, "displayName", "withNavigationFocus(" + (t.displayName || t.name) + ")");
  return module424.default(module423.default(y, {
    forwardRef: false
  }), t);
}
import React from "react";

var module356 = require("./356"),
    module358 = require("./358"),
    module361 = require("./361"),
    module362 = require("./362"),
    module424 = require("./424"),
    module423 = require("./423");

function v() {
  return (v = Object.assign || function (t) {
    for (var n = 1; n < arguments.length; n++) {
      var u = arguments[n];

      for (var o in u) Object.prototype.hasOwnProperty.call(u, o) && (t[o] = u[o]);
    }

    return t;
  }).apply(this, arguments);
}

function h(t, n, u) {
  if (n in t) Object.defineProperty(t, n, {
    value: u,
    enumerable: true,
    configurable: true,
    writable: true
  });else t[n] = u;
  return t;
}