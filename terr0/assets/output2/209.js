var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module207 = require('./207'),
  module208 = require('./208');

class v {
  constructor() {
    var _;

    module22(this, u);
    (_ = module30(this, module33(u).call(this)))._children = [];
    return _;
  }

  __makeNative() {
    if (!this.__isNative) {
      this.__isNative = true;

      var t = this._children,
        _ = Array.isArray(t),
        n = 0;

      for (t = _ ? t : t['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
        var l;

        if (_) {
          if (n >= t.length) break;
          l = t[n++];
        } else {
          if ((n = t.next()).done) break;
          l = n.value;
        }

        var o = l;

        o.__makeNative();

        module208.API.connectAnimatedNodes(this.__getNativeTag(), o.__getNativeTag());
      }
    }

    module34(module33(u.prototype), '__makeNative', this).call(this);
  }

  __addChild(t) {
    if (0 === this._children.length) this.__attach();

    this._children.push(t);

    if (this.__isNative) {
      t.__makeNative();

      module208.API.connectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag());
    }
  }

  __removeChild(t) {
    var _ = this._children.indexOf(t);

    if (-1 !== _) {
      if (this.__isNative && t.__isNative) module208.API.disconnectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag());

      this._children.splice(_, 1);

      if (0 === this._children.length) this.__detach();
    } else console.warn("Trying to remove a child that doesn't exist");
  }

  __getChildren() {
    return this._children;
  }

  __callListeners(t) {
    if ((module34(module33(u.prototype), '__callListeners', this).call(this, t), !this.__isNative)) {
      var _ = this._children,
        n = Array.isArray(_),
        l = 0;

      for (_ = n ? _ : _['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
        var o;

        if (n) {
          if (l >= _.length) break;
          o = _[l++];
        } else {
          if ((l = _.next()).done) break;
          o = l.value;
        }

        var c = o;
        if (c.__getValue) c.__callListeners(c.__getValue());
      }
    }
  }
}

module.exports = v;
