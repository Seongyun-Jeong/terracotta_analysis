export default function default(n) {
  var f = new module530.default(0),
      l = new module530.default();
  return module524.block([module524.set(f, module524.cond(module524.defined(l), module524.sub(n, l), 0)), module524.set(l, n), f]);
}

var module524 = require("./524"),
    module530 = require("./530");