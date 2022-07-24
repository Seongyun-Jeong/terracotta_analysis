export default function default(u, o) {
  u = module529.adapt(u);
  o = module529.adapt(o);
  return module524.cond(module524.lessThan(u, o), o, u);
}

var module524 = require("./524"),
    module529 = require("./529");