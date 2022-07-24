export default function default(t) {
  var f = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : undefined;

  class s {
    constructor() {
      module356.default(this, y);
      return module358.default(this, module361.default(y).apply(this, arguments));
    }

    render() {
      return <v style={[j.container, f]}><t /></v>;
    }

  }

  module424.default(s, t);
  return s;
}
import React from "react";
import module2 from "./2";

var module356 = require("./356"),
    module358 = require("./358"),
    module361 = require("./361"),
    module362 = require("./362"),
    module284 = require("./284"),
    module424 = require("./424");

function O(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n) u = u.filter(function (n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    });
    o.push.apply(o, u);
  }

  return o;
}

var b = {
  name: 'GestureHandlerRootView',
  propTypes: function (t) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? arguments[n] : {};
      if (n % 2) O(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));else O(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
    }

    return t;
  }({}, module2.ViewPropTypes)
},
    v = module2.requireNativeComponent('GestureHandlerRootView', b);
var j = module2.StyleSheet.create({
  container: {
    flex: 1
  }
});