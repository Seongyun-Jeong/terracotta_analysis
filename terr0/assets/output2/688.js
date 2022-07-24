var module356 = require('./356'),
  module671 = require('./671'),
  module670 = require('./670'),
  module672 = require('./672'),
  module675 = require('./675');

class v {
  constructor(s, o, u, v) {
    module356.default(this, t);
    this._auth = s;
    this._reject = null;
    this._resolve = null;
    this._promise = null;
    this._credential = null;
    this._timeout = u || 20;
    this._forceResending = v || false;
    this._phoneAuthRequestKey = module672.generatePushID();
    this._internalEvents = {
      codeSent: 'phone:auth:' + this._phoneAuthRequestKey + ':onCodeSent',
      verificationFailed: 'phone:auth:' + this._phoneAuthRequestKey + ':onVerificationFailed',
      verificationComplete: 'phone:auth:' + this._phoneAuthRequestKey + ':onVerificationComplete',
      codeAutoRetrievalTimeout: 'phone:auth:' + this._phoneAuthRequestKey + ':onCodeAutoRetrievalTimeout',
    };
    this._publicEvents = {
      error: 'phone:auth:' + this._phoneAuthRequestKey + ':error',
      event: 'phone:auth:' + this._phoneAuthRequestKey + ':event',
      success: 'phone:auth:' + this._phoneAuthRequestKey + ':success',
    };

    this._subscribeToEvents();

    if (module672.isAndroid) module675.getNativeModule(this._auth).verifyPhoneNumber(o, this._phoneAuthRequestKey, this._timeout, this._forceResending);
    if (module672.isIOS) module675.getNativeModule(this._auth).verifyPhoneNumber(o, this._phoneAuthRequestKey);
  }

  _subscribeToEvents() {
    for (var t = Object.keys(this._internalEvents), n = 0, s = t.length; n < s; n++) {
      var o = t[n];
      module670.SharedEventEmitter.once(this._internalEvents[o], this['_' + o + 'Handler'].bind(this));
    }
  }

  _addUserObserver(t) {
    module670.SharedEventEmitter.addListener(this._publicEvents.event, t);
  }

  _emitToObservers(t) {
    module670.SharedEventEmitter.emit(this._publicEvents.event, t);
  }

  _emitToErrorCb(t) {
    var n = t.error;
    if (this._reject) this._reject(n);
    module670.SharedEventEmitter.emit(this._publicEvents.error, n);
  }

  _emitToSuccessCb(t) {
    if (this._resolve) this._resolve(t);
    module670.SharedEventEmitter.emit(this._publicEvents.success, t);
  }

  _removeAllListeners() {
    var t = this;
    setTimeout(function () {
      Object.values(t._internalEvents).forEach(function (t) {
        module670.SharedEventEmitter.removeAllListeners(t);
      });
      Object.values(t._publicEvents).forEach(function (t) {
        module670.SharedEventEmitter.removeAllListeners(t);
      });
    }, 0);
  }

  _promiseDeferred() {
    var t = this;
    if (!this._promise)
      this._promise = new Promise(function (n, s) {
        t._resolve = function (s) {
          t._resolve = null;
          return n(s);
        };

        t._reject = function (n) {
          t._reject = null;
          return s(n);
        };
      });
  }

  _codeSentHandler(t) {
    var n = {
      verificationId: t.verificationId,
      code: null,
      error: null,
      state: 'sent',
    };

    this._emitToObservers(n);

    if (module672.isIOS) this._emitToSuccessCb(n);
  }

  _codeAutoRetrievalTimeoutHandler(t) {
    var n = {
      verificationId: t.verificationId,
      code: null,
      error: null,
      state: 'timeout',
    };

    this._emitToObservers(n);

    this._emitToSuccessCb(n);
  }

  _verificationCompleteHandler(t) {
    var n = {
      verificationId: t.verificationId,
      code: t.code || null,
      error: null,
      state: 'verified',
    };

    this._emitToObservers(n);

    this._emitToSuccessCb(n);

    this._removeAllListeners();
  }

  _verificationFailedHandler(t) {
    var n = {
        verificationId: t.verificationId,
        code: null,
        error: null,
        state: 'error',
      },
      s = t.error,
      o = s.code,
      u = s.message,
      c = s.nativeErrorMessage;
    n.error = module672.nativeToJSError(o, u, {
      nativeErrorMessage: c,
    });

    this._emitToObservers(n);

    this._emitToErrorCb(n);

    this._removeAllListeners();
  }

  on(t, n, s, c) {
    if (!module672.isString(t)) throw new Error(module671.default.STRINGS.ERROR_MISSING_ARG_NAMED('event', 'string', 'on'));
    if ('state_changed' !== t) throw new Error(module671.default.STRINGS.ERROR_ARG_INVALID_VALUE('event', 'state_changed', t));
    if (!module672.isFunction(n)) throw new Error(module671.default.STRINGS.ERROR_MISSING_ARG_NAMED('observer', 'function', 'on'));

    this._addUserObserver(n);

    if (module672.isFunction(s)) module670.SharedEventEmitter.once(this._publicEvents.error, s);
    if (module672.isFunction(c)) module670.SharedEventEmitter.once(this._publicEvents.success, c);
    return this;
  }

  then(t) {
    if ((this._promiseDeferred(), this._promise)) return this._promise.then.bind(this._promise)(t);
  }

  catch(t) {
    if ((this._promiseDeferred(), this._promise)) return this._promise.catch.bind(this._promise)(t);
  }
}

export default v;
