var module51 = require('./51'),
  module356 = require('./356'),
  module671 = require('./671'),
  module675 = require('./675');

class s {
  constructor(n, o) {
    module356.default(this, t);
    this._auth = n;
    this._user = o;
  }

  delete() {
    var t = this;
    return module675
      .getNativeModule(this._auth)
      .delete()
      .then(function () {
        t._auth._setUser();
      });
  }

  getIdToken() {
    var t = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
    return module675.getNativeModule(this._auth).getIdToken(t);
  }

  getIdTokenResult() {
    var t = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
    return module675.getNativeModule(this._auth).getIdTokenResult(t);
  }

  linkWithCredential(t) {
    var n = this;
    return module675
      .getNativeModule(this._auth)
      .linkWithCredential(t.providerId, t.token, t.secret)
      .then(function (t) {
        return n._auth._setUserCredential(t);
      });
  }

  linkAndRetrieveDataWithCredential(t) {
    var n = this;
    console.warn('Deprecated linkAndRetrieveDataWithCredential in favor of linkWithCredential.');
    return module675
      .getNativeModule(this._auth)
      .linkWithCredential(t.providerId, t.token, t.secret)
      .then(function (t) {
        return n._auth._setUserCredential(t);
      });
  }

  reauthenticateWithCredential(t) {
    var n = this;
    return module675
      .getNativeModule(this._auth)
      .reauthenticateWithCredential(t.providerId, t.token, t.secret)
      .then(function (t) {
        return n._auth._setUserCredential(t);
      });
  }

  reauthenticateAndRetrieveDataWithCredential(t) {
    var n = this;
    console.warn('Deprecated reauthenticateAndRetrieveDataWithCredential in favor of reauthenticateWithCredential.');
    return module675
      .getNativeModule(this._auth)
      .reauthenticateWithCredential(t.providerId, t.token, t.secret)
      .then(function (t) {
        return n._auth._setUserCredential(t);
      });
  }

  reload() {
    var t = this;
    return module675
      .getNativeModule(this._auth)
      .reload()
      .then(function (n) {
        t._auth._setUser(n);
      });
  }

  sendEmailVerification(t) {
    var n = this;
    return module675
      .getNativeModule(this._auth)
      .sendEmailVerification(t)
      .then(function (t) {
        n._auth._setUser(t);
      });
  }

  toJSON() {
    return module51.default({}, this._user);
  }

  unlink(t) {
    var n = this;
    return module675
      .getNativeModule(this._auth)
      .unlink(t)
      .then(function (t) {
        return n._auth._setUser(t);
      });
  }

  updateEmail(t) {
    var n = this;
    return module675
      .getNativeModule(this._auth)
      .updateEmail(t)
      .then(function (t) {
        n._auth._setUser(t);
      });
  }

  updatePassword(t) {
    var n = this;
    return module675
      .getNativeModule(this._auth)
      .updatePassword(t)
      .then(function (t) {
        n._auth._setUser(t);
      });
  }

  updatePhoneNumber(t) {
    var n = this;
    return module675
      .getNativeModule(this._auth)
      .updatePhoneNumber(t.providerId, t.token, t.secret)
      .then(function (t) {
        n._auth._setUser(t);
      });
  }

  updateProfile() {
    var t = this,
      n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    return module675
      .getNativeModule(this._auth)
      .updateProfile(n)
      .then(function (n) {
        t._auth._setUser(n);
      });
  }

  linkWithPhoneNumber() {
    throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'linkWithPhoneNumber'));
  }

  linkWithPopup() {
    throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'linkWithPopup'));
  }

  linkWithRedirect() {
    throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'linkWithRedirect'));
  }

  reauthenticateWithPhoneNumber() {
    throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'reauthenticateWithPhoneNumber'));
  }

  reauthenticateWithPopup() {
    throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'reauthenticateWithPopup'));
  }

  reauthenticateWithRedirect() {
    throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'reauthenticateWithRedirect'));
  }

  displayName() {
    return this._user.displayName || null;
  }

  email() {
    return this._user.email || null;
  }

  emailVerified() {
    return this._user.emailVerified || false;
  }

  isAnonymous() {
    return this._user.isAnonymous || false;
  }

  metadata() {
    return this._user.metadata;
  }

  phoneNumber() {
    return this._user.phoneNumber || null;
  }

  photoURL() {
    return this._user.photoURL || null;
  }

  providerData() {
    return this._user.providerData;
  }

  providerId() {
    return this._user.providerId;
  }

  uid() {
    return this._user.uid;
  }

  refreshToken() {
    throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_PROPERTY('User', 'refreshToken'));
  }
}

export default s;
