exports.createAnimatedBlock = function (t) {
  return p(t);
};

exports.adapt = p;

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module527 = require('./527'),
  module526 = require('./526'),
  module530 = require('./530'),
  y = (function (t) {
    function c(t) {
      var u;
      module356.default(this, c);
      (u = module358.default(
        this,
        module361.default(c).call(
          this,
          {
            type: 'block',
            block: t.map(function (t) {
              return t.__nodeID;
            }),
          },
          t
        )
      ))._array = t;
      return u;
    }

    module362.default(c, t);
    module357.default(c, [
      {
        key: '__onEvaluate',
        value: function () {
          var t;

          this._array.forEach(function (n) {
            t = module526.val(n);
          });

          return t;
        },
      },
    ]);
    return c;
  })(module527.default);

function s(t) {
  if ('object' == typeof t && t.__isProxy) {
    if (!t.__val) t.__val = new module530.default(0);
    return t.__val;
  } else return t instanceof module527.default ? t : new module530.default(t);
}

function p(t) {
  return Array.isArray(t)
    ? new y(
        t.map(function (t) {
          return p(t);
        })
      )
    : s(t);
}
