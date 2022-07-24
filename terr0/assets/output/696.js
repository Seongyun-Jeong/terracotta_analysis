var module356 = require('./356'),
  u = (function () {
    function t() {
      throw (module356.default(this, t), new Error('`new FacebookAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module357.default(t, null, [
      {
        key: 'credential',
        value: function (t) {
          return {
            token: t,
            secret: '',
            providerId: 'facebook.com',
          };
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'facebook.com';
        },
      },
    ]);
    return t;
  })();

exports.default = u;
