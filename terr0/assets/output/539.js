exports.createAnimatedOperator = function (n) {
  return function (...args) {
    return new w(n, args.map(module529.adapt));
  };
};

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module527 = require('./527'),
  module526 = require('./526'),
  module191 = require('./191'),
  module529 = require('./529');

function v(n) {
  return function (t) {
    return t.reduce(function (t, u) {
      return n(module526.val(t), module526.val(u));
    });
  };
}

function _(n, t) {
  return function (u) {
    return u.reduce(function (t, u) {
      return n(module526.val(t), module526.val(u));
    }, t);
  };
}

function M(n) {
  return function (t) {
    return n(module526.val(t[0]), module526.val(t[1]));
  };
}

function q(n) {
  return function (t) {
    return n(module526.val(t[0]));
  };
}

var y = {
    add: v(function (n, t) {
      return n + t;
    }),
    sub: v(function (n, t) {
      return n - t;
    }),
    multiply: v(function (n, t) {
      return n * t;
    }),
    divide: v(function (n, t) {
      return n / t;
    }),
    pow: v(function (n, t) {
      return n ** t;
    }),
    modulo: v(function (n, t) {
      return ((n % t) + t) % t;
    }),
    sqrt: q(function (n) {
      return Math.sqrt(n);
    }),
    log: q(function (n) {
      return Math.log(n);
    }),
    sin: q(function (n) {
      return Math.sin(n);
    }),
    cos: q(function (n) {
      return Math.cos(n);
    }),
    tan: q(function (n) {
      return Math.tan(n);
    }),
    acos: q(function (n) {
      return Math.acos(n);
    }),
    asin: q(function (n) {
      return Math.asin(n);
    }),
    atan: q(function (n) {
      return Math.atan(n);
    }),
    exp: q(function (n) {
      return Math.exp(n);
    }),
    and: _(function (n, t) {
      return n && t;
    }, true),
    or: _(function (n, t) {
      return n || t;
    }, false),
    not: q(function (n) {
      return !n;
    }),
    defined: q(function (n) {
      return null !== n && undefined !== n && !isNaN(n);
    }),
    lessThan: M(function (n, t) {
      return n < t;
    }),
    eq: M(function (n, t) {
      return n == t;
    }),
    greaterThan: M(function (n, t) {
      return n > t;
    }),
    lessOrEq: M(function (n, t) {
      return n <= t;
    }),
    greaterOrEq: M(function (n, t) {
      return n >= t;
    }),
    neq: M(function (n, t) {
      return n != t;
    }),
  },
  w = (function (n) {
    function l(n, u) {
      var c;
      module356.default(this, l);
      (c = module358.default(
        this,
        module361.default(l).call(
          this,
          {
            type: 'op',
            op: n,
            input: u.map(function (n) {
              return n.__nodeID;
            }),
          },
          u
        )
      ))._op = n;
      c._input = u;
      return c;
    }

    module362.default(l, n);
    module357.default(l, [
      {
        key: '__onEvaluate',
        value: function () {
          if (!this._operation) {
            this._operation = y[this._op];
            module191.default(this._operation, "Illegal operator '%s'", this._op);
          }

          return this._operation(this._input);
        },
      },
    ]);
    return l;
  })(module527.default);
