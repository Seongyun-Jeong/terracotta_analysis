export default function default(n) {
  class L {
    constructor() {
      var n;
      module356.default(this, L);

      (n = module358.default(this, module361.default(L).call(this))).handleOrientationChange = function (t) {
        var o = t.window,
            u = p(o);
        n.setState({
          isLandscape: u
        });
      };

      var t = p(module2.Dimensions.get('window'));
      n.state = {
        isLandscape: t
      };
      return n;
    }

    componentDidMount() {
      module2.Dimensions.addEventListener('change', this.handleOrientationChange);
    }

    componentWillUnmount() {
      module2.Dimensions.removeEventListener('change', this.handleOrientationChange);
    }

    render() {
      return <n />;
    }

  }

  return module430.default(L, n);
}
import React from "react";
import module2 from "./2";

var module51 = require("./51"),
    module356 = require("./356"),
    module358 = require("./358"),
    module361 = require("./361"),
    module362 = require("./362"),
    module430 = require("./430"),
    p = function (n) {
  return n.width > n.height;
};

exports.isOrientationLandscape = p;