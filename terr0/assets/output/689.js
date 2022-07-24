var module356 = require('./356'),
  module675 = require('./675'),
  module672 = require('./672'),
  l = (function () {
    function t(n) {
      module356.default(this, t);
      this._auth = n;
      this._appVerificationDisabledForTesting = false;
    }

    module357.default(t, [
      {
        key: 'setAutoRetrievedSmsCodeForPhoneNumber',
        value: function (t, o) {
          return module672.isAndroid ? module675.getNativeModule(this._auth).setAutoRetrievedSmsCodeForPhoneNumber(t, o) : Promise.resolve(null);
        },
      },
      {
        key: 'appVerificationDisabledForTesting',
        get: function () {
          return this._appVerificationDisabledForTesting;
        },
        set: function (t) {
          if (module672.isIOS) {
            this._appVerificationDisabledForTesting = t;
            module675.getNativeModule(this._auth).setAppVerificationDisabledForTesting(t);
          }
        },
      },
    ]);
    return t;
  })();

exports.default = l;
