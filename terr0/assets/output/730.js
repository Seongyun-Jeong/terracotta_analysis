var module356 = require('./356'),
  module721 = require('./721'),
  module722 = require('./722'),
  module675 = require('./675'),
  o = (function () {
    function t(s) {
      module356.default(this, t);
      this._firestore = s;
      this._writes = [];
    }

    module357.default(t, [
      {
        key: 'commit',
        value: function () {
          return module675.getNativeModule(this._firestore).documentBatch(this._writes);
        },
      },
      {
        key: 'delete',
        value: function (t) {
          this._writes.push({
            path: t.path,
            type: 'DELETE',
          });

          return this;
        },
      },
      {
        key: 'set',
        value: function (t, u, s) {
          var n = module722.buildNativeMap(u);

          this._writes.push({
            data: n,
            options: s,
            path: t.path,
            type: 'SET',
          });

          return this;
        },
      },
      {
        key: 'update',
        value: function (t) {
          for (var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++) s[p - 1] = arguments[p];

          var o = module721.parseUpdateArgs(s, 'WriteBatch.update');

          this._writes.push({
            data: module722.buildNativeMap(o),
            path: t.path,
            type: 'UPDATE',
          });

          return this;
        },
      },
    ]);
    return t;
  })();

exports.default = o;
