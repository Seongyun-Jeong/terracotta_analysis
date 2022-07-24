var module404 = require("./404");

export default function default(t) {
  return function (n) {
    var o = n.route,
        u = n.jumpTo,
        c = n.position;
    return <k key={o.key} component={t[o.key]} route={o} jumpTo={u} position={c} __source={{
      fileName: v,
      lineNumber: 16
    }} />;
  };
}
import module370 from "@babel/runtime/helpers/defineEnumerableProperties";
import React from "react";

var module356 = require("./356"),
    module358 = require("./358"),
    module361 = require("./361"),
    module362 = require("./362"),
    v = "/Users/osdnk/work/react-native-tab-view/src/SceneMap.tsx";

class k {
  constructor() {
    module356.default(this, n);
    return module358.default(this, module361.default(n).apply(this, arguments));
  }

  render() {
    var t = this.props,
        n = t.component,
        u = module370(t, ["component"]);
    return <n />;
  }

}