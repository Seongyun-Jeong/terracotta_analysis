var module356 = require('./356'),
  u = (function () {
    function t() {
      throw (module356.default(this, t), new Error('`new TwitterAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module357(t, null, [
      {
        key: 'credential',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'twitter.com',
          };
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'twitter.com';
        },
      },
    ]);
    return t;
  })();

export default u;
