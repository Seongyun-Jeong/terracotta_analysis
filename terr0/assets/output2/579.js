import module370 from '@babel/runtime/helpers/defineEnumerableProperties';

var module284 = require('./284'),
  module524 = require('./524'),
  module530 = require('./530');

function l(t, n) {
  var u = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    u.push.apply(u, o);
  }

  return u;
}

function p(t) {
  for (var u = 1; u < arguments.length; u++) {
    var o = null != arguments[u] ? arguments[u] : {};
    if (u % 2)
      l(Object(o), true).forEach(function (u) {
        module284.default(t, u, o[u]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      l(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function s(t) {
  return 3.62 * (t - 30) + 194;
}

function c(t) {
  return 3 * (t - 8) + 25;
}

function y(t) {
  return module524.add(module524.multiply(module524.sub(t, 30), 3.62), 194);
}

function b(t) {
  return module524.add(module524.multiply(module524.sub(t, 8), 3), 25);
}

function w(t, n, u) {
  function f(t, n, u) {
    return module524.divide(module524.sub(t, n), module524.sub(u, n));
  }

  function l(t, n, u) {
    return module524.add(n, module524.multiply(t, module524.sub(u, n)));
  }

  function s(t, n, u) {
    return module524.add(module524.multiply(t, u), module524.multiply(module524.sub(1, t), n));
  }

  function c(t) {
    return module524.add(module524.sub(module524.multiply(44e-6, module524.pow(t, 3)), module524.multiply(0.006, module524.pow(t, 2))), module524.multiply(0.36, t), 2);
  }

  function w(t) {
    return module524.add(module524.sub(module524.multiply(4.5e-7, module524.pow(t, 3)), module524.multiply(332e-6, module524.pow(t, 2))), module524.multiply(0.1078, t), 5.84);
  }

  var O = f(module524.divide(t, 1.7), 0, 20);
  O = l(O, 0, 0.8);
  var v = O,
    h = module524.cond(
      module524.lessOrEq(P, 18),
      ((M = P), module524.add(module524.sub(module524.multiply(7e-4, module524.pow(M, 3)), module524.multiply(0.031, module524.pow(M, 2))), module524.multiply(0.64, M), 1.28)),
      module524.cond(module524.and(module524.greaterThan(P, 18), module524.lessOrEq(P, 44)), c(P), w(P))
    ),
    j = 0.01,
    P = D,
    M,
    D = l(f(module524.divide(n, 1.7), 0, 20), 0.5, 200),
    k = s(module524.sub(module524.multiply(2, v), module524.multiply(v, v)), h, j);
  return p({}, u, {
    stiffness: y(D),
    damping: b(k),
  });
}

function O(t, n, u) {
  function o(t, n, u) {
    return (t - n) / (u - n);
  }

  function f(t, n, u) {
    return n + t * (u - n);
  }

  function l(t, n, u) {
    return t * u + (1 - t) * n;
  }

  function y(t) {
    return 44e-6 * t ** 3 - 0.006 * t ** 2 + 0.36 * t + 2;
  }

  function b(t) {
    return 4.5e-7 * t ** 3 - 332e-6 * t ** 2 + 0.1078 * t + 5.84;
  }

  var w = o(t / 1.7, 0, 20);
  w = f(w, 0, 0.8);
  var O = w,
    v = (h = P) <= 18 ? ((j = h), 7e-4 * j ** 3 - 0.031 * j ** 2 + 0.64 * j + 1.28) : h > 18 && h <= 44 ? y(h) : b(h),
    h,
    j,
    P = f(o(n / 1.7, 0, 20), 0.5, 200),
    M = l(2 * O - O * O, v, 0.01);
  return p({}, u, {
    stiffness: s(P),
    damping: c(M),
  });
}

var v = {
  makeDefaultConfig: function () {
    return {
      stiffness: new module530.default(100),
      mass: new module530.default(1),
      damping: new module530.default(10),
      overshootClamping: false,
      restSpeedThreshold: 0.001,
      restDisplacementThreshold: 0.001,
      toValue: new module530.default(0),
    };
  },
  makeConfigFromBouncinessAndSpeed: function (t) {
    var n = t.bounciness,
      o = t.speed,
      f = module370(t, ['bounciness', 'speed']);
    return 'number' == typeof n && 'number' == typeof o ? O(n, o, f) : w(n, o, f);
  },
  makeConfigFromOrigamiTensionAndFriction: function (t) {
    var n = t.tension,
      o = t.friction;
    return p({}, module370(t, ['tension', 'friction']), {
      stiffness: 'number' == typeof n ? s(n) : y(n),
      damping: 'number' == typeof o ? c(o) : b(o),
    });
  },
};
export default v;
