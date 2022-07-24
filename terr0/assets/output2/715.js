var module356 = require('./356'),
  module716 = require('./716'),
  module712 = require('./712'),
  module728 = require('./728'),
  module672 = require('./672'),
  module722 = require('./722'),
  h = function t(n, u) {
    if (n && module672.isObject(n)) {
      var f = n[u[0]];
      return 1 === u.length ? f : t(f, u.slice(1));
    }
  };

class l {
  constructor(u, l) {
    var v = this;
    module356.default(this, t);

    this.data = function () {
      return v._data;
    };

    this.get = function (t) {
      return t instanceof module712.default ? h(v._data, t._segments) : module672.deepGet(v._data, t, '.');
    };

    this._data = module722.parseNativeMap(u, l.data);
    this._metadata = l.metadata;
    this._ref = new module716.default(u, module728.default.fromName(l.path));
  }

  exists() {
    return undefined !== this._data;
  }

  id() {
    return this._ref.id;
  }

  metadata() {
    return this._metadata;
  }

  ref() {
    return this._ref;
  }
}

export default l;
