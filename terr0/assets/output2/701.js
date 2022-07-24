var module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module702 = require('./702'),
  module703 = require('./703'),
  module704 = require('./704'),
  module674 = require('./674'),
  module675 = require('./675'),
  module705 = require('./705'),
  module672 = require('./672'),
  module706 = require('./706');

function O(t, n) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    s.push.apply(s, u);
  }

  return s;
}

function j(t) {
  for (var s = 1; s < arguments.length; s++) {
    var u = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      O(Object(u), true).forEach(function (s) {
        module284.default(t, s, u[s]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      O(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

var F = 0,
  R = {
    value: 'value',
    child_added: 'child_added',
    child_removed: 'child_removed',
    child_changed: 'child_changed',
    child_moved: 'child_moved',
  };

class P {
  constructor(t, u, c) {
    var y;
    module356.default(this, n);
    (y = module358.default(this, module361.default(n).call(this, u)))._refListeners = {};
    y._database = t;
    y._query = new module702.default(module360.default(y), c);
    module674.getLogger(t).debug('Created new Reference', y._getRefKey());
    return y;
  }

  keepSynced(t) {
    return module675.getNativeModule(this._database).keepSynced(this._getRefKey(), this.path, this._query.getModifiers(), t);
  }

  set(t, n) {
    return module672.promiseOrCallback(module675.getNativeModule(this._database).set(this.path, this._serializeAnyType(t)), n);
  }

  setPriority(t, n) {
    var s = this._serializeAnyType(t);

    return module672.promiseOrCallback(module675.getNativeModule(this._database).setPriority(this.path, s), n);
  }

  setWithPriority(t, n, s) {
    var u = this._serializeAnyType(t),
      o = this._serializeAnyType(n);

    return module672.promiseOrCallback(module675.getNativeModule(this._database).setWithPriority(this.path, u, o), s);
  }

  update(t, n) {
    var s = this._serializeObject(t);

    return module672.promiseOrCallback(module675.getNativeModule(this._database).update(this.path, s), n);
  }

  remove(t) {
    return module672.promiseOrCallback(module675.getNativeModule(this._database).remove(this.path), t);
  }

  transaction(t, n) {
    var s = this,
      u = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
    return module672.isFunction(t)
      ? new Promise(function (o, l) {
          s._database._transactionHandler.add(
            s,
            t,
            function (t, u, h) {
              if (module672.isFunction(n)) t ? n(t, u, null) : n(null, u, new module703.default(s, h));
              return t
                ? l(t)
                : o({
                    committed: u,
                    snapshot: new module703.default(s, h),
                  });
            },
            u
          );
        })
      : Promise.reject(new Error('Missing transactionUpdate function argument.'));
  }

  once() {
    var t = this,
      n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 'value',
      s = arguments.length > 1 ? arguments[1] : undefined,
      u = arguments.length > 2 ? arguments[2] : undefined,
      o = arguments.length > 3 ? arguments[3] : undefined;
    return module675
      .getNativeModule(this._database)
      .once(this._getRefKey(), this.path, this._query.getModifiers(), n)
      .then(function (n) {
        var l = n.snapshot,
          h = new module703.default(t, l);

        if (module672.isFunction(s)) {
          if (module672.isObject(u)) s.bind(u)(h);
          if (o && module672.isObject(o)) s.bind(o)(h);
          s(h);
        }

        return h;
      })
      .catch(function (t) {
        if (module672.isFunction(u)) return u(t);
        throw t;
      });
  }

  push(t, n) {
    var module356,
      u = module672.generatePushID(this._database._serverTimeOffset),
      o = this.child(u),
      l = this.child(u);
    module356 =
      null != t
        ? l.set(t, n).then(function () {
            return o;
          })
        : Promise.resolve(o);
    l.then = module356.then.bind(module356);
    l.catch = module356.catch.bind(module356);
    if (module672.isFunction(n)) module356.catch(function () {});
    return l;
  }

  orderByKey() {
    return this.orderBy('orderByKey');
  }

  orderByPriority() {
    return this.orderBy('orderByPriority');
  }

  orderByValue() {
    return this.orderBy('orderByValue');
  }

  orderByChild(t) {
    return this.orderBy('orderByChild', t);
  }

  orderBy(t, s) {
    var u = new n(this._database, this.path, this._query.getModifiers());

    u._query.orderBy(t, s);

    return u;
  }

  limitToLast(t) {
    return this.limit('limitToLast', t);
  }

  limitToFirst(t) {
    return this.limit('limitToFirst', t);
  }

  limit(t, s) {
    var u = new n(this._database, this.path, this._query.getModifiers());

    u._query.limit(t, s);

    return u;
  }

  equalTo(t, n) {
    return this.filter('equalTo', t, n);
  }

  endAt(t, n) {
    return this.filter('endAt', t, n);
  }

  startAt(t, n) {
    return this.filter('startAt', t, n);
  }

  filter(t, s, u) {
    var o = new n(this._database, this.path, this._query.getModifiers());

    o._query.filter(t, s, u);

    return o;
  }

  onDisconnect() {
    return new module704.default(this);
  }

  child(t) {
    return new n(this._database, this.path + '/' + t);
  }

  toString() {
    return '' + this._database.databaseUrl + this.path;
  }

  toJSON() {
    return this.toString();
  }

  isEqual(t) {
    return !!t && t.constructor === n && t.key === this.key && this._query.queryIdentifier() === t._query.queryIdentifier();
  }

  _getRegistrationKey(t) {
    return '$' + this._database.databaseUrl + '$/' + this.path + '$' + this._query.queryIdentifier() + '$' + F + '$' + t;
  }

  _getRefKey() {
    return '$' + this._database.databaseUrl + '$/' + this.path + '$' + this._query.queryIdentifier();
  }

  _serializeObject(t) {
    return module672.isObject(t) ? module672.tryJSONParse(module672.tryJSONStringify(t)) : t;
  }

  _serializeAnyType(t) {
    return module672.isObject(t)
      ? {
          type: 'object',
          value: this._serializeObject(t),
        }
      : {
          type: typeof t,
          value: t,
        };
  }

  on(t, n, s, u) {
    if (!t) throw new Error('Query.on failed: Function called with 0 arguments. Expects at least 2.');
    if (!module672.isString(t) || !R[t]) throw new Error('Query.on failed: First argument must be a valid string event type: "' + Object.keys(R).join(', ') + '"');
    if (!n) throw new Error('Query.on failed: Function called with 1 argument. Expects at least 2.');
    if (!module672.isFunction(n)) throw new Error('Query.on failed: Second argument must be a valid function.');
    if (s && !module672.isFunction(s) && !module672.isObject(u) && !module672.isObject(s))
      throw new Error('Query.on failed: Function called with 3 arguments, but third optional argument `cancelCallbackOrContext` was not a function.');
    if (s && !module672.isFunction(s) && u)
      throw new Error('Query.on failed: Function called with 4 arguments, but third optional argument `cancelCallbackOrContext` was not a function.');

    var o = this._getRegistrationKey(t),
      l = o + '$cancelled',
      h = s && !module672.isFunction(s) ? s : u,
      c = {
        eventType: t,
        ref: this,
        path: this.path,
        key: this._getRefKey(),
        appName: this._database.app.name,
        dbURL: this._database.databaseUrl,
        eventRegistrationKey: o,
      };

    module706.default.addRegistration(
      j({}, c, {
        listener: h ? n.bind(h) : n,
      })
    );
    if (s && module672.isFunction(s))
      module706.default.addRegistration({
        ref: this,
        once: true,
        path: this.path,
        key: this._getRefKey(),
        appName: this._database.app.name,
        dbURL: this._database.databaseUrl,
        eventType: t + '$cancelled',
        eventRegistrationKey: l,
        listener: h ? s.bind(h) : s,
      });
    module675.getNativeModule(this._database).on({
      eventType: t,
      path: this.path,
      key: this._getRefKey(),
      appName: this._database.app.name,
      modifiers: this._query.getModifiers(),
      hasCancellationCallback: module672.isFunction(s),
      registration: {
        eventRegistrationKey: o,
        key: c.key,
        registrationCancellationKey: l,
      },
    });
    F += 1;
    return n;
  }

  off() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '',
      n = arguments.length > 1 ? arguments[1] : undefined;
    if (!arguments.length) return module706.default.removeListenersForRegistrations(module706.default.getRegistrationsByPath(this.path));
    if (t && (!module672.isString(t) || !R[t])) throw new Error('Query.off failed: First argument must be a valid string event type: "' + Object.keys(R).join(', ') + '"');
    if (n && !module672.isFunction(n)) throw new Error('Query.off failed: Function called with 2 arguments, but second optional argument was not a function.');

    if (t && n) {
      var s = module706.default.getOneByPathEventListener(this.path, t, n);

      if (s) {
        module706.default.removeListenersForRegistrations([s + '$cancelled']);
        return module706.default.removeListenerRegistrations(n, [s]);
      } else return [];
    }

    var u = module706.default.getRegistrationsByPathEvent(this.path, t);
    module706.default.removeListenersForRegistrations(module706.default.getRegistrationsByPathEvent(this.path, t + '$cancelled'));
    return module706.default.removeListenersForRegistrations(u);
  }

  parent() {
    return '/' === this.path ? null : new n(this._database, this.path.substring(0, this.path.lastIndexOf('/')));
  }

  ref() {
    return this;
  }

  root() {
    return new n(this._database, '/');
  }
}

export default P;
