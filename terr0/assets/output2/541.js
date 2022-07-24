export function createAnimatedCall(t, l) {
  return new y(t, l);
}

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module531 = require('./531'),
  module362 = require('./362'),
  module542 = require('./542'),
  module526 = require('./526'),
  module527 = require('./527'),
  v = new Map();

function p(t) {
  var l = v.get(t.id);
  if (l) l._callback(t.args);
}

class y {
  constructor(t, n) {
    var _;

    module356.default(this, h);
    (_ = module358.default(
      this,
      module361.default(h).call(
        this,
        {
          type: 'call',
          input: t.map(function (t) {
            return t.__nodeID;
          }),
        },
        t
      )
    ))._callback = n;
    _._args = t;
    return _;
  }

  __attach() {
    module531.default(module361.default(h.prototype), '__attach', this).call(this);
    v.set(this.__nodeID, this);
    if (1 === v.size) module542.default.addListener('onReanimatedCall', p);
  }

  __detach() {
    v.delete(this.__nodeID);
    if (0 === v.size) module542.default.removeAllListeners('onReanimatedCall');
    module531.default(module361.default(h.prototype), '__detach', this).call(this);
  }

  __onEvaluate() {
    this._callback(this._args.map(module526.val));

    return 0;
  }
}
