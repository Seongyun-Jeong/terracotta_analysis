var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module40 = require('./40');

class h {
  constructor(n, u, c, h) {
    var f;
    module22(this, v);
    (f = module30(this, module33(v).call(this, u))).emitter = n;
    f.listener = c;
    f.context = h;
    return f;
  }

  remove() {
    this.emitter.removeSubscription(this);
  }
}

module.exports = h;
