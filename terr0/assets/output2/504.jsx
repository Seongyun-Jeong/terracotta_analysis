var module404 = require("./404");

export default function default(t) {
  return function (n) {
    var u = n.route,
        o = n.jumpTo;
    return <v key={u.key} component={t[u.key]} route={u} jumpTo={o} />;
  };
}
import module370 from "@babel/runtime/helpers/defineEnumerableProperties";
import React from "react";

var module356 = require("./356"),
    module358 = require("./358"),
    module361 = require("./361"),
    module362 = require("./362");

class v {
  constructor() {
    module356.default(this, n);
    return module358.default(this, module361.default(n).apply(this, arguments));
  }

  render() {
    var t = this.props,
        n = t.component,
        o = module370(t, ["component"]);
    return <n />;
  }

}