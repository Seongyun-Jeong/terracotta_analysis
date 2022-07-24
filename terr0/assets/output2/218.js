var module46 = require('./46'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36');

function p(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function h(n) {
  for (var o = 1; o < arguments.length; o++) {
    var s = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      p(Object(s), true).forEach(function (o) {
        module46(n, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(s));
    else
      p(Object(s)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(s, t));
      });
  }

  return n;
}

import module3 from './3';

var module204 = require('./204').AnimatedEvent,
  module207 = require('./207'),
  module219 = require('./219'),
  module208 = require('./208'),
  module78 = require('./78');

class N {
  constructor(t, o) {
    var module34;
    module22(this, p);
    module34 = module30(this, module33(p).call(this));
    if (t.style)
      t = h({}, t, {
        style: new module219(t.style),
      });
    module34._props = t;
    module34._callback = o;

    module34.__attach();

    return module34;
  }

  __getValue() {
    var t = {};

    for (var n in this._props) {
      var o = this._props[n];
      if (o instanceof module207) {
        if (!o.__isNative || o instanceof module219) t[n] = o.__getValue();
      } else t[n] = o instanceof module204 ? o.__getHandler() : o;
    }

    return t;
  }

  __getAnimatedValue() {
    var t = {};

    for (var n in this._props) {
      var o = this._props[n];
      if (o instanceof module207) t[n] = o.__getAnimatedValue();
    }

    return t;
  }

  __attach() {
    for (var t in this._props) {
      var n = this._props[t];
      if (n instanceof module207) n.__addChild(this);
    }
  }

  __detach() {
    for (var t in (this.__isNative && this._animatedView && this.__disconnectAnimatedView(), this._props)) {
      var n = this._props[t];
      if (n instanceof module207) n.__removeChild(this);
    }

    module34(module33(p.prototype), '__detach', this).call(this);
  }

  update() {
    this._callback();
  }

  __makeNative() {
    if (!this.__isNative) {
      for (var t in ((this.__isNative = true), this._props)) {
        var n = this._props[t];
        if (n instanceof module207) n.__makeNative();
      }

      if (this._animatedView) this.__connectAnimatedView();
    }
  }

  setNativeView(t) {
    if (this._animatedView !== t) {
      this._animatedView = t;
      if (this.__isNative) this.__connectAnimatedView();
    }
  }

  __connectAnimatedView() {
    module3(this.__isNative, 'Expected node to be marked as "native"');
    var t = module78.findNodeHandle(this._animatedView);
    module3(null != t, 'Unable to locate attached view in the native tree');
    module208.API.connectAnimatedNodeToView(this.__getNativeTag(), t);
  }

  __disconnectAnimatedView() {
    module3(this.__isNative, 'Expected node to be marked as "native"');
    var t = module78.findNodeHandle(this._animatedView);
    module3(null != t, 'Unable to locate attached view in the native tree');
    module208.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), t);
  }

  __getNativeConfig() {
    var t = {};

    for (var n in this._props) {
      var o = this._props[n];
      if (o instanceof module207) t[n] = o.__getNativeTag();
    }

    return {
      type: 'props',
      props: t,
    };
  }
}

module.exports = N;
