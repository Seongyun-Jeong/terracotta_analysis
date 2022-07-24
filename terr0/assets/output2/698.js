var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module674 = require('./674'),
  module676 = require('./676'),
  module675 = require('./675'),
  h = 'RNFirebaseRemoteConfig';

exports.MODULE_NAME = h;
var V = 'config';
exports.NAMESPACE = V;

class M {
  constructor(t) {
    var l;
    module356.default(this, f);
    (l = module358.default(
      this,
      module361.default(f).call(this, t, {
        moduleName: h,
        hasMultiAppSupport: false,
        hasCustomUrlSupport: false,
        namespace: V,
      })
    ))._developerModeEnabled = false;
    return l;
  }

  _nativeValueToJS(t) {
    return {
      source: t.source,
      val: function () {
        return null === t.boolValue || ('true' !== t.stringValue && 'false' !== t.stringValue && null !== t.stringValue)
          ? null === t.numberValue || undefined === t.numberValue || (null != t.stringValue && '' !== t.stringValue && t.numberValue.toString() !== t.stringValue)
            ? t.dataValue === t.stringValue || (null != t.stringValue && '' !== t.stringValue)
              ? t.stringValue
              : t.dataValue
            : t.numberValue
          : t.boolValue;
      },
    };
  }

  enableDeveloperMode() {
    if (!this._developerModeEnabled) {
      module674.getLogger(this).debug('Enabled developer mode');
      module675.getNativeModule(this).enableDeveloperMode();
      this._developerModeEnabled = true;
    }
  }

  fetch(t) {
    if (undefined !== t) {
      module674.getLogger(this).debug('Fetching remote config data with expiration ' + t.toString());
      return module675.getNativeModule(this).fetchWithExpirationDuration(t);
    } else {
      module674.getLogger(this).debug('Fetching remote config data');
      return module675.getNativeModule(this).fetch();
    }
  }

  activateFetched() {
    module674.getLogger(this).debug('Activating remote config');
    return module675.getNativeModule(this).activateFetched();
  }

  getValue(t) {
    return module675
      .getNativeModule(this)
      .getValue(t || '')
      .then(this._nativeValueToJS);
  }

  getValues(t) {
    var u = this;
    return module675
      .getNativeModule(this)
      .getValues(t || [])
      .then(function (l) {
        for (var n = {}, o = 0, s = t.length; o < s; o++) n[t[o]] = u._nativeValueToJS(l[o]);

        return n;
      });
  }

  getKeysByPrefix(t) {
    return module675.getNativeModule(this).getKeysByPrefix(t);
  }

  setDefaults(t) {
    module675.getNativeModule(this).setDefaults(t);
  }

  setDefaultsFromResource(t) {
    module675.getNativeModule(this).setDefaultsFromResource(t);
  }
}

export default M;
export const statics = {};
