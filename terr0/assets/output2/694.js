var module356 = require('./356'),
  o = (function () {
    function t() {
      throw (module356.default(this, t), new Error('`new OAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module357(t, null, [
      {
        key: 'credential',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'oauth',
          };
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'oauth';
        },
      },
    ]);
    return t;
  })();

export default o;
