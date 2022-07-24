import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module701 = require('./701'),
  module707 = require('./707'),
  module676 = require('./676'),
  module675 = require('./675'),
  module667 = require('./667'),
  N = ['database_transaction_event'],
  O = 'RNFirebaseDatabase';

exports.MODULE_NAME = O;
var h = 'database';
exports.NAMESPACE = h;

class T {
  constructor(t, n) {
    var l, c, module676;
    module356.default(this, v);

    if ('string' == typeof t) {
      c = module667.default.app();
      module676 = t;
    } else {
      c = t;
      module676 = n || c.options.databaseURL;
    }

    module676 = module676.endsWith('/') ? module676 : module676 + '/';
    (l = module358.default(
      this,
      module361.default(v).call(
        this,
        c,
        {
          events: N,
          moduleName: O,
          hasMultiAppSupport: true,
          hasCustomUrlSupport: true,
          namespace: h,
        },
        module676
      )
    ))._serverTimeOffset = 0;
    l._databaseURL = module676;
    l._transactionHandler = new module707.default(module360.default(l));
    if (c.options.persistence) module675.getNativeModule(module360.default(l)).setPersistence(c.options.persistence);
    setTimeout(function () {
      l._offsetRef = l.ref('.info/serverTimeOffset');

      l._offsetRef.on('value', function (t) {
        l._serverTimeOffset = t.val() || l._serverTimeOffset;
      });
    }, 1);
    return l;
  }

  getServerTime() {
    return new Date(Date.now() + this._serverTimeOffset);
  }

  goOnline() {
    module675.getNativeModule(this).goOnline();
  }

  goOffline() {
    module675.getNativeModule(this).goOffline();
  }

  ref(t) {
    return new module701.default(this, t);
  }

  databaseUrl() {
    return this._databaseURL;
  }
}

export default T;
var E = {
  ServerValue: module2.NativeModules.RNFirebaseDatabase
    ? {
        TIMESTAMP: module2.NativeModules.RNFirebaseDatabase.serverValueTimestamp || {
          '.sv': 'timestamp',
        },
      }
    : {},
  enableLogging: function (t) {
    if (module2.NativeModules[O]) module2.NativeModules[O].enableLogging(t);
  },
};
exports.statics = E;
