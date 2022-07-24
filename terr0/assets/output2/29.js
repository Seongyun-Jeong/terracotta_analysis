var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module38 = require('./38'),
  module41 = require('./41');

class v {
  constructor() {
    var n;
    module22(this, p);
    var u = new module41();
    (n = module30(this, module33(p).call(this, u))).sharedSubscriber = u;
    return n;
  }

  addListener(t, n, s) {
    return module34(module33(p.prototype), 'addListener', this).call(this, t, n, s);
  }

  removeAllListeners(t) {
    module34(module33(p.prototype), 'removeAllListeners', this).call(this, t);
  }

  removeSubscription(t) {
    if (t.emitter !== this) t.emitter.removeSubscription(t);
    else module34(module33(p.prototype), 'removeSubscription', this).call(this, t);
  }
}

module.exports = new v();
