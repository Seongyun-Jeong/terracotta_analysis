export default function default(t) {
  var o = module51.default({}, module2.StyleSheet.flatten(t));

  if (o.transform) {
    o.transform.forEach(function (t) {
      var n = Object.keys(t)[0];
      o[n] = t[n];
    });
    delete o.transform;
  }

  return o;
}
import module2 from "./2";

var module51 = require("./51");