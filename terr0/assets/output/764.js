var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module671 = require('./671'),
  module672 = require('./672'),
  module676 = require('./676'),
  module765 = require('./765'),
  P = module2.NativeModules.RNFirebase,
  p = 'RNFirebaseUtils';

exports.MODULE_NAME = p;
var O = 'utils';
exports.NAMESPACE = O;

var A = (function (l) {
  function v(l) {
    module356.default(this, v);
    return module358.default(
      this,
      module361.default(v).call(this, l, {
        moduleName: p,
        hasMultiAppSupport: false,
        hasCustomUrlSupport: false,
        namespace: O,
      })
    );
  }

  module362.default(v, l);
  module357.default(v, [
    {
      key: 'checkPlayServicesAvailability',
      value: function () {
        if (!module672.isIOS) {
          var l = this.playServicesAvailability.status;
          if (!this.playServicesAvailability.isAvailable)
            if (module671.default.OPTIONS.promptOnMissingPlayServices && this.playServicesAvailability.isUserResolvableError) this.promptForPlayServices();
            else {
              var t = module671.default.STRINGS.ERROR_PLAY_SERVICES(l);

              if (module671.default.OPTIONS.errorOnMissingPlayServices) {
                if (2 !== l) throw new Error(t);
                console.warn(t);
              } else console.warn(t);
            }
        }
      },
    },
    {
      key: 'getPlayServicesStatus',
      value: function () {
        return module672.isIOS ? Promise.resolve(null) : P.getPlayServicesStatus();
      },
    },
    {
      key: 'promptForPlayServices',
      value: function () {
        return module672.isIOS ? null : P.promptForPlayServices();
      },
    },
    {
      key: 'resolutionForPlayServices',
      value: function () {
        return module672.isIOS ? null : P.resolutionForPlayServices();
      },
    },
    {
      key: 'makePlayServicesAvailable',
      value: function () {
        return module672.isIOS ? null : P.makePlayServicesAvailable();
      },
    },
    {
      key: 'database',
      get: function () {
        return module765.default;
      },
    },
    {
      key: 'logLevel',
      set: function (l) {
        module671.default.OPTIONS.logLevel = l;
      },
    },
    {
      key: 'playServicesAvailability',
      get: function () {
        return (
          P.playServicesAvailability || {
            isAvailable: true,
            status: 0,
          }
        );
      },
    },
    {
      key: 'errorOnMissingPlayServices',
      set: function (l) {
        module671.default.OPTIONS.errorOnMissingPlayServices = l;
      },
    },
    {
      key: 'promptOnMissingPlayServices',
      set: function (l) {
        module671.default.OPTIONS.promptOnMissingPlayServices = l;
      },
    },
  ]);
  return v;
})(module676.default);

exports.default = A;
exports.statics = {};
