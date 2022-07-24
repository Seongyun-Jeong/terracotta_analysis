var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module762 = require('./762'),
  module670 = require('./670'),
  module674 = require('./674'),
  module672 = require('./672'),
  module676 = require('./676'),
  module675 = require('./675'),
  N = module2.NativeModules.RNFirebaseStorage,
  f = ['storage_event', 'storage_error'],
  p = 'RNFirebaseStorage';

exports.MODULE_NAME = p;
var C = 'storage';
exports.NAMESPACE = C;

var L = (function (t) {
  function _(t) {
    var module357;
    module356.default(this, _);
    module357 = module358.default(
      this,
      module361.default(_).call(this, t, {
        events: f,
        moduleName: p,
        hasMultiAppSupport: true,
        hasCustomUrlSupport: false,
        namespace: C,
      })
    );
    module670.SharedEventEmitter.addListener(
      module670.getAppEventName(module360.default(module357), 'storage_event'),
      module357._handleStorageEvent.bind(module360.default(module357))
    );
    module670.SharedEventEmitter.addListener(
      module670.getAppEventName(module360.default(module357), 'storage_error'),
      module357._handleStorageEvent.bind(module360.default(module357))
    );
    return module357;
  }

  module362.default(_, t);
  module357.default(_, [
    {
      key: 'ref',
      value: function (t) {
        return new module762.default(this, t);
      },
    },
    {
      key: 'refFromURL',
      value: function (t) {
        return new module762.default(this, 'url::' + t);
      },
    },
    {
      key: 'setMaxOperationRetryTime',
      value: function (t) {
        module675.getNativeModule(this).setMaxOperationRetryTime(t);
      },
    },
    {
      key: 'setMaxUploadRetryTime',
      value: function (t) {
        module675.getNativeModule(this).setMaxUploadRetryTime(t);
      },
    },
    {
      key: 'setMaxDownloadRetryTime',
      value: function (t) {
        module675.getNativeModule(this).setMaxDownloadRetryTime(t);
      },
    },
    {
      key: '_getSubEventName',
      value: function (t, n) {
        return module670.getAppEventName(this, t + '-' + n);
      },
    },
    {
      key: '_handleStorageEvent',
      value: function (t) {
        var n = t.path,
          E = t.eventName,
          s = t.body || {};
        module674.getLogger(this).debug('_handleStorageEvent: ', n, E, s);
        module670.SharedEventEmitter.emit(this._getSubEventName(n, E), s);
      },
    },
    {
      key: '_handleStorageError',
      value: function (t) {
        var n = t.path,
          E = t.eventName,
          s = t.body || {};
        module674.getLogger(this).debug('_handleStorageError ->', t);
        module670.SharedEventEmitter.emit(this._getSubEventName(n, E), s);
      },
    },
    {
      key: '_addListener',
      value: function (t, n, E) {
        module670.SharedEventEmitter.addListener(this._getSubEventName(t, n), E);
      },
    },
    {
      key: '_removeListener',
      value: function (t, n, E) {
        module670.SharedEventEmitter.removeListener(this._getSubEventName(t, n), E);
      },
    },
  ]);
  return _;
})(module676.default);

exports.default = L;
var D = {
  TaskEvent: {
    STATE_CHANGED: 'state_changed',
  },
  TaskState: {
    RUNNING: 'running',
    PAUSED: 'paused',
    SUCCESS: 'success',
    CANCELLED: 'cancelled',
    ERROR: 'error',
  },
  Native: N
    ? {
        MAIN_BUNDLE_PATH: module672.stripTrailingSlash(N.MAIN_BUNDLE_PATH),
        CACHES_DIRECTORY_PATH: module672.stripTrailingSlash(N.CACHES_DIRECTORY_PATH),
        DOCUMENT_DIRECTORY_PATH: module672.stripTrailingSlash(N.DOCUMENT_DIRECTORY_PATH),
        EXTERNAL_DIRECTORY_PATH: module672.stripTrailingSlash(N.EXTERNAL_DIRECTORY_PATH),
        EXTERNAL_STORAGE_DIRECTORY_PATH: module672.stripTrailingSlash(N.EXTERNAL_STORAGE_DIRECTORY_PATH),
        TEMP_DIRECTORY_PATH: module672.stripTrailingSlash(N.TEMP_DIRECTORY_PATH),
        LIBRARY_DIRECTORY_PATH: module672.stripTrailingSlash(N.LIBRARY_DIRECTORY_PATH),
        FILETYPE_REGULAR: module672.stripTrailingSlash(N.FILETYPE_REGULAR),
        FILETYPE_DIRECTORY: module672.stripTrailingSlash(N.FILETYPE_DIRECTORY),
      }
    : {},
};
exports.statics = D;
