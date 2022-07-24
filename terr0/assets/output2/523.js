var module356 = require('./356'),
  module524 = require('./524'),
  module550 = require('./550'),
  c = (function () {
    function u() {
      module356.default(this, u);
    }

    module357(u, null, [
      {
        key: 'linear',
        value: function (u) {
          return u;
        },
      },
      {
        key: 'ease',
        value: function (u) {
          return new module550.default(u, 0.42, 0, 1, 1);
        },
      },
      {
        key: 'quad',
        value: function (u) {
          return module524.multiply(u, u);
        },
      },
      {
        key: 'cubic',
        value: function (u) {
          return module524.multiply(u, u, u);
        },
      },
      {
        key: 'poly',
        value: function (u) {
          return function (n) {
            return module524.pow(n, u);
          };
        },
      },
      {
        key: 'sin',
        value: function (u) {
          return module524.sub(1, module524.cos(module524.multiply(u, Math.PI, 0.5)));
        },
      },
      {
        key: 'circle',
        value: function (u) {
          return module524.sub(1, module524.sqrt(module524.sub(1, module524.multiply(u, u))));
        },
      },
      {
        key: 'exp',
        value: function (u) {
          return module524.pow(2, module524.multiply(10, module524.sub(u, 1)));
        },
      },
      {
        key: 'elastic',
        value: function () {
          var u = (arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 1) * Math.PI;
          return function (n) {
            return module524.sub(1, module524.multiply(module524.pow(module524.cos(module524.multiply(n, Math.PI, 0.5)), 3), module524.cos(module524.multiply(n, u))));
          };
        },
      },
      {
        key: 'back',
        value: function (u) {
          if (undefined === u) u = 1.70158;
          return function (n) {
            return module524.multiply(n, n, module524.sub(module524.multiply(module524.add(u, 1), n), u));
          };
        },
      },
      {
        key: 'bounce',
        value: function (u) {
          var n = function (u) {
            return module524.multiply(7.5625, u, u);
          };

          return module524.cond(
            module524.lessThan(u, 0.36363636363636365),
            n(u),
            module524.cond(
              module524.lessThan(u, 0.7272727272727273),
              module524.add(0.75, n(module524.sub(u, 0.5454545454545454))),
              module524.cond(
                module524.lessThan(u, 0.9057971014492754),
                module524.add(0.9375, n(module524.sub(u, 0.8181818181818182))),
                module524.add(0.984375, n(module524.sub(u, 0.9545454545454546)))
              )
            )
          );
        },
      },
      {
        key: 'bezier',
        value: function (u, n, t, l) {
          return function (c) {
            return new module550.default(c, u, n, t, l);
          };
        },
      },
      {
        key: 'in',
        value: function (u) {
          return u;
        },
      },
      {
        key: 'out',
        value: function (u) {
          return function (n) {
            return module524.sub(1, u(module524.sub(1, n)));
          };
        },
      },
      {
        key: 'inOut',
        value: function (u) {
          return function (n) {
            return module524.cond(
              module524.lessThan(n, 0.5),
              module524.divide(u(module524.multiply(n, 2)), 2),
              module524.sub(1, module524.divide(u(module524.multiply(module524.sub(1, n), 2)), 2))
            );
          };
        },
      },
    ]);
    return u;
  })();

export default c;
