var module356 = require('./356'),
  module674 = require('./674'),
  module675 = require('./675'),
  l = (function () {
    function t(o, l, c) {
      if ((module356.default(this, t), !l.moduleName)) throw new Error('Missing module name');
      if (!l.namespace) throw new Error('Missing namespace');
      var f = l.moduleName;
      this._app = o;
      this._customUrlOrRegion = c;
      this.namespace = l.namespace;
      module675.initialiseNativeModule(this, l, c);
      module674.initialiseLogger(this, o.name + ':' + f.replace('RNFirebase', ''));
    }

    module357.default(t, [
      {
        key: 'app',
        get: function () {
          return this._app;
        },
      },
      {
        key: 'log',
        get: function () {
          return module674.getLogger(this);
        },
      },
    ]);
    return t;
  })();

exports.default = l;
