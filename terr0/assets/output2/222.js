var module46 = require('./46'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36');

function l(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var _ = Object.getOwnPropertySymbols(t);

    if (n)
      _ = _.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, _);
  }

  return o;
}

function h(n) {
  for (var o = 1; o < arguments.length; o++) {
    var _ = null != arguments[o] ? arguments[o] : {};

    if (o % 2)
      l(Object(_), true).forEach(function (o) {
        module46(n, o, _[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(_));
    else
      l(Object(_)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(_, t));
      });
  }

  return n;
}

require('./205');

var module207 = require('./207'),
  module208 = require('./208'),
  p = module208.generateNewAnimationId,
  y = module208.shouldUseNativeDriver;

class O {
  constructor(t, o, u, c, h) {
    var v;
    module22(this, l);
    (v = module30(this, module33(l).call(this)))._value = t;
    v._parent = o;
    v._animationClass = u;
    v._animationConfig = c;
    v._useNativeDriver = y(c);
    v._callback = h;

    v.__attach();

    return v;
  }

  __makeNative() {
    this.__isNative = true;

    this._parent.__makeNative();

    module34(module33(l.prototype), '__makeNative', this).call(this);

    this._value.__makeNative();
  }

  __getValue() {
    return this._parent.__getValue();
  }

  __attach() {
    this._parent.__addChild(this);

    if (this._useNativeDriver) this.__makeNative();
  }

  __detach() {
    this._parent.__removeChild(this);

    module34(module33(l.prototype), '__detach', this).call(this);
  }

  update() {
    this._value.animate(
      new this._animationClass(
        h({}, this._animationConfig, {
          toValue: this._animationConfig.toValue.__getValue(),
        })
      ),
      this._callback
    );
  }

  __getNativeConfig() {
    var t = new this._animationClass(
      h({}, this._animationConfig, {
        toValue: undefined,
      })
    ).__getNativeAnimationConfig();

    return {
      type: 'tracking',
      animationId: p(),
      animationConfig: t,
      toValue: this._parent.__getNativeTag(),
      value: this._value.__getNativeTag(),
    };
  }
}

module.exports = O;
