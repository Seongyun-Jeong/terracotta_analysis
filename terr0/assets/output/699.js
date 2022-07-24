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

var c = (function (t) {
  function f(t) {
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

  module362.default(f, t);
  module357.default(f, [
    {
      key: 'crash',
      value: function () {
        module675.getNativeModule(this).crash();
      },
    },
    {
      key: 'log',
      value: function (t) {
        if ('string' != typeof t) throw new Error('Invalid parameter type!');
        module675.getNativeModule(this).log(t);
      },
    },
    {
      key: 'recordError',
      value: function (t, o) {
        if ('number' != typeof t || 'string' != typeof o) throw new Error('Invalid parameter type!');
        module675.getNativeModule(this).recordError(t, o);
      },
    },
    {
      key: 'recordCustomError',
      value: function (t, o, n) {
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
      },
    },
    {
      key: 'setBoolValue',
      value: function (t, o) {
        if ('string' != typeof t || 'boolean' != typeof o) throw new Error('Invalid parameter type!');
        module675.getNativeModule(this).setBoolValue(t, o);
      },
    },
    {
      key: 'setFloatValue',
      value: function (t, o) {
        if ('string' != typeof t || 'number' != typeof o) throw new Error('Invalid parameter type!');
        module675.getNativeModule(this).setFloatValue(t, o);
      },
    },
    {
      key: 'setIntValue',
      value: function (t, o) {
        if ('string' != typeof t || 'number' != typeof o) throw new Error('Invalid parameter type!');
        module675.getNativeModule(this).setIntValue(t, o);
      },
    },
    {
      key: 'setStringValue',
      value: function (t, o) {
        if ('string' != typeof t || 'string' != typeof o) throw new Error('Invalid parameter type!');
        module675.getNativeModule(this).setStringValue(t, o);
      },
    },
    {
      key: 'setUserIdentifier',
      value: function (t) {
        if ('string' != typeof t) throw new Error('Invalid parameter type!');
        module675.getNativeModule(this).setUserIdentifier(t);
      },
    },
    {
      key: 'setUserName',
      value: function (t) {
        if ('string' == typeof t) return module675.getNativeModule(this).setUserName(t);
        throw new Error('Invalid parameter type!');
      },
    },
    {
      key: 'setUserEmail',
      value: function (t) {
        if ('string' != typeof t) throw new Error('Invalid parameter type!');
        module675.getNativeModule(this).setUserEmail(t);
      },
    },
    {
      key: 'enableCrashlyticsCollection',
      value: function () {
        module675.getNativeModule(this).enableCrashlyticsCollection();
      },
    },
  ]);
  return f;
})(module676.default);

exports.default = c;
exports.statics = {};
