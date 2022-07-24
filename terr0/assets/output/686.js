var module51 = require('./51'),
  module356 = require('./356'),
  module671 = require('./671'),
  module675 = require('./675'),
  s = (function () {
    function t(n, o) {
      module356.default(this, t);
      this._auth = n;
      this._user = o;
    }

    module357.default(t, [
      {
        key: 'delete',
        value: function () {
          var t = this;
          return module675
            .getNativeModule(this._auth)
            .delete()
            .then(function () {
              t._auth._setUser();
            });
        },
      },
      {
        key: 'getIdToken',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
          return module675.getNativeModule(this._auth).getIdToken(t);
        },
      },
      {
        key: 'getIdTokenResult',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
          return module675.getNativeModule(this._auth).getIdTokenResult(t);
        },
      },
      {
        key: 'linkWithCredential',
        value: function (t) {
          var n = this;
          return module675
            .getNativeModule(this._auth)
            .linkWithCredential(t.providerId, t.token, t.secret)
            .then(function (t) {
              return n._auth._setUserCredential(t);
            });
        },
      },
      {
        key: 'linkAndRetrieveDataWithCredential',
        value: function (t) {
          var n = this;
          console.warn('Deprecated linkAndRetrieveDataWithCredential in favor of linkWithCredential.');
          return module675
            .getNativeModule(this._auth)
            .linkWithCredential(t.providerId, t.token, t.secret)
            .then(function (t) {
              return n._auth._setUserCredential(t);
            });
        },
      },
      {
        key: 'reauthenticateWithCredential',
        value: function (t) {
          var n = this;
          return module675
            .getNativeModule(this._auth)
            .reauthenticateWithCredential(t.providerId, t.token, t.secret)
            .then(function (t) {
              return n._auth._setUserCredential(t);
            });
        },
      },
      {
        key: 'reauthenticateAndRetrieveDataWithCredential',
        value: function (t) {
          var n = this;
          console.warn('Deprecated reauthenticateAndRetrieveDataWithCredential in favor of reauthenticateWithCredential.');
          return module675
            .getNativeModule(this._auth)
            .reauthenticateWithCredential(t.providerId, t.token, t.secret)
            .then(function (t) {
              return n._auth._setUserCredential(t);
            });
        },
      },
      {
        key: 'reload',
        value: function () {
          var t = this;
          return module675
            .getNativeModule(this._auth)
            .reload()
            .then(function (n) {
              t._auth._setUser(n);
            });
        },
      },
      {
        key: 'sendEmailVerification',
        value: function (t) {
          var n = this;
          return module675
            .getNativeModule(this._auth)
            .sendEmailVerification(t)
            .then(function (t) {
              n._auth._setUser(t);
            });
        },
      },
      {
        key: 'toJSON',
        value: function () {
          return module51.default({}, this._user);
        },
      },
      {
        key: 'unlink',
        value: function (t) {
          var n = this;
          return module675
            .getNativeModule(this._auth)
            .unlink(t)
            .then(function (t) {
              return n._auth._setUser(t);
            });
        },
      },
      {
        key: 'updateEmail',
        value: function (t) {
          var n = this;
          return module675
            .getNativeModule(this._auth)
            .updateEmail(t)
            .then(function (t) {
              n._auth._setUser(t);
            });
        },
      },
      {
        key: 'updatePassword',
        value: function (t) {
          var n = this;
          return module675
            .getNativeModule(this._auth)
            .updatePassword(t)
            .then(function (t) {
              n._auth._setUser(t);
            });
        },
      },
      {
        key: 'updatePhoneNumber',
        value: function (t) {
          var n = this;
          return module675
            .getNativeModule(this._auth)
            .updatePhoneNumber(t.providerId, t.token, t.secret)
            .then(function (t) {
              n._auth._setUser(t);
            });
        },
      },
      {
        key: 'updateProfile',
        value: function () {
          var t = this,
            n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
          return module675
            .getNativeModule(this._auth)
            .updateProfile(n)
            .then(function (n) {
              t._auth._setUser(n);
            });
        },
      },
      {
        key: 'linkWithPhoneNumber',
        value: function () {
          throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'linkWithPhoneNumber'));
        },
      },
      {
        key: 'linkWithPopup',
        value: function () {
          throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'linkWithPopup'));
        },
      },
      {
        key: 'linkWithRedirect',
        value: function () {
          throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'linkWithRedirect'));
        },
      },
      {
        key: 'reauthenticateWithPhoneNumber',
        value: function () {
          throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'reauthenticateWithPhoneNumber'));
        },
      },
      {
        key: 'reauthenticateWithPopup',
        value: function () {
          throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'reauthenticateWithPopup'));
        },
      },
      {
        key: 'reauthenticateWithRedirect',
        value: function () {
          throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_METHOD('User', 'reauthenticateWithRedirect'));
        },
      },
      {
        key: 'displayName',
        get: function () {
          return this._user.displayName || null;
        },
      },
      {
        key: 'email',
        get: function () {
          return this._user.email || null;
        },
      },
      {
        key: 'emailVerified',
        get: function () {
          return this._user.emailVerified || false;
        },
      },
      {
        key: 'isAnonymous',
        get: function () {
          return this._user.isAnonymous || false;
        },
      },
      {
        key: 'metadata',
        get: function () {
          return this._user.metadata;
        },
      },
      {
        key: 'phoneNumber',
        get: function () {
          return this._user.phoneNumber || null;
        },
      },
      {
        key: 'photoURL',
        get: function () {
          return this._user.photoURL || null;
        },
      },
      {
        key: 'providerData',
        get: function () {
          return this._user.providerData;
        },
      },
      {
        key: 'providerId',
        get: function () {
          return this._user.providerId;
        },
      },
      {
        key: 'uid',
        get: function () {
          return this._user.uid;
        },
      },
      {
        key: 'refreshToken',
        get: function () {
          throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_CLASS_PROPERTY('User', 'refreshToken'));
        },
      },
    ]);
    return t;
  })();

exports.default = s;
