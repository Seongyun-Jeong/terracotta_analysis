require('./701');

import module2 from './2';

var module51 = require('./51'),
  module356 = require('./356'),
  module670 = require('./670'),
  module703 = require('./703'),
  module672 = require('./672');

class f {
  constructor() {
    module356.default(this, t);
    this._tree = {};
    this._reverseLookup = {};

    if (module2.NativeModules.RNFirebaseDatabase) {
      this._nativeEmitter = new module2.NativeEventEmitter(module2.NativeModules.RNFirebaseDatabase);

      this._nativeEmitter.addListener('database_sync_event', this._handleSyncEvent.bind(this));
    }
  }

  _handleSyncEvent(t) {
    if (t.error) this._handleErrorEvent(t);
    else this._handleValueEvent(t);
  }

  _handleValueEvent(t) {
    var n = t.registration,
      s = n.key,
      o = n.eventRegistrationKey,
      l = this.getRegistration(o);
    if (!l) return module2.NativeModules.RNFirebaseDatabase.off(s, o);
    var f = t.data,
      _ = f.snapshot,
      y = f.previousChildName;
    return module670.SharedEventEmitter.emit(o, new module703.default(l.ref, _), y);
  }

  _handleErrorEvent(t) {
    var n = t.error,
      s = n.code,
      o = n.message,
      v = t.registration,
      h = v.eventRegistrationKey,
      f = v.registrationCancellationKey,
      _ = this.getRegistration(f);

    if (_) {
      var y = module672.nativeToJSError(s, o, {
        ref: _.ref,
      });
      module670.SharedEventEmitter.emit(f, y);
      this.removeRegistration(h);
    }
  }

  getRegistration(t) {
    return this._reverseLookup[t] ? module51.default({}, this._reverseLookup[t]) : null;
  }

  removeListenersForRegistrations(t) {
    if (module672.isString(t)) {
      this.removeRegistration(t);
      module670.SharedEventEmitter.removeAllListeners(t);
      return 1;
    }

    if (!Array.isArray(t)) return 0;

    for (var n = 0, s = t.length; n < s; n++) {
      this.removeRegistration(t[n]);
      module670.SharedEventEmitter.removeAllListeners(t[n]);
    }

    return t.length;
  }

  removeListenerRegistrations(t, n) {
    if (!Array.isArray(n)) return [];

    for (var s = [], o = 0, v = n.length; o < v; o++) {
      var h = n[o],
        l = module670.SharedEventEmitter._subscriber.getSubscriptionsForType(h);

      if (l)
        for (var f = 0, _ = l.length; f < _; f++) {
          var y = l[f];

          if (y && y.listener === t) {
            y.remove();
            s.push(h);
            this.removeRegistration(h);
          }
        }
    }

    return s;
  }

  getRegistrationsByPath(t) {
    for (var n = [], s = Object.keys(this._tree[t] || {}), o = 0, v = s.length; o < v; o++) Array.prototype.push.apply(n, Object.keys(this._tree[t][s[o]]));

    return n;
  }

  getRegistrationsByPathEvent(t, n) {
    return this._tree[t] && this._tree[t][n] ? Object.keys(this._tree[t][n]) : [];
  }

  getOneByPathEventListener(t, n, s) {
    if (!this._tree[t]) return null;
    if (!this._tree[t][n]) return null;

    for (var o = Object.entries(this._tree[t][n]), v = 0; v < o.length; v++) {
      var u = o[v];
      if (u[1] === s) return u[0];
    }

    return null;
  }

  addRegistration(t) {
    var n = t.eventRegistrationKey,
      s = t.eventType,
      o = t.listener,
      v = t.once,
      h = t.path;
    if (!this._tree[h]) this._tree[h] = {};
    if (!this._tree[h][s]) this._tree[h][s] = {};
    this._tree[h][s][n] = o;
    this._reverseLookup[n] = t;
    if (v) module670.SharedEventEmitter.once(n, this._onOnceRemoveRegistration(n, o));
    else module670.SharedEventEmitter.addListener(n, o);
    return n;
  }

  removeRegistration(t) {
    if (!this._reverseLookup[t]) return false;
    var n = this._reverseLookup[t],
      s = n.path,
      o = n.eventType,
      u = n.once;

    if (!this._tree[s]) {
      delete this._reverseLookup[t];
      return false;
    }

    if (!this._tree[s][o]) {
      delete this._reverseLookup[t];
      return false;
    }

    var h = this._reverseLookup[t];
    if (h && !u) module2.NativeModules.RNFirebaseDatabase.off(h.key, t);
    delete this._tree[s][o][t];
    delete this._reverseLookup[t];
    return !!h;
  }

  _onOnceRemoveRegistration(t, n) {
    var s = this;
    return function () {
      s.removeRegistration(t);
      n.apply(undefined, arguments);
    };
  }
}

export default f;
