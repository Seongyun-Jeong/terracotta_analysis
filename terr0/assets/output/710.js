var module711 = require('./711'),
  module392 = require('./392'),
  module284 = require('./284'),
  module356 = require('./356'),
  module712 = require('./712'),
  module713 = require('./713'),
  module717 = require('./717'),
  module715 = require('./715'),
  module675 = require('./675'),
  module722 = require('./722'),
  module672 = require('./672'),
  module670 = require('./670');

function w(t, n) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    s.push.apply(s, o);
  }

  return s;
}

function b(t) {
  for (var n = 1; n < arguments.length; n++) {
    var s = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      w(Object(s), true).forEach(function (n) {
        module284.default(t, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      w(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

var E = {
    ASC: 'ASCENDING',
    asc: 'ASCENDING',
    DESC: 'DESCENDING',
    desc: 'DESCENDING',
  },
  P = {
    '=': 'EQUAL',
    '==': 'EQUAL',
    '>': 'GREATER_THAN',
    '>=': 'GREATER_THAN_OR_EQUAL',
    '<': 'LESS_THAN',
    '<=': 'LESS_THAN_OR_EQUAL',
    'array-contains': 'ARRAY_CONTAINS',
  };

function A(t) {
  return t instanceof module712.default
    ? {
        elements: t._segments,
        type: 'fieldpath',
      }
    : {
        string: t,
        type: 'string',
      };
}

var S = (function () {
  function t(n, s, o, l, u) {
    module356.default(this, t);
    this._fieldFilters = o || [];
    this._fieldOrders = l || [];
    this._firestore = n;
    this._queryOptions = u || {};
    this._referencePath = s;
  }

  module357.default(t, [
    {
      key: 'endAt',
      value: function (...args) {
        var f = b({}, this._queryOptions, {
          endAt: this._buildOrderByOption(args),
        });
        return new t(this.firestore, this._referencePath, this._fieldFilters, this._fieldOrders, f);
      },
    },
    {
      key: 'endBefore',
      value: function (...args) {
        var f = b({}, this._queryOptions, {
          endBefore: this._buildOrderByOption(args),
        });
        return new t(this.firestore, this._referencePath, this._fieldFilters, this._fieldOrders, f);
      },
    },
    {
      key: 'get',
      value: function (t) {
        var n = this;

        if (t) {
          if (!module672.isObject(t)) return Promise.reject(new Error('Query.get failed: First argument must be an object.'));
          if (t.source && 'default' !== t.source && 'server' !== t.source && 'cache' !== t.source)
            return Promise.reject(new Error('Query.get failed: GetOptions.source must be one of `default`, `server` or `cache`.'));
        }

        return module675
          .getNativeModule(this._firestore)
          .collectionGet(this._referencePath.relativeName, this._fieldFilters, this._fieldOrders, this._queryOptions, t)
          .then(function (t) {
            return new module713.default(n._firestore, n, t);
          });
      },
    },
    {
      key: 'isEqual',
      value: function (n) {
        if (!(n instanceof t)) throw new Error('firebase.firestore.Query.isEqual(*) expects an instance of Query.');
        if (this._firestore.app.name !== n._firestore.app.name) return false;
        if (this._firestore.app.options.projectId !== n._firestore.app.options.projectId) return false;
        if (this._fieldFilters.length !== n._fieldFilters.length) return false;

        for (var s = 0; s < this._fieldFilters.length; s++) {
          var o = this._fieldFilters[s],
            f = n._fieldFilters[s];
          if (o.fieldPath.string !== f.fieldPath.string) return false;
          if (o.fieldPath.type !== f.fieldPath.type) return false;
          if (o.value.type !== f.value.type) return false;
          if (o.value.value !== f.value.value) return false;
          if (o.operator !== f.operator) return false;
        }

        if (this._fieldOrders.length !== n._fieldOrders.length) return false;

        for (var l = 0; l < this._fieldOrders.length; l++) {
          var u = this._fieldOrders[l],
            h = n._fieldOrders[l];
          if (u.direction !== h.direction) return false;
          if (u.fieldPath.string !== h.fieldPath.string) return false;
          if (u.fieldPath.type !== h.fieldPath.type) return false;
        }

        return true;
      },
    },
    {
      key: 'limit',
      value: function (n) {
        var s = b({}, this._queryOptions, {
          limit: n,
        });
        return new t(this.firestore, this._referencePath, this._fieldFilters, this._fieldOrders, s);
      },
    },
    {
      key: 'onSnapshot',
      value: function (t, n, s) {
        var o,
          f = this,
          l = {};

        if (module672.isFunction(t)) {
          if (n && !module672.isFunction(n)) throw new Error('Query.onSnapshot failed: Second argument must be a valid function.');
          o = {
            next: t,
            error: n,
          };
        } else {
          if (!t || !module672.isObject(t)) throw new Error('Query.onSnapshot failed: Called with invalid arguments.');

          if (t.next) {
            if (!module672.isFunction(t.next)) throw new Error('Query.onSnapshot failed: Observer.next must be a valid function.');
            if (t.error && !module672.isFunction(t.error)) throw new Error('Query.onSnapshot failed: Observer.error must be a valid function.');
            o = {
              next: t.next,
              error: t.error,
            };
          } else {
            if (!Object.prototype.hasOwnProperty.call(t, 'includeMetadataChanges'))
              throw new Error('Query.onSnapshot failed: First argument must be a function, observer or options.');

            if (((l = t), module672.isFunction(n))) {
              if (s && !module672.isFunction(s)) throw new Error('Query.onSnapshot failed: Third argument must be a valid function.');
              o = {
                next: n,
                error: s,
              };
            } else {
              if (!(n && module672.isObject(n) && n.next)) throw new Error('Query.onSnapshot failed: Second argument must be a function or observer.');
              if (!module672.isFunction(n.next)) throw new Error('Query.onSnapshot failed: Observer.next must be a valid function.');
              if (n.error && !module672.isFunction(n.error)) throw new Error('Query.onSnapshot failed: Observer.error must be a valid function.');
              o = {
                next: n.next,
                error: n.error,
              };
            }
          }
        }

        var u,
          _ = module672.firestoreAutoId(),
          v = module670.SharedEventEmitter.addListener(module670.getAppEventName(this._firestore, 'onQuerySnapshot:' + _), function (t) {
            var n = new module713.default(f._firestore, f, t);
            o.next(n);
          }),
          w = module670.SharedEventEmitter.addListener(module670.getAppEventName(this._firestore, 'onQuerySnapshotError:' + _), function (t) {
            if (u) u();
            var n = new module717.default(t);
            if (o.error) o.error(n);
            else f.firestore.log.error(n);
          });

        module675.getNativeModule(this._firestore).collectionOnSnapshot(this._referencePath.relativeName, this._fieldFilters, this._fieldOrders, this._queryOptions, _, l);

        u = function () {
          v.remove();
          w.remove();
          module675.getNativeModule(f._firestore).collectionOffSnapshot(f._referencePath.relativeName, f._fieldFilters, f._fieldOrders, f._queryOptions, _);
        };

        return u;
      },
    },
    {
      key: 'orderBy',
      value: function (n) {
        var s = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 'asc';
        if (this._queryOptions.startAt || this._queryOptions.startAfter || this._queryOptions.endAt || this._queryOptions.endBefore)
          throw new Error('Cannot specify an orderBy() constraint after calling startAt(), startAfter(), endBefore() or endAt().');

        var o = {
            direction: E[s],
            fieldPath: A(n),
          },
          f = this._fieldOrders.concat(o);

        return new t(this.firestore, this._referencePath, this._fieldFilters, f, this._queryOptions);
      },
    },
    {
      key: 'startAfter',
      value: function (...args) {
        var f = b({}, this._queryOptions, {
          startAfter: this._buildOrderByOption(args),
        });
        return new t(this.firestore, this._referencePath, this._fieldFilters, this._fieldOrders, f);
      },
    },
    {
      key: 'startAt',
      value: function (...args) {
        var f = b({}, this._queryOptions, {
          startAt: this._buildOrderByOption(args),
        });
        return new t(this.firestore, this._referencePath, this._fieldFilters, this._fieldOrders, f);
      },
    },
    {
      key: 'where',
      value: function (n, s, o) {
        var f = module722.buildTypeMap(o),
          l = {
            fieldPath: A(n),
            operator: P[s],
            value: f,
          },
          u = this._fieldFilters.concat(l);

        return new t(this.firestore, this._referencePath, u, this._fieldOrders, this._queryOptions);
      },
    },
    {
      key: '_buildOrderByOption',
      value: function (t) {
        var o;

        if (1 === t.length && t[0] instanceof module715.default) {
          var f = t[0];
          o = [];

          for (var l = 0; l < this._fieldOrders.length; l++) {
            var h = this._fieldOrders[l];
            if ('string' === h.fieldPath.type && h.fieldPath.string) o.push(f.get(h.fieldPath.string));
            else if (h.fieldPath.elements) {
              var c = module711.default(module712.default, module392.default(h.fieldPath.elements));
              o.push(f.get(c));
            }
          }
        } else o = t;

        return module722.buildNativeArray(o);
      },
    },
    {
      key: 'firestore',
      get: function () {
        return this._firestore;
      },
    },
  ]);
  return t;
})();

exports.default = S;
