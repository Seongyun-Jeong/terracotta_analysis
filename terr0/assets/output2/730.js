var module356 = require('./356'),
  module721 = require('./721'),
  module722 = require('./722'),
  module675 = require('./675');

class o {
  constructor(s) {
    module356.default(this, t);
    this._firestore = s;
    this._writes = [];
  }

  commit() {
    return module675.getNativeModule(this._firestore).documentBatch(this._writes);
  }

  delete(t) {
    this._writes.push({
      path: t.path,
      type: 'DELETE',
    });

    return this;
  }

  set(t, u, s) {
    var n = module722.buildNativeMap(u);

    this._writes.push({
      data: n,
      options: s,
      path: t.path,
      type: 'SET',
    });

    return this;
  }

  update(t) {
    for (var u = arguments.length, s = new Array(u > 1 ? u - 1 : 0), p = 1; p < u; p++) s[p - 1] = arguments[p];

    var o = module721.parseUpdateArgs(s, 'WriteBatch.update');

    this._writes.push({
      data: module722.buildNativeMap(o),
      path: t.path,
      type: 'UPDATE',
    });

    return this;
  }
}

export default o;
