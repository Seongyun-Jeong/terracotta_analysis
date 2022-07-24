var module356 = require('./356'),
  module714 = require('./714'),
  module715 = require('./715');

class s {
  constructor(u, s, f) {
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

  forEach(t) {
    this._docs.forEach(function (n) {
      t(n);
    });
  }

  docChanges() {
    return this._changes;
  }

  docs() {
    return this._docs;
  }

  empty() {
    return 0 === this._docs.length;
  }

  metadata() {
    return this._metadata;
  }

  query() {
    return this._query;
  }

  size() {
    return this._docs.length;
  }
}

export default s;
