var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module676 = require('./676'),
  module672 = require('./672'),
  module675 = require('./675'),
  module667 = require('./667'),
  module734 = require('./734'),
  p = 'functions';

exports.NAMESPACE = p;
var D = 'RNFirebaseFunctions';

function _(t) {
  if (module672.isObject(t) && t.__error) {
    var n = t.code,
      u = t.message,
      o = t.details;
    return Promise.reject(new module734.default(O.HttpsErrorCode[n] || O.HttpsErrorCode.UNKNOWN, u, o));
  }

  return Promise.resolve(t);
}

exports.MODULE_NAME = D;

class v {
  constructor(t, u) {
    module356.default(this, E);
    var l = t,
      N = u || 'us-central1';

    if ('string' == typeof l) {
      N = l;
      l = module667.default.app();
    }

    return module358.default(
      this,
      module361.default(E).call(
        this,
        l,
        {
          hasMultiAppSupport: true,
          hasCustomUrlSupport: false,
          hasRegionsSupport: true,
          namespace: p,
          moduleName: D,
        },
        N
      )
    );
  }

  httpsCallable(t) {
    var n = this;
    return function (u) {
      return module675
        .getNativeModule(n)
        .httpsCallable(t, {
          data: u,
        })
        .then(_);
    };
  }

  useFunctionsEmulator(t) {
    return module675.getNativeModule(this).useFunctionsEmulator(t);
  }
}

export default v;
var O = {
  HttpsErrorCode: {
    OK: 'ok',
    CANCELLED: 'cancelled',
    UNKNOWN: 'unknown',
    INVALID_ARGUMENT: 'invalid-argument',
    DEADLINE_EXCEEDED: 'deadline-exceeded',
    NOT_FOUND: 'not-found',
    ALREADY_EXISTS: 'already-exists',
    PERMISSION_DENIED: 'permission-denied',
    UNAUTHENTICATED: 'unauthenticated',
    RESOURCE_EXHAUSTED: 'resource-exhausted',
    FAILED_PRECONDITION: 'failed-precondition',
    ABORTED: 'aborted',
    OUT_OF_RANGE: 'out-of-range',
    UNIMPLEMENTED: 'unimplemented',
    INTERNAL: 'internal',
    UNAVAILABLE: 'unavailable',
    DATA_LOSS: 'data-loss',
  },
};
exports.statics = O;
