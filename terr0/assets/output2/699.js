var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module676 = require('./676'),
  module675 = require('./675'),
  y = 'RNFirebaseCrashlytics';

exports.MODULE_NAME = y;
var v = 'crashlytics';
exports.NAMESPACE = v;

class c {
  constructor(t) {
    module356.default(this, f);
    return module358.default(
      this,
      module361.default(f).call(this, t, {
        moduleName: y,
        hasMultiAppSupport: false,
        hasCustomUrlSupport: false,
        namespace: v,
      })
    );
  }

  crash() {
    module675.getNativeModule(this).crash();
  }

  log(t) {
    if ('string' != typeof t) throw new Error('Invalid parameter type!');
    module675.getNativeModule(this).log(t);
  }

  recordError(t, o) {
    if ('number' != typeof t || 'string' != typeof o) throw new Error('Invalid parameter type!');
    module675.getNativeModule(this).recordError(t, o);
  }

  recordCustomError(t, o, n) {
    if (undefined === n) {
      if ('string' != typeof t || 'string' != typeof o) throw new Error('Invalid parameter type!');
      module675.getNativeModule(this).recordCustomError(t, o, []);
    } else {
      if ('string' != typeof t || 'string' != typeof o || !Array.isArray(n)) throw new Error('Invalid parameter type!');
      var l = true;
      if (
        (n.forEach(function (t) {
          if (!Object.prototype.hasOwnProperty.call(t, 'fileName')) l = false;
        }),
        !l)
      )
        throw new Error('Missing required argument fileName!');
      module675.getNativeModule(this).recordCustomError(t, o, n);
    }
  }

  setBoolValue(t, o) {
    if ('string' != typeof t || 'boolean' != typeof o) throw new Error('Invalid parameter type!');
    module675.getNativeModule(this).setBoolValue(t, o);
  }

  setFloatValue(t, o) {
    if ('string' != typeof t || 'number' != typeof o) throw new Error('Invalid parameter type!');
    module675.getNativeModule(this).setFloatValue(t, o);
  }

  setIntValue(t, o) {
    if ('string' != typeof t || 'number' != typeof o) throw new Error('Invalid parameter type!');
    module675.getNativeModule(this).setIntValue(t, o);
  }

  setStringValue(t, o) {
    if ('string' != typeof t || 'string' != typeof o) throw new Error('Invalid parameter type!');
    module675.getNativeModule(this).setStringValue(t, o);
  }

  setUserIdentifier(t) {
    if ('string' != typeof t) throw new Error('Invalid parameter type!');
    module675.getNativeModule(this).setUserIdentifier(t);
  }

  setUserName(t) {
    if ('string' == typeof t) return module675.getNativeModule(this).setUserName(t);
    throw new Error('Invalid parameter type!');
  }

  setUserEmail(t) {
    if ('string' != typeof t) throw new Error('Invalid parameter type!');
    module675.getNativeModule(this).setUserEmail(t);
  }

  enableCrashlyticsCollection() {
    module675.getNativeModule(this).enableCrashlyticsCollection();
  }
}

export default c;
export const statics = {};
