export default function default(n, s, u) {
  var c = module524.cond(s.time, s.time, n),
      p = module524.sub(n, c),
      v = module524.pow(u.deceleration, p),
      b = module524.divide(module524.multiply(u.deceleration, module524.sub(1, v)), module524.sub(1, u.deceleration)),
      y = module524.divide(s.velocity, 1e3),
      f = module524.multiply(y, v, 1e3),
      _ = module524.add(s.position, module524.multiply(y, b));

  return module524.block([module524.set(s.position, _), module524.set(s.velocity, f), module524.set(s.time, n), module524.cond(module524.lessThan(module552.abs(f), l), module524.set(s.finished, 1))]);
}

var module524 = require("./524"),
    module552 = require("./552"),
    l = 5;