export function createAnimatedBlock(t) {
  return p(t);
}
exports.adapt = p;

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module527 = require('./527'),
  module526 = require('./526'),
  module530 = require('./530');

class y {
  constructor(t) {
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

  __onEvaluate() {
    var t;

    this._array.forEach(function (n) {
      t = module526.val(n);
    });

    return t;
  }
}

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
