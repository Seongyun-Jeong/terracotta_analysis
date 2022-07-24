import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module670 = require('./670'),
  module671 = require('./671'),
  module674 = require('./674'),
  module676 = require('./676'),
  module675 = require('./675'),
  module672 = require('./672'),
  module745 = require('./745'),
  module746 = require('./746'),
  S = ['messaging_message_received', 'messaging_token_refreshed'],
  b = 'RNFirebaseMessaging';

exports.MODULE_NAME = b;
var N = 'messaging';
exports.NAMESPACE = N;

class y {
  constructor(t) {
    var s;
    module356.default(this, E);
    (s = module358.default(
      this,
      module361.default(E).call(this, t, {
        events: S,
        moduleName: b,
        hasMultiAppSupport: false,
        hasCustomUrlSupport: false,
        namespace: N,
      })
    ))._ios = new module745.default(module360.default(s));
    module670.SharedEventEmitter.addListener('messaging_message_received', function (t) {
      module670.SharedEventEmitter.emit('onMessage', new module746.default(t));
    });
    module670.SharedEventEmitter.addListener('messaging_token_refreshed', function (t) {
      module670.SharedEventEmitter.emit('onTokenRefresh', t);
    });
    if ('ios' === module2.Platform.OS) module675.getNativeModule(module360.default(s)).jsInitialised();
    return s;
  }

  getToken() {
    return module675.getNativeModule(this).getToken();
  }

  deleteToken() {
    return module675.getNativeModule(this).deleteToken();
  }

  onMessage(t) {
    var n,
      s = this;
    if (module672.isFunction(t)) n = t;
    else {
      if (!module672.isObject(t) || !module672.isFunction(t.next))
        throw new Error('Messaging.onMessage failed: First argument must be a function or observer object with a `next` function.');
      n = t.next;
    }
    module674.getLogger(this).info('Creating onMessage listener');
    module670.SharedEventEmitter.addListener('onMessage', n);
    return function () {
      module674.getLogger(s).info('Removing onMessage listener');
      module670.SharedEventEmitter.removeListener('onMessage', n);
    };
  }

  onTokenRefresh(t) {
    var n,
      s = this;
    if (module672.isFunction(t)) n = t;
    else {
      if (!module672.isObject(t) || !module672.isFunction(t.next))
        throw new Error('Messaging.onTokenRefresh failed: First argument must be a function or observer object with a `next` function.');
      n = t.next;
    }
    module674.getLogger(this).info('Creating onTokenRefresh listener');
    module670.SharedEventEmitter.addListener('onTokenRefresh', n);
    return function () {
      module674.getLogger(s).info('Removing onTokenRefresh listener');
      module670.SharedEventEmitter.removeListener('onTokenRefresh', n);
    };
  }

  requestPermission() {
    return module675.getNativeModule(this).requestPermission();
  }

  hasPermission() {
    return module675.getNativeModule(this).hasPermission();
  }

  sendMessage(t) {
    if (!(t instanceof module746.default)) return Promise.reject(new Error("Messaging:sendMessage expects a 'RemoteMessage' but got type " + typeof t));

    try {
      return module675.getNativeModule(this).sendMessage(t.build());
    } catch (t) {
      return Promise.reject(t);
    }
  }

  subscribeToTopic(t) {
    return module675.getNativeModule(this).subscribeToTopic(t);
  }

  unsubscribeFromTopic(t) {
    return module675.getNativeModule(this).unsubscribeFromTopic(t);
  }

  setBackgroundMessageHandler() {
    throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('messaging', 'setBackgroundMessageHandler'));
  }

  useServiceWorker() {
    throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('messaging', 'useServiceWorker'));
  }

  ios() {
    return this._ios;
  }
}

export default y;
var p = {
  RemoteMessage: module746.default,
};
exports.statics = p;
