export default function default(t, u) {
  var o = {},
      c = module638.default(u);
  ('string' == typeof t ? [t] : t).forEach(function (t) {
    o[t] = t in c ? c[t] : module639.default(t, c);
  });
  return o;
}

var module638 = require("./638"),
    module639 = require("./639");