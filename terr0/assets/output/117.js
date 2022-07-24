require('./43');

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module38 = require('./38'),
  module29 = require('./29'),
  module3 = require('./3');

class p {
  constructor(n) {
    module22(this, _);
    return module30(this, module33(_).call(this, module29.sharedSubscriber));
  }

  addListener(t, n, s) {
    if (null != this._nativeModule) this._nativeModule.addListener(t);
    return module34(module33(_.prototype), 'addListener', this).call(this, t, n, s);
  }

  removeAllListeners(t) {
    module3(t, 'eventType argument is required.');
    var n = this.listeners(t).length;
    if (null != this._nativeModule) this._nativeModule.removeListeners(n);
    module34(module33(_.prototype), 'removeAllListeners', this).call(this, t);
  }

  removeSubscription(t) {
    if (null != this._nativeModule) this._nativeModule.removeListeners(1);
    module34(module33(_.prototype), 'removeSubscription', this).call(this, t);
  }
}

module.exports = p;
