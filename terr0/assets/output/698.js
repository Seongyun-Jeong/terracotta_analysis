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

var M = (function (t) {
  function f(t) {
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

  module362.default(f, t);
  module357.default(f, [
    {
      key: '_nativeValueToJS',
      value: function (t) {
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
      },
    },
    {
      key: 'enableDeveloperMode',
      value: function () {
        if (!this._developerModeEnabled) {
          module674.getLogger(this).debug('Enabled developer mode');
          module675.getNativeModule(this).enableDeveloperMode();
          this._developerModeEnabled = true;
        }
      },
    },
    {
      key: 'fetch',
      value: function (t) {
        if (undefined !== t) {
          module674.getLogger(this).debug('Fetching remote config data with expiration ' + t.toString());
          return module675.getNativeModule(this).fetchWithExpirationDuration(t);
        } else {
          module674.getLogger(this).debug('Fetching remote config data');
          return module675.getNativeModule(this).fetch();
        }
      },
    },
    {
      key: 'activateFetched',
      value: function () {
        module674.getLogger(this).debug('Activating remote config');
        return module675.getNativeModule(this).activateFetched();
      },
    },
    {
      key: 'getValue',
      value: function (t) {
        return module675
          .getNativeModule(this)
          .getValue(t || '')
          .then(this._nativeValueToJS);
      },
    },
    {
      key: 'getValues',
      value: function (t) {
        var u = this;
        return module675
          .getNativeModule(this)
          .getValues(t || [])
          .then(function (l) {
            for (var n = {}, o = 0, s = t.length; o < s; o++) n[t[o]] = u._nativeValueToJS(l[o]);

            return n;
          });
      },
    },
    {
      key: 'getKeysByPrefix',
      value: function (t) {
        return module675.getNativeModule(this).getKeysByPrefix(t);
      },
    },
    {
      key: 'setDefaults',
      value: function (t) {
        module675.getNativeModule(this).setDefaults(t);
      },
    },
    {
      key: 'setDefaultsFromResource',
      value: function (t) {
        module675.getNativeModule(this).setDefaultsFromResource(t);
      },
    },
  ]);
  return f;
})(module676.default);

exports.default = M;
exports.statics = {};
