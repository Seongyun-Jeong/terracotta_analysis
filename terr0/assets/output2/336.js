var module12 = require('./12'),
  module8 = require('./8'),
  u = module8.AsyncRocksDBStorage || module8.AsyncSQLiteDBStorage || module8.AsyncLocalStorage,
  l = {
    _getRequests: [],
    _getKeys: [],
    _immediate: null,
    getItem: function (t, n) {
      return new Promise(function (l, s) {
        u.multiGet([t], function (t, u) {
          var c = u && u[0] && u[0][1] ? u[0][1] : null,
            f = o(t);
          if (n) n(f && f[0], c);
          if (f) s(f[0]);
          else l(c);
        });
      });
    },
    setItem: function (t, n, l) {
      return new Promise(function (s, c) {
        u.multiSet([[t, n]], function (t) {
          var n = o(t);
          if (l) l(n && n[0]);
          if (n) c(n[0]);
          else s(null);
        });
      });
    },
    removeItem: function (t, n) {
      return new Promise(function (l, s) {
        u.multiRemove([t], function (t) {
          var u = o(t);
          if (n) n(u && u[0]);
          if (u) s(u[0]);
          else l(null);
        });
      });
    },
    mergeItem: function (t, n, l) {
      return new Promise(function (s, c) {
        u.multiMerge([[t, n]], function (t) {
          var n = o(t);
          if (l) l(n && n[0]);
          if (n) c(n[0]);
          else s(null);
        });
      });
    },
    clear: function (t) {
      return new Promise(function (n, l) {
        u.clear(function (u) {
          if (t) t(s(u));
          if (u && s(u)) l(s(u));
          else n(null);
        });
      });
    },
    getAllKeys: function (t) {
      return new Promise(function (n, l) {
        u.getAllKeys(function (u, o) {
          if (t) t(s(u), o);
          if (u) l(s(u));
          else n(o);
        });
      });
    },
    flushGetRequests: function () {
      var n = this._getRequests,
        l = this._getKeys;
      this._getRequests = [];
      this._getKeys = [];
      u.multiGet(l, function (u, l) {
        var o = {};
        if (l)
          l.forEach(function (n) {
            var u = module12(n, 2),
              l = u[0],
              s = u[1];
            o[l] = s;
            return s;
          });

        for (var s = n.length, c = 0; c < s; c++) {
          var f = n[c],
            v = f.keys.map(function (t) {
              return [t, o[t]];
            });
          if (f.callback) f.callback(null, v);
          if (f.resolve) f.resolve(v);
        }
      });
    },
    multiGet: function (t, n) {
      var u = this;
      if (!this._immediate)
        this._immediate = setImmediate(function () {
          u._immediate = null;
          u.flushGetRequests();
        });
      var l = {
          keys: t,
          callback: n,
          keyIndex: this._getKeys.length,
          resolve: null,
          reject: null,
        },
        o = new Promise(function (t, n) {
          l.resolve = t;
          l.reject = n;
        });

      this._getRequests.push(l);

      t.forEach(function (t) {
        if (-1 === u._getKeys.indexOf(t)) u._getKeys.push(t);
      });
      return o;
    },
    multiSet: function (t, n) {
      return new Promise(function (l, s) {
        u.multiSet(t, function (t) {
          var u = o(t);
          if (n) n(u);
          if (u) s(u);
          else l(null);
        });
      });
    },
    multiRemove: function (t, n) {
      return new Promise(function (l, s) {
        u.multiRemove(t, function (t) {
          var u = o(t);
          if (n) n(u);
          if (u) s(u);
          else l(null);
        });
      });
    },
    multiMerge: function (t, n) {
      return new Promise(function (l, s) {
        u.multiMerge(t, function (t) {
          var u = o(t);
          if (n) n(u);
          if (u) s(u);
          else l(null);
        });
      });
    },
  };

function o(t) {
  return t
    ? (Array.isArray(t) ? t : [t]).map(function (t) {
        return s(t);
      })
    : null;
}

function s(t) {
  if (!t) return null;
  var n = new Error(t.message);
  n.key = t.key;
  return n;
}

if (!u.multiMerge) {
  delete l.mergeItem;
  delete l.multiMerge;
}

module.exports = l;
