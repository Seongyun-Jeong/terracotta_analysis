require('./207');

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module206 = require('./206'),
  module209 = require('./209');

class c {
  constructor(_, h, s) {
    var l;
    module22(this, o);
    (l = module30(this, module33(o).call(this)))._a = _;
    l._min = h;
    l._max = s;
    l._value = l._lastValue = l._a.__getValue();
    return l;
  }

  __makeNative() {
    this._a.__makeNative();

    module34(module33(o.prototype), '__makeNative', this).call(this);
  }

  interpolate(t) {
    return new module206(this, t);
  }

  __getValue() {
    var t = this._a.__getValue(),
      _ = t - this._lastValue;

    this._lastValue = t;
    this._value = ((this._value + _) ** this._min) ** this._max;
    return this._value;
  }

  __attach() {
    this._a.__addChild(this);
  }

  __detach() {
    this._a.__removeChild(this);

    module34(module33(o.prototype), '__detach', this).call(this);
  }

  __getNativeConfig() {
    return {
      type: 'diffclamp',
      input: this._a.__getNativeTag(),
      min: this._min,
      max: this._max,
    };
  }
}

module.exports = c;
