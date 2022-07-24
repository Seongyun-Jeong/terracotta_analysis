var module356 = require('./356'),
  module721 = require('./721'),
  module722 = require('./722'),
  module715 = require('./715'),
  module675 = require('./675'),
  p = (function () {
    function t(u, s) {
      module356.default(this, t);
      this._meta = s;
      this._commandBuffer = [];
      this._firestore = u;
      this._pendingResult = undefined;
    }

    module357.default(t, [
      {
        key: '_prepare',
        value: function () {
          this._commandBuffer = [];
          this._pendingResult = undefined;
        },
      },
      {
        key: 'get',
        value: function (t) {
          var n = this;
          return module675
            .getNativeModule(this._firestore)
            .transactionGetDocument(this._meta.id, t.path)
            .then(function (t) {
              return new module715.default(n._firestore, t);
            });
        },
      },
      {
        key: 'set',
        value: function (t, n, u) {
          this._commandBuffer.push({
            type: 'set',
            path: t.path,
            data: module722.buildNativeMap(n),
            options: u || {},
          });

          return this;
        },
      },
      {
        key: 'update',
        value: function (t) {
          for (var n = arguments.length, u = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) u[o - 1] = arguments[o];

          var h = module721.parseUpdateArgs(u, 'Transaction.update');

          this._commandBuffer.push({
            type: 'update',
            path: t.path,
            data: module722.buildNativeMap(h),
          });

          return this;
        },
      },
      {
        key: 'delete',
        value: function (t) {
          this._commandBuffer.push({
            type: 'delete',
            path: t.path,
          });

          return this;
        },
      },
    ]);
    return t;
  })();

exports.default = p;
