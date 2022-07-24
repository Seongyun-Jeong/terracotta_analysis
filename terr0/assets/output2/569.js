export default function default(o, n, u) {
  var s = module524.cond(n.time, n.time, o),
      l = module524.add(n.frameTime, module524.sub(o, s)),
      f = u.easing(module524.divide(n.frameTime, u.duration)),
      b = module524.sub(u.toValue, n.position),
      c = module524.divide(b, module524.sub(1, f)),
      v = module524.sub(u.toValue, c),
      p = u.easing(module524.divide(l, u.duration)),
      _ = module524.add(v, module524.multiply(c, p));

  return module524.block([module524.cond(module524.greaterOrEq(l, u.duration), [module524.set(n.position, u.toValue), module524.set(n.finished, 1)], module524.set(n.position, _)), module524.set(n.frameTime, l), module524.set(n.time, o)]);
}

var module524 = require("./524");