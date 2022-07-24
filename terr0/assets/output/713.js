var module356 = require('./356'),
  module714 = require('./714'),
  module715 = require('./715'),
  s = (function () {
    function t(u, s, f) {
      module356.default(this, t);
      this._changes = f.changes.map(function (t) {
        return new module714.default(u, t);
      });
      this._docs = f.documents.map(function (t) {
        return new module715.default(u, t);
      });
      this._metadata = f.metadata;
      this._query = s;
    }

    module357.default(t, [
      {
        key: 'forEach',
        value: function (t) {
          this._docs.forEach(function (n) {
            t(n);
          });
        },
      },
      {
        key: 'docChanges',
        get: function () {
          return this._changes;
        },
      },
      {
        key: 'docs',
        get: function () {
          return this._docs;
        },
      },
      {
        key: 'empty',
        get: function () {
          return 0 === this._docs.length;
        },
      },
      {
        key: 'metadata',
        get: function () {
          return this._metadata;
        },
      },
      {
        key: 'query',
        get: function () {
          return this._query;
        },
      },
      {
        key: 'size',
        get: function () {
          return this._docs.length;
        },
      },
    ]);
    return t;
  })();

exports.default = s;
