var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module686 = require('./686'),
  module676 = require('./676'),
  module670 = require('./670'),
  module672 = require('./672'),
  module674 = require('./674'),
  module675 = require('./675'),
  module671 = require('./671'),
  module687 = require('./687'),
  module688 = require('./688'),
  module689 = require('./689'),
  module690 = require('./690'),
  module691 = require('./691'),
  module692 = require('./692'),
  module693 = require('./693'),
  module694 = require('./694'),
  module695 = require('./695'),
  module696 = require('./696'),
  w = ['auth_state_changed', 'auth_id_token_changed', 'phone_auth_state_changed'],
  D = 'RNFirebaseAuth';

exports.MODULE_NAME = D;
var T = 'auth';
exports.NAMESPACE = T;

var L = (function (t) {
  function f(t) {
    var s;
    module356.default(this, f);
    s = module358.default(
      this,
      module361.default(f).call(this, t, {
        events: w,
        moduleName: D,
        hasMultiAppSupport: true,
        hasCustomUrlSupport: false,
        namespace: T,
      })
    );
    var l = module675.getNativeModule(module360.default(s));
    s._user = null;
    s._settings = null;
    s._authResult = false;
    s._languageCode = l.APP_LANGUAGE[t._name] || l.APP_LANGUAGE['[DEFAULT]'];
    if (l.APP_USER[t._name]) s._setUser(l.APP_USER[t._name]);
    module670.SharedEventEmitter.addListener(module670.getAppEventName(module360.default(s), 'auth_state_changed'), function (t) {
      s._setUser(t.user);

      module670.SharedEventEmitter.emit(module670.getAppEventName(module360.default(s), 'onAuthStateChanged'), s._user);
    });
    module670.SharedEventEmitter.addListener(module670.getAppEventName(module360.default(s), 'phone_auth_state_changed'), function (t) {
      var n = 'phone:auth:' + t.requestKey + ':' + t.type;
      module670.SharedEventEmitter.emit(n, t.state);
    });
    module670.SharedEventEmitter.addListener(module670.getAppEventName(module360.default(s), 'auth_id_token_changed'), function (t) {
      s._setUser(t.user);

      module670.SharedEventEmitter.emit(module670.getAppEventName(module360.default(s), 'onIdTokenChanged'), s._user);
    });
    l.addAuthStateListener();
    l.addIdTokenListener();
    return s;
  }

  module362.default(f, t);
  module357.default(f, [
    {
      key: '_setUser',
      value: function (t) {
        this._user = t ? new module686.default(this, t) : null;
        this._authResult = true;
        module670.SharedEventEmitter.emit(module670.getAppEventName(this, 'onUserChanged'), this._user);
        return this._user;
      },
    },
    {
      key: '_setUserCredential',
      value: function (t) {
        var n = new module686.default(this, t.user);
        this._user = n;
        this._authResult = true;
        module670.SharedEventEmitter.emit(module670.getAppEventName(this, 'onUserChanged'), this._user);
        return {
          additionalUserInfo: t.additionalUserInfo,
          user: n,
        };
      },
    },
    {
      key: 'onAuthStateChanged',
      value: function (t) {
        var n = this;
        module674.getLogger(this).info('Creating onAuthStateChanged listener');
        module670.SharedEventEmitter.addListener(module670.getAppEventName(this, 'onAuthStateChanged'), t);
        if (this._authResult) t(this._user || null);
        return function () {
          module674.getLogger(n).info('Removing onAuthStateChanged listener');
          module670.SharedEventEmitter.removeListener(module670.getAppEventName(n, 'onAuthStateChanged'), t);
        };
      },
    },
    {
      key: 'onIdTokenChanged',
      value: function (t) {
        var n = this;
        module674.getLogger(this).info('Creating onIdTokenChanged listener');
        module670.SharedEventEmitter.addListener(module670.getAppEventName(this, 'onIdTokenChanged'), t);
        if (this._authResult) t(this._user || null);
        return function () {
          module674.getLogger(n).info('Removing onIdTokenChanged listener');
          module670.SharedEventEmitter.removeListener(module670.getAppEventName(n, 'onIdTokenChanged'), t);
        };
      },
    },
    {
      key: 'onUserChanged',
      value: function (t) {
        var n = this;
        module674.getLogger(this).info('Creating onUserChanged listener');
        module670.SharedEventEmitter.addListener(module670.getAppEventName(this, 'onUserChanged'), t);
        if (this._authResult) t(this._user || null);
        return function () {
          module674.getLogger(n).info('Removing onUserChanged listener');
          module670.SharedEventEmitter.removeListener(module670.getAppEventName(n, 'onUserChanged'), t);
        };
      },
    },
    {
      key: 'signOut',
      value: function () {
        var t = this;
        return module675
          .getNativeModule(this)
          .signOut()
          .then(function () {
            t._setUser();
          });
      },
    },
    {
      key: 'signInAnonymously',
      value: function () {
        var t = this;
        return module675
          .getNativeModule(this)
          .signInAnonymously()
          .then(function (n) {
            return t._setUserCredential(n);
          });
      },
    },
    {
      key: 'signInAnonymouslyAndRetrieveData',
      value: function () {
        var t = this;
        console.warn('Deprecated signInAnonymouslyAndRetrieveData in favor of signInAnonymously.');
        return module675
          .getNativeModule(this)
          .signInAnonymously()
          .then(function (n) {
            return t._setUserCredential(n);
          });
      },
    },
    {
      key: 'createUserWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        return module675
          .getNativeModule(this)
          .createUserWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'createUserAndRetrieveDataWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        console.warn('Deprecated createUserAndRetrieveDataWithEmailAndPassword in favor of createUserWithEmailAndPassword.');
        return module675
          .getNativeModule(this)
          .createUserWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        return module675
          .getNativeModule(this)
          .signInWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInAndRetrieveDataWithEmailAndPassword',
      value: function (t, n) {
        var s = this;
        console.warn('Deprecated signInAndRetrieveDataWithEmailAndPassword in favor of signInWithEmailAndPassword.');
        return module675
          .getNativeModule(this)
          .signInWithEmailAndPassword(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithCustomToken',
      value: function (t) {
        var n = this;
        return module675
          .getNativeModule(this)
          .signInWithCustomToken(t)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInAndRetrieveDataWithCustomToken',
      value: function (t) {
        var n = this;
        console.warn('Deprecated signInAndRetrieveDataWithCustomToken in favor of signInWithCustomToken.');
        return module675
          .getNativeModule(this)
          .signInWithCustomToken(t)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithCredential',
      value: function (t) {
        var n = this;
        return module675
          .getNativeModule(this)
          .signInWithCredential(t.providerId, t.token, t.secret)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInAndRetrieveDataWithCredential',
      value: function (t) {
        var n = this;
        console.warn('Deprecated signInAndRetrieveDataWithCredential in favor of signInWithCredential.');
        return module675
          .getNativeModule(this)
          .signInWithCredential(t.providerId, t.token, t.secret)
          .then(function (t) {
            return n._setUserCredential(t);
          });
      },
    },
    {
      key: 'signInWithPhoneNumber',
      value: function (t, n) {
        var s = this;
        return module672.isAndroid
          ? module675
              .getNativeModule(this)
              .signInWithPhoneNumber(t, n || false)
              .then(function (t) {
                return new module687.default(s, t.verificationId);
              })
          : module675
              .getNativeModule(this)
              .signInWithPhoneNumber(t)
              .then(function (t) {
                return new module687.default(s, t.verificationId);
              });
      },
    },
    {
      key: 'verifyPhoneNumber',
      value: function (t, n, s) {
        var u = s,
          o = 60;
        if (module672.isBoolean(n)) u = n;
        else o = n;
        return new module688.default(this, t, o, u);
      },
    },
    {
      key: 'sendPasswordResetEmail',
      value: function (t, n) {
        return module675.getNativeModule(this).sendPasswordResetEmail(t, n);
      },
    },
    {
      key: 'sendSignInLinkToEmail',
      value: function (t, n) {
        return module675.getNativeModule(this).sendSignInLinkToEmail(t, n);
      },
    },
    {
      key: 'isSignInWithEmailLink',
      value: function (t) {
        return 'string' == typeof t && (t.includes('mode=signIn') || t.includes('mode%3DsignIn')) && (t.includes('oobCode=') || t.includes('oobCode%3D'));
      },
    },
    {
      key: 'signInWithEmailLink',
      value: function (t, n) {
        var s = this;
        return module675
          .getNativeModule(this)
          .signInWithEmailLink(t, n)
          .then(function (t) {
            return s._setUserCredential(t);
          });
      },
    },
    {
      key: 'confirmPasswordReset',
      value: function (t, n) {
        return module675.getNativeModule(this).confirmPasswordReset(t, n);
      },
    },
    {
      key: 'applyActionCode',
      value: function (t) {
        var n = this;
        return module675
          .getNativeModule(this)
          .applyActionCode(t)
          .then(function (t) {
            n._setUser(t);
          });
      },
    },
    {
      key: 'checkActionCode',
      value: function (t) {
        return module675.getNativeModule(this).checkActionCode(t);
      },
    },
    {
      key: 'fetchSignInMethodsForEmail',
      value: function (t) {
        return module675.getNativeModule(this).fetchSignInMethodsForEmail(t);
      },
    },
    {
      key: 'verifyPasswordResetCode',
      value: function (t) {
        return module675.getNativeModule(this).verifyPasswordResetCode(t);
      },
    },
    {
      key: 'getRedirectResult',
      value: function () {
        throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'getRedirectResult'));
      },
    },
    {
      key: 'setPersistence',
      value: function () {
        throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'setPersistence'));
      },
    },
    {
      key: 'signInWithPopup',
      value: function () {
        throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'signInWithPopup'));
      },
    },
    {
      key: 'signInWithRedirect',
      value: function () {
        throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'signInWithRedirect'));
      },
    },
    {
      key: 'useDeviceLanguage',
      value: function () {
        throw new Error(module671.default.STRINGS.ERROR_UNSUPPORTED_MODULE_METHOD('auth', 'useDeviceLanguage'));
      },
    },
    {
      key: 'languageCode',
      set: function (t) {
        this._languageCode = t;
        module675.getNativeModule(this).setLanguageCode(t);
      },
      get: function () {
        return this._languageCode;
      },
    },
    {
      key: 'settings',
      get: function () {
        if (!this._settings) this._settings = new module689.default(this);
        return this._settings;
      },
    },
    {
      key: 'currentUser',
      get: function () {
        return this._user;
      },
    },
  ]);
  return f;
})(module676.default);

exports.default = L;
var W = {
  EmailAuthProvider: module690.default,
  PhoneAuthProvider: module691.default,
  GoogleAuthProvider: module692.default,
  GithubAuthProvider: module693.default,
  TwitterAuthProvider: module695.default,
  FacebookAuthProvider: module696.default,
  OAuthProvider: module694.default,
  PhoneAuthState: {
    CODE_SENT: 'sent',
    AUTO_VERIFY_TIMEOUT: 'timeout',
    AUTO_VERIFIED: 'verified',
    ERROR: 'error',
  },
};
exports.statics = W;
