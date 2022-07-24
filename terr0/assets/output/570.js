exports.default = function (l, n, p) {
  var y = module524.cond(n.time, n.time, l),
    c = module552.min(module524.sub(l, y), o),
    f = p.damping,
    v = p.mass,
    b = p.stiffness,
    h = module524.multiply(-1, n.velocity),
    T = module524.sub(p.toValue, n.position),
    V = module524.divide(f, module524.multiply(2, module524.sqrt(module524.multiply(b, v)))),
    q = module524.sqrt(module524.divide(b, v)),
    _ = module524.multiply(q, module524.sqrt(module524.sub(1, module524.multiply(V, V)))),
    x = module524.divide(c, 1e3),
    j = module524.sin(module524.multiply(_, x)),
    k = module524.cos(module524.multiply(_, x)),
    w = module524.exp(module524.multiply(-1, V, q, x)),
    C = module524.multiply(w, module524.add(module524.multiply(j, module524.divide(module524.add(h, module524.multiply(V, q, T)), _)), module524.multiply(T, k))),
    D = module524.sub(p.toValue, C),
    M = module524.sub(
      module524.multiply(V, q, C),
      module524.multiply(w, module524.sub(module524.multiply(k, module524.add(h, module524.multiply(V, q, T))), module524.multiply(_, T, j)))
    ),
    O = module524.exp(module524.multiply(-1, q, x)),
    P = module524.sub(p.toValue, module524.multiply(O, module524.add(T, module524.multiply(module524.add(h, module524.multiply(q, T)), x)))),
    S = module524.multiply(O, module524.add(module524.multiply(h, module524.sub(module524.multiply(x, q), 1)), module524.multiply(x, T, q, q))),
    z = new module530.default(0),
    A = module524.cond(
      module524.and(p.overshootClamping, module524.neq(p.stiffness, 0)),
      module524.cond(module524.lessThan(z, p.toValue), module524.greaterThan(n.position, p.toValue), module524.lessThan(n.position, p.toValue))
    ),
    B = module524.lessThan(module552.abs(n.velocity), p.restSpeedThreshold),
    E = module524.or(module524.eq(p.stiffness, 0), module524.lessThan(module552.abs(module524.sub(p.toValue, n.position)), p.restDisplacementThreshold));

  return module524.block([
    module524.set(z, n.position),
    module524.cond(module524.lessThan(V, 1), [module524.set(n.position, D), module524.set(n.velocity, M)], [module524.set(n.position, P), module524.set(n.velocity, S)]),
    module524.set(n.time, l),
    module524.cond(module524.or(A, module524.and(B, E)), [
      module524.cond(module524.neq(p.stiffness, 0), [module524.set(n.velocity, 0), module524.set(n.position, p.toValue)]),
      module524.set(n.finished, 1),
    ]),
  ]);
};

var module524 = require('./524'),
  module552 = require('./552'),
  module530 = require('./530'),
  o = 64;
