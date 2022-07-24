var module356 = require('./356'),
  u = (function () {
    function t() {
      throw (module356.default(this, t), new Error('`new GoogleAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module357(t, null, [
      {
        key: 'credential',
        value: function (t, o) {
          return {
            token: t,
            secret: o,
            providerId: 'google.com',
          };
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'google.com';
        },
      },
    ]);
    return t;
  })();

export default u;
