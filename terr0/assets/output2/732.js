var module356 = require('./356'),
  module721 = require('./721'),
  module722 = require('./722'),
  module715 = require('./715'),
  module675 = require('./675');

class p {
  constructor(u, s) {
    module356.default(this, t);
    this._meta = s;
    this._commandBuffer = [];
    this._firestore = u;
    this._pendingResult = undefined;
  }

  _prepare() {
    this._commandBuffer = [];
    this._pendingResult = undefined;
  }

  get(t) {
    var n = this;
    return module675
      .getNativeModule(this._firestore)
      .transactionGetDocument(this._meta.id, t.path)
      .then(function (t) {
        return new module715.default(n._firestore, t);
      });
  }

  set(t, n, u) {
    this._commandBuffer.push({
      type: 'set',
      path: t.path,
      data: module722.buildNativeMap(n),
      options: u || {},
    });

    return this;
  }

  update(t) {
    for (var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) u[o - 1] = arguments[o];

    var h = module721.parseUpdateArgs(u, 'Transaction.update');

    this._commandBuffer.push({
      type: 'update',
      path: t.path,
      data: module722.buildNativeMap(h),
    });

    return this;
  }

  delete(t) {
    this._commandBuffer.push({
      type: 'delete',
      path: t.path,
    });

    return this;
  }
}

export default p;
