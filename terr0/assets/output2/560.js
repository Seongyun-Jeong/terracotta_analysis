export default function default(n, u) {
  var c = new module530.default();
  return module524.block([module524.cond(module524.not(module524.defined(c)), module524.set(c, n)), module524.cond(module524.neq(n, c), [module524.set(c, n), u])]);
}

var module524 = require("./524"),
    module530 = require("./530");