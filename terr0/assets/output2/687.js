var module356 = require('./356'),
  module675 = require('./675');

class o {
  constructor(u, f) {
    module356.default(this, t);
    this._auth = u;
    this._verificationId = f;
  }

  confirm(t) {
    var n = this;
    return module675
      .getNativeModule(this._auth)
      ._confirmVerificationCode(t)
      .then(function (t) {
        return n._auth._setUser(t);
      });
  }

  verificationId() {
    return this._verificationId;
  }
}

export default o;
