export function createAnimatedSet(t, u) {
  return new h(t, module529.adapt(u));
}

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module527 = require('./527'),
  module526 = require('./526'),
  module529 = require('./529');

class h {
  constructor(t, n) {
    var f;
    module356.default(this, v);
    (f = module358.default(
      this,
      module361.default(v).call(
        this,
        {
          type: 'set',
          what: t.__nodeID,
          value: n.__nodeID,
        },
        [n]
      )
    ))._what = t;
    f._value = n;
    return f;
  }

  __onEvaluate() {
    var t = module526.val(this._value);

    this._what._updateValue(t);

    return t;
  }
}
