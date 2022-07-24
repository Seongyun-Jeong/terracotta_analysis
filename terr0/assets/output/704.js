var module356 = require('./356'),
  module672 = require('./672'),
  module675 = require('./675'),
  c = (function () {
    function t(u) {
      module356.default(this, t);
      this.ref = u;
      this.path = u.path;
      this._database = u._database;
    }

    module357.default(t, [
      {
        key: 'set',
        value: function (t) {
          return module675.getNativeModule(this._database).onDisconnectSet(this.path, {
            type: module672.typeOf(t),
            value: t,
          });
        },
      },
      {
        key: 'update',
        value: function (t) {
          return module675.getNativeModule(this._database).onDisconnectUpdate(this.path, t);
        },
      },
      {
        key: 'remove',
        value: function () {
          return module675.getNativeModule(this._database).onDisconnectRemove(this.path);
        },
      },
      {
        key: 'cancel',
        value: function () {
          return module675.getNativeModule(this._database).onDisconnectCancel(this.path);
        },
      },
    ]);
    return t;
  })();

exports.default = c;
