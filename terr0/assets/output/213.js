require('./207');

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module206 = require('./206'),
  module205 = require('./205'),
  module209 = require('./209');

class c {
  constructor(_, u) {
    var s;
    module22(this, f);
    (s = module30(this, module33(f).call(this)))._a = 'number' == typeof _ ? new module205(_) : _;
    s._b = 'number' == typeof u ? new module205(u) : u;
    return s;
  }

  __makeNative() {
    this._a.__makeNative();

    this._b.__makeNative();

    module34(module33(f.prototype), '__makeNative', this).call(this);
  }

  __getValue() {
    return this._a.__getValue() + this._b.__getValue();
  }

  interpolate(t) {
    return new module206(this, t);
  }

  __attach() {
    this._a.__addChild(this);

    this._b.__addChild(this);
  }

  __detach() {
    this._a.__removeChild(this);

    this._b.__removeChild(this);

    module34(module33(f.prototype), '__detach', this).call(this);
  }

  __getNativeConfig() {
    return {
      type: 'addition',
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()],
    };
  }
}

module.exports = c;
