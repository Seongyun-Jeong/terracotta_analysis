var module356 = require('./356'),
  module675 = require('./675'),
  module672 = require('./672'),
  f = (function () {
    function t(o) {
      module356.default(this, t);
      this._messaging = o;
    }

    module357.default(t, [
      {
        key: 'getAPNSToken',
        value: function () {
          return module672.isIOS ? module675.getNativeModule(this._messaging).getAPNSToken() : null;
        },
      },
      {
        key: 'registerForRemoteNotifications',
        value: function () {
          if (module672.isIOS) return module675.getNativeModule(this._messaging).registerForRemoteNotifications();
        },
      },
    ]);
    return t;
  })();

exports.default = f;
