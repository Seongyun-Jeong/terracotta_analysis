var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module676 = require('./676'),
  module675 = require('./675'),
  module672 = require('./672'),
  f = /^[a-zA-Z0-9_]+$/,
  h = [
    'app_clear_data',
    'app_uninstall',
    'app_update',
    'error',
    'first_open',
    'in_app_purchase',
    'notification_dismiss',
    'notification_foreground',
    'notification_open',
    'notification_receive',
    'os_update',
    'session_start',
    'user_engagement',
  ],
  y = 'RNFirebaseAnalytics';

exports.MODULE_NAME = y;
var E = 'analytics';
exports.NAMESPACE = E;

var _ = (function (t) {
  function c(t) {
    module356.default(this, c);
    return module358.default(
      this,
      module361.default(c).call(this, t, {
        moduleName: y,
        hasMultiAppSupport: false,
        hasCustomUrlSupport: false,
        namespace: E,
      })
    );
  }

  module362.default(c, t);
  module357.default(c, [
    {
      key: 'logEvent',
      value: function (t) {
        var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
        if (!module672.isString(t)) throw new Error("analytics.logEvent(): First argument 'name' is required and must be a string value.");
        if (undefined !== n && !module672.isObject(n)) throw new Error("analytics.logEvent(): Second optional argument 'params' must be an object if provided.");
        if (h.includes(t)) throw new Error("analytics.logEvent(): event name '" + t + "' is a reserved event name and can not be used.");
        if (!f.test(t)) throw new Error("analytics.logEvent(): Event name '" + t + "' is invalid. Names should contain 1 to 32 alphanumeric characters or underscores.");
        if (n && Object.keys(n).length > 25) throw new Error('analytics.logEvent(): Maximum number of parameters exceeded (25).');
        module675.getNativeModule(this).logEvent(t, n);
      },
    },
    {
      key: 'setAnalyticsCollectionEnabled',
      value: function (t) {
        module675.getNativeModule(this).setAnalyticsCollectionEnabled(t);
      },
    },
    {
      key: 'setCurrentScreen',
      value: function (t, n) {
        module675.getNativeModule(this).setCurrentScreen(t, n);
      },
    },
    {
      key: 'setMinimumSessionDuration',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 1e4;
        module675.getNativeModule(this).setMinimumSessionDuration(t);
      },
    },
    {
      key: 'setSessionTimeoutDuration',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 18e5;
        module675.getNativeModule(this).setSessionTimeoutDuration(t);
      },
    },
    {
      key: 'setUserId',
      value: function (t) {
        if (null !== t && !module672.isString(t)) throw new Error('analytics.setUserId(): The supplied userId must be a string value or null.');
        module675.getNativeModule(this).setUserId(t);
      },
    },
    {
      key: 'setUserProperty',
      value: function (t, n) {
        if (null !== n && !module672.isString(n)) throw new Error('analytics.setUserProperty(): The supplied property must be a string value or null.');
        module675.getNativeModule(this).setUserProperty(t, n);
      },
    },
    {
      key: 'setUserProperties',
      value: function (t) {
        var n = this;
        Object.keys(t).forEach(function (s) {
          var o = t[s];
          if (null !== o && !module672.isString(o)) throw new Error("analytics.setUserProperties(): The property with name '" + s + "' must be a string value or null.");
          module675.getNativeModule(n).setUserProperty(s, t[s]);
        });
      },
    },
  ]);
  return c;
})(module676.default);

exports.default = _;
exports.statics = {};
