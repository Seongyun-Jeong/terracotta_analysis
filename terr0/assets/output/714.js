var module356 = require('./356'),
  module715 = require('./715'),
  f = (function () {
    function t(u, f) {
      module356.default(this, t);
      this._document = new module715.default(u, f.document);
      this._newIndex = f.newIndex;
      this._oldIndex = f.oldIndex;
      this._type = f.type;
    }

    module357.default(t, [
      {
        key: 'doc',
        get: function () {
          return this._document;
        },
      },
      {
        key: 'newIndex',
        get: function () {
          return this._newIndex;
        },
      },
      {
        key: 'oldIndex',
        get: function () {
          return this._oldIndex;
        },
      },
      {
        key: 'type',
        get: function () {
          return this._type;
        },
      },
    ]);
    return t;
  })();

exports.default = f;
