var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module207 = require('./207'),
  module209 = require('./209'),
  module208 = require('./208');

class h {
  constructor(n) {
    var f;
    module22(this, l);
    (f = module30(this, module33(l).call(this)))._transforms = n;
    return f;
  }

  __makeNative() {
    this._transforms.forEach(function (t) {
      for (var n in t) {
        var o = t[n];
        if (o instanceof module207) o.__makeNative();
      }
    });

    module34(module33(l.prototype), '__makeNative', this).call(this);
  }

  __getValue() {
    return this._transforms.map(function (t) {
      var n = {};

      for (var o in t) {
        var s = t[o];
        n[o] = s instanceof module207 ? s.__getValue() : s;
      }

      return n;
    });
  }

  __getAnimatedValue() {
    return this._transforms.map(function (t) {
      var n = {};

      for (var o in t) {
        var s = t[o];
        n[o] = s instanceof module207 ? s.__getAnimatedValue() : s;
      }

      return n;
    });
  }

  __attach() {
    var t = this;

    this._transforms.forEach(function (n) {
      for (var o in n) {
        var s = n[o];
        if (s instanceof module207) s.__addChild(t);
      }
    });
  }

  __detach() {
    var t = this;

    this._transforms.forEach(function (n) {
      for (var o in n) {
        var s = n[o];
        if (s instanceof module207) s.__removeChild(t);
      }
    });

    module34(module33(l.prototype), '__detach', this).call(this);
  }

  __getNativeConfig() {
    var t = [];

    this._transforms.forEach(function (n) {
      for (var o in n) {
        var s = n[o];
        if (s instanceof module207)
          t.push({
            type: 'animated',
            property: o,
            nodeTag: s.__getNativeTag(),
          });
        else
          t.push({
            type: 'static',
            property: o,
            value: module208.transformDataType(s),
          });
      }
    });

    module208.validateTransform(t);
    return {
      type: 'transform',
      transforms: t,
    };
  }
}

module.exports = h;
