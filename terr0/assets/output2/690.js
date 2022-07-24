var module356 = require('./356'),
  o = (function () {
    function t() {
      throw (module356.default(this, t), new Error('`new EmailAuthProvider()` is not supported on the native Firebase SDKs.'));
    }

    module357(t, null, [
      {
        key: 'credential',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'password',
          };
        },
      },
      {
        key: 'credentialWithLink',
        value: function (t, n) {
          return {
            token: t,
            secret: n,
            providerId: 'emailLink',
          };
        },
      },
      {
        key: 'EMAIL_LINK_SIGN_IN_METHOD',
        get: function () {
          return 'emailLink';
        },
      },
      {
        key: 'EMAIL_PASSWORD_SIGN_IN_METHOD',
        get: function () {
          return 'password';
        },
      },
      {
        key: 'PROVIDER_ID',
        get: function () {
          return 'password';
        },
      },
    ]);
    return t;
  })();

export default o;
