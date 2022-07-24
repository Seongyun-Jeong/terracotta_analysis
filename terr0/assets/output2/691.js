var module356 = require('./356'),
  u = (function () {
    function n() {
      throw (module356.default(this, n), new Error('`new PhoneAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module357(n, null, [
      {
        key: 'credential',
        value: function (n, t) {
          return {
            token: n,
            secret: t,
            providerId: 'phone',
          };
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'phone';
        },
      },
    ]);
    return n;
  })();

export default u;
