require('./39');

import module3 from './3';

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module38 = require('./38');

class h {
  constructor(n, u) {
    var l;
    module22(this, c);
    (l = module30(this, module33(c).call(this, null))).isAvailable = false;
    l._nativeModuleName = n;
    l._nativeEventEmitterName = u;
    return l;
  }

  throwMissingNativeModule() {
    module3(
      false,
      "Cannot use '" +
        this._nativeEventEmitterName +
        "' module when native '" +
        this._nativeModuleName +
        "' is not included in the build. Either include it, or check '" +
        this._nativeEventEmitterName +
        "'.isAvailable before calling any methods."
    );
  }

  addListener(t, n, s) {
    this.throwMissingNativeModule();
  }

  removeAllListeners(t) {
    this.throwMissingNativeModule();
  }

  removeSubscription(t) {
    this.throwMissingNativeModule();
  }
}

module.exports = h;
