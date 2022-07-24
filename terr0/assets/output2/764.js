import module2 from './2';

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

class A {
  constructor(l) {
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

  checkPlayServicesAvailability() {
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
  }

  getPlayServicesStatus() {
    return module672.isIOS ? Promise.resolve(null) : P.getPlayServicesStatus();
  }

  promptForPlayServices() {
    return module672.isIOS ? null : P.promptForPlayServices();
  }

  resolutionForPlayServices() {
    return module672.isIOS ? null : P.resolutionForPlayServices();
  }

  makePlayServicesAvailable() {
    return module672.isIOS ? null : P.makePlayServicesAvailable();
  }

  database() {
    return module765.default;
  }

  logLevel(l) {
    module671.default.OPTIONS.logLevel = l;
  }

  playServicesAvailability() {
    return (
      P.playServicesAvailability || {
        isAvailable: true,
        status: 0,
      }
    );
  }

  errorOnMissingPlayServices(l) {
    module671.default.OPTIONS.errorOnMissingPlayServices = l;
  }

  promptOnMissingPlayServices(l) {
    module671.default.OPTIONS.promptOnMissingPlayServices = l;
  }
}

export default A;
export const statics = {};
