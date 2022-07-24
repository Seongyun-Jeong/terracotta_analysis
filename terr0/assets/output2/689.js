var module356 = require('./356'),
  module675 = require('./675'),
  module672 = require('./672');

class l {
  constructor(n) {
    module356.default(this, t);
    this._auth = n;
    this._appVerificationDisabledForTesting = false;
  }

  setAutoRetrievedSmsCodeForPhoneNumber(t, o) {
    return module672.isAndroid ? module675.getNativeModule(this._auth).setAutoRetrievedSmsCodeForPhoneNumber(t, o) : Promise.resolve(null);
  }

  appVerificationDisabledForTesting() {
    return this._appVerificationDisabledForTesting;
  }
}

export default l;
