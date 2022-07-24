var module51 = require('./51'),
  module356 = require('./356'),
  module670 = require('./670'),
  module674 = require('./674'),
  module675 = require('./675'),
  h = 0,
  v = (function () {
    function t(n) {
      module356.default(this, t);
      this._transactions = {};
      this._database = n;
      module670.SharedEventEmitter.addListener(module670.getAppEventName(this._database, 'database_transaction_event'), this._handleTransactionEvent.bind(this));
    }

    module357.default(t, [
      {
        key: 'add',
        value: function (t, n, o) {
          var s = arguments.length > 3 && undefined !== arguments[3] && arguments[3],
            l = h++;
          this._transactions[l] = {
            id: l,
            reference: t,
            transactionUpdater: n,
            onComplete: o,
            applyLocally: s,
            completed: false,
            started: true,
          };
          module675.getNativeModule(this._database).transactionStart(t.path, l, s);
        },
      },
      {
        key: '_handleTransactionEvent',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};

          switch (t.type) {
            case 'update':
              return this._handleUpdate(t);

            case 'error':
              return this._handleError(t);

            case 'complete':
              return this._handleComplete(t);

            default:
              return void module674.getLogger(this._database).warn("Unknown transaction event type: '" + t.type + "'", t);
          }
        },
      },
      {
        key: '_handleUpdate',
        value: function () {
          var t,
            n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
            o = n.id,
            s = n.value;

          try {
            var l = this._transactions[o];
            if (!l) return;
            t = l.transactionUpdater(s);
          } finally {
            var c = false;
            if (undefined === t) c = true;
            module675.getNativeModule(this._database).transactionTryCommit(o, {
              value: t,
              abort: c,
            });
          }
        },
      },
      {
        key: '_handleError',
        value: function () {
          var t = this,
            n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
            o = this._transactions[n.id];

          if (o && !o.completed) {
            o.completed = true;

            try {
              o.onComplete(n.error, false, null);
            } finally {
              setImmediate(function () {
                delete t._transactions[n.id];
              });
            }
          }
        },
      },
      {
        key: '_handleComplete',
        value: function () {
          var t = this,
            o = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {},
            s = this._transactions[o.id];

          if (s && !s.completed) {
            s.completed = true;

            try {
              s.onComplete(null, o.committed, module51.default({}, o.snapshot));
            } finally {
              setImmediate(function () {
                delete t._transactions[o.id];
              });
            }
          }
        },
      },
    ]);
    return t;
  })();

exports.default = v;
