var module46 = require('./46'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36');

function c(t, n) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n)
      l = l.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    s.push.apply(s, l);
  }

  return s;
}

function u(n) {
  for (var s = 1; s < arguments.length; s++) {
    var l = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      c(Object(l), true).forEach(function (s) {
        module46(n, s, l[s]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(l));
    else
      c(Object(l)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(l, t));
      });
  }

  return n;
}

var module207 = require('./207'),
  module220 = require('./220'),
  module209 = require('./209'),
  module208 = require('./208'),
  module74 = require('./74');

class O {
  constructor(t) {
    var module23;
    module22(this, c);
    module23 = module30(this, module33(c).call(this));
    if ((t = module74(t) || {}).transform)
      t = u({}, t, {
        transform: new module220(t.transform),
      });
    module23._style = t;
    return module23;
  }

  _walkStyleAndGetValues(t) {
    var n = {};

    for (var s in t) {
      var l = t[s];
      if (l instanceof module207) {
        if (!l.__isNative) n[s] = l.__getValue();
      } else if (l && !Array.isArray(l) && 'object' == typeof l) n[s] = this._walkStyleAndGetValues(l);
      else n[s] = l;
    }

    return n;
  }

  __getValue() {
    return this._walkStyleAndGetValues(this._style);
  }

  _walkStyleAndGetAnimatedValues(t) {
    var n = {};

    for (var s in t) {
      var l = t[s];
      if (l instanceof module207) n[s] = l.__getAnimatedValue();
      else if (l && !Array.isArray(l) && 'object' == typeof l) n[s] = this._walkStyleAndGetAnimatedValues(l);
    }

    return n;
  }

  __getAnimatedValue() {
    return this._walkStyleAndGetAnimatedValues(this._style);
  }

  __attach() {
    for (var t in this._style) {
      var n = this._style[t];
      if (n instanceof module207) n.__addChild(this);
    }
  }

  __detach() {
    for (var t in this._style) {
      var n = this._style[t];
      if (n instanceof module207) n.__removeChild(this);
    }

    module34(module33(c.prototype), '__detach', this).call(this);
  }

  __makeNative() {
    for (var t in this._style) {
      var n = this._style[t];
      if (n instanceof module207) n.__makeNative();
    }

    module34(module33(c.prototype), '__makeNative', this).call(this);
  }

  __getNativeConfig() {
    var t = {};

    for (var n in this._style) this._style[n] instanceof module207 && (t[n] = this._style[n].__getNativeTag());

    module208.validateStyles(t);
    return {
      type: 'style',
      style: t,
    };
  }
}

module.exports = O;
