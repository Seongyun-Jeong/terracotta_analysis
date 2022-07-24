var module404 = require("./404");

export default function default(n) {
  class t {
    constructor() {
      var n;
      module356.default(this, p);

      (n = module358.default(this, module361.default(p).call(this))).handleOrientationChange = function (t) {
        var o = t.window,
            s = L(o);
        n.setState({
          isLandscape: s
        });
      };

      var t = L(module2.Dimensions.get('window'));
      n.state = {
        isLandscape: t
      };
      return n;
    }

    componentDidMount() {
      if ('function' == typeof module2.Dimensions.addEventListener) module2.Dimensions.addEventListener('change', this.handleOrientationChange);
    }

    componentWillUnmount() {
      if ('function' == typeof module2.Dimensions.removeEventListener) module2.Dimensions.removeEventListener('change', this.handleOrientationChange);
    }

    render() {
      return <n />;
    }

  }

  return module424.default(t, n);
}
import React from "react";
import module2 from "./2";

var module51 = require("./51"),
    module356 = require("./356"),
    module358 = require("./358"),
    module361 = require("./361"),
    module362 = require("./362"),
    module424 = require("./424"),
    L = function (n) {
  return n.width > n.height;
};

exports.isOrientationLandscape = L;