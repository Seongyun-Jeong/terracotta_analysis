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
  constructor(_, s) {
    var o;
    module22(this, f);
    (o = module30(this, module33(f).call(this)))._a = 'number' == typeof _ ? new module205(_) : _;
    o._b = 'number' == typeof s ? new module205(s) : s;
    return o;
  }

  __makeNative() {
    this._a.__makeNative();

    this._b.__makeNative();

    module34(module33(f.prototype), '__makeNative', this).call(this);
  }

  __getValue() {
    var t = this._a.__getValue(),
      _ = this._b.__getValue();

    if (0 === _) console.error('Detected division by zero in AnimatedDivision');
    return t / _;
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
      type: 'division',
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()],
    };
  }
}

module.exports = c;
