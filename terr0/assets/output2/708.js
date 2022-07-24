require('./732');

import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module670 = require('./670'),
  module676 = require('./676'),
  module709 = require('./709'),
  module716 = require('./716'),
  module712 = require('./712'),
  module725 = require('./725'),
  module727 = require('./727'),
  module723 = require('./723'),
  module728 = require('./728'),
  module730 = require('./730'),
  module731 = require('./731'),
  module729 = require('./729'),
  module672 = require('./672'),
  module675 = require('./675'),
  M = ['firestore_transaction_event', 'firestore_document_sync_event', 'firestore_collection_sync_event'],
  F = ['debug', 'error', 'silent'],
  j = 'RNFirebaseFirestore';

exports.MODULE_NAME = j;
var B = 'firestore';
exports.NAMESPACE = B;

class D {
  constructor(t) {
    var s;
    module356.default(this, f);
    (s = module358.default(
      this,
      module361.default(f).call(this, t, {
        events: M,
        moduleName: j,
        hasMultiAppSupport: true,
        hasCustomUrlSupport: false,
        namespace: B,
      })
    ))._referencePath = new module728.default([]);
    s._transactionHandler = new module731.default(module360.default(s));
    module670.SharedEventEmitter.addListener(
      module670.getAppEventName(module360.default(s), 'firestore_collection_sync_event'),
      s._onCollectionSyncEvent.bind(module360.default(s))
    );
    module670.SharedEventEmitter.addListener(module670.getAppEventName(module360.default(s), 'firestore_document_sync_event'), s._onDocumentSyncEvent.bind(module360.default(s)));
    return s;
  }

  batch() {
    return new module730.default(this);
  }

  collection(t) {
    var n = this._referencePath.child(t);

    if (!n.isCollection) throw new Error('Argument "collectionPath" must point to a collection.');
    return new module709.default(this, n);
  }

  disableNetwork() {
    return module675.getNativeModule(this).disableNetwork();
  }

  doc(t) {
    var n = this._referencePath.child(t);

    if (!n.isDocument) throw new Error('Argument "documentPath" must point to a document.');
    return new module716.default(this, n);
  }

  enableNetwork() {
    return module675.getNativeModule(this).enableNetwork();
  }

  runTransaction(t) {
    return this._transactionHandler._add(t);
  }

  settings(t) {
    if (!module672.isObject(t)) return Promise.reject(new Error('Firestore.settings failed: settings must be an object.'));
    if (module672.hop(t, 'host') && !module672.isString(t.host)) return Promise.reject(new Error('Firestore.settings failed: settings.host must be a string.'));
    if (module672.hop(t, 'persistence') && !module672.isBoolean(t.persistence))
      return Promise.reject(new Error('Firestore.settings failed: settings.persistence must be boolean.'));

    if (module672.hop(t, 'cacheSizeBytes')) {
      if (!module672.isNumber(t.cacheSizeBytes)) return Promise.reject(new Error('Firestore.settings failed: settings.cacheSizeBytes must be number.'));
      if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
        return Promise.reject(new Error('Firestore.settings failed: settings.cacheSizeBytes must be set to 1048576 at least bytes.'));
    }

    return module672.hop(t, 'ssl') && !module672.isBoolean(t.ssl)
      ? Promise.reject(new Error('Firestore.settings failed: settings.ssl must be boolean.'))
      : module672.hop(t, 'timestampsInSnapshots') && !module672.isBoolean(t.timestampsInSnapshots)
      ? Promise.reject(new Error('Firestore.settings failed: settings.timestampsInSnapshots must be boolean.'))
      : module675.getNativeModule(this).settings(t);
  }

  enablePersistence() {
    console.warn('Due to restrictions in the native SDK, persistence must be configured in firebase.firestore().settings()');
    return Promise.resolve();
  }

  _onCollectionSyncEvent(t) {
    if (t.error) module670.SharedEventEmitter.emit(module670.getAppEventName(this, 'onQuerySnapshotError:' + t.listenerId), t);
    else module670.SharedEventEmitter.emit(module670.getAppEventName(this, 'onQuerySnapshot:' + t.listenerId), t.querySnapshot);
  }

  _onDocumentSyncEvent(t) {
    if (t.error) module670.SharedEventEmitter.emit(module670.getAppEventName(this, 'onDocumentSnapshotError:' + t.listenerId), t);
    else module670.SharedEventEmitter.emit(module670.getAppEventName(this, 'onDocumentSnapshot:' + t.listenerId), t.documentSnapshot);
  }
}

export default D;
var I = {
  Blob: module723.default,
  FieldPath: module712.default,
  FieldValue: module725.default,
  GeoPoint: module727.default,
  Timestamp: module729.default,
  CACHE_SIZE_UNLIMITED: -1,
  enableLogging: function (t) {
    console.warn('firebase.firestore.enableLogging is deprecated, use firebase.firestore().setLogLevel instead.');
    this.setLogLevel(t ? 'debug' : 'silent');
  },
  setLogLevel: function (t) {
    if (-1 === F.indexOf(t)) throw new Error('Argument `logLevel` must be one of: `debug`, `error`, `silent`');
    if (module2.NativeModules[j]) module2.NativeModules[j].setLogLevel(t);
  },
};
exports.statics = I;
