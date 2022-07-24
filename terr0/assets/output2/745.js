var module356 = require('./356'),
  module675 = require('./675'),
  module672 = require('./672');

class f {
  constructor(o) {
    module356.default(this, t);
    this._messaging = o;
  }

  getAPNSToken() {
    return module672.isIOS ? module675.getNativeModule(this._messaging).getAPNSToken() : null;
  }

  registerForRemoteNotifications() {
    if (module672.isIOS) return module675.getNativeModule(this._messaging).registerForRemoteNotifications();
  }
}

export default f;
