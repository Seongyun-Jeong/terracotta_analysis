require('./207');

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module206 = require('./206'),
  module209 = require('./209');

class c {
  constructor(u, n) {
    var h;
    module22(this, v);
    (h = module30(this, module33(v).call(this)))._a = u;
    h._modulus = n;
    return h;
  }

  __makeNative() {
    this._a.__makeNative();

    module34(module33(v.prototype), '__makeNative', this).call(this);
  }

  __getValue() {
    return ((this._a.__getValue() % this._modulus) + this._modulus) % this._modulus;
  }

  interpolate(t) {
    return new module206(this, t);
  }

  __attach() {
    this._a.__addChild(this);
  }

  __detach() {
    this._a.__removeChild(this);

    module34(module33(v.prototype), '__detach', this).call(this);
  }

  __getNativeConfig() {
    return {
      type: 'modulus',
      input: this._a.__getNativeTag(),
      modulus: this._modulus,
    };
  }
}

module.exports = c;
