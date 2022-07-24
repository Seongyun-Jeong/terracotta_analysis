var module356 = require('./356'),
  module675 = require('./675'),
  o = (function () {
    function t(u, f) {
      module356.default(this, t);
      this._auth = u;
      this._verificationId = f;
    }

    module357.default(t, [
      {
        key: 'confirm',
        value: function (t) {
          var n = this;
          return module675
            .getNativeModule(this._auth)
            ._confirmVerificationCode(t)
            .then(function (t) {
              return n._auth._setUser(t);
            });
        },
      },
      {
        key: 'verificationId',
        get: function () {
          return this._verificationId;
        },
      },
    ]);
    return t;
  })();

exports.default = o;
