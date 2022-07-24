var regeneratorRuntime = require('regenerator-runtime'),
  module356 = require('./356'),
  module670 = require('./670'),
  module675 = require('./675'),
  module732 = require('./732'),
  l = 0,
  p = (function () {
    function t(n) {
      module356.default(this, t);
      this._pending = {};
      this._firestore = n;
      module670.SharedEventEmitter.addListener(module670.getAppEventName(this._firestore, 'firestore_transaction_event'), this._handleTransactionEvent.bind(this));
    }

    module357.default(t, [
      {
        key: '_add',
        value: function (t) {
          var n = this,
            s = l++,
            o = {
              id: s,
              updateFunction: t,
              stack: new Error().stack.split('\n').slice(2).join('\n'),
            };
          this._pending[s] = {
            meta: o,
            transaction: new module732.default(this._firestore, o),
          };
          return new Promise(function (t, u) {
            module675.getNativeModule(n._firestore).transactionBegin(s);

            o.resolve = function (o) {
              t(o);

              n._remove(s);
            };

            o.reject = function (t) {
              u(t);

              n._remove(s);
            };
          });
        },
      },
      {
        key: '_remove',
        value: function (t) {
          module675.getNativeModule(this._firestore).transactionDispose(t);
          delete this._pending[t];
        },
      },
      {
        key: '_handleTransactionEvent',
        value: function (t) {
          switch (t.type) {
            case 'update':
              this._handleUpdate(t);

              break;

            case 'error':
              this._handleError(t);

              break;

            case 'complete':
              this._handleComplete(t);
          }
        },
      },
      {
        key: '_handleUpdate',
        value: function (t) {
          var s, o, u, f, l, p, _, h, v, k;

          return regeneratorRuntime.default.async(
            function (b) {
              for (;;)
                switch ((b.prev = b.next)) {
                  case 0:
                    if (((s = t.id), this._pending[s])) {
                      b.next = 3;
                      break;
                    }

                    return b.abrupt('return', this._remove(s));

                  case 3:
                    if (((o = this._pending[s]), (u = o.meta), (f = o.transaction), (l = u.updateFunction), (p = u.reject), f._prepare(), (b.prev = 6), (k = l(f)) && k.then)) {
                      b.next = 12;
                      break;
                    }

                    _ = new Error('Update function for `firestore.runTransaction(updateFunction)` must return a Promise.');
                    b.next = 15;
                    break;

                  case 12:
                    b.next = 14;
                    return regeneratorRuntime.default.awrap(k);

                  case 14:
                    v = b.sent;

                  case 15:
                    b.next = 21;
                    break;

                  case 17:
                    b.prev = 17;
                    b.t0 = b.catch(6);
                    h = true;
                    _ = b.t0;

                  case 21:
                    if (!h && !_) {
                      b.next = 23;
                      break;
                    }

                    return b.abrupt('return', p(_));

                  case 23:
                    f._pendingResult = v;
                    return b.abrupt('return', module675.getNativeModule(this._firestore).transactionApplyBuffer(s, f._commandBuffer));

                  case 25:
                  case 'end':
                    return b.stop();
                }
            },
            null,
            this,
            [[6, 17]]
          );
        },
      },
      {
        key: '_handleError',
        value: function (t) {
          var n = t.id,
            s = t.error,
            o = this._pending[n].meta;

          if (o && s) {
            var u = s.code,
              c = s.message,
              f = new Error(c);
            f.code = u;
            f.stack = 'Error: ' + c + '\n' + o.stack;
            o.reject(f);
          }
        },
      },
      {
        key: '_handleComplete',
        value: function (t) {
          var n = t.id,
            s = this._pending[n],
            o = s.meta,
            u = s.transaction;

          if (o) {
            var c = u._pendingResult;
            o.resolve(c);
          }
        },
      },
    ]);
    return t;
  })();

exports.default = p;
