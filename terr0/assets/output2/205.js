var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module206 = require('./206'),
  module209 = require('./209'),
  module210 = require('./210'),
  module208 = require('./208').API;

function v(t) {
  var n = new Set();
  !(function t(s) {
    if ('function' == typeof s.update) n.add(s);
    else s.__getChildren().forEach(t);
  })(t);
  n.forEach(function (t) {
    return t.update();
  });
}

class p {
  constructor(n) {
    var _;

    module22(this, k);
    (_ = module30(this, module33(k).call(this)))._startingValue = _._value = n;
    _._offset = 0;
    _._animation = null;
    return _;
  }

  __detach() {
    this.stopAnimation();
    module34(module33(k.prototype), '__detach', this).call(this);
  }

  __getValue() {
    return this._value + this._offset;
  }

  setValue(t) {
    if (this._animation) {
      this._animation.stop();

      this._animation = null;
    }

    this._updateValue(t, !this.__isNative);

    if (this.__isNative) module208.setAnimatedNodeValue(this.__getNativeTag(), t);
  }

  setOffset(t) {
    this._offset = t;
    if (this.__isNative) module208.setAnimatedNodeOffset(this.__getNativeTag(), t);
  }

  flattenOffset() {
    this._value += this._offset;
    this._offset = 0;
    if (this.__isNative) module208.flattenAnimatedNodeOffset(this.__getNativeTag());
  }

  extractOffset() {
    this._offset += this._value;
    this._value = 0;
    if (this.__isNative) module208.extractAnimatedNodeOffset(this.__getNativeTag());
  }

  stopAnimation(t) {
    this.stopTracking();
    if (this._animation) this._animation.stop();
    this._animation = null;
    if (t) t(this.__getValue());
  }

  resetAnimation(t) {
    this.stopAnimation(t);
    this._value = this._startingValue;
  }

  _onAnimatedValueUpdateReceived(t) {
    this._updateValue(t, false);
  }

  interpolate(t) {
    return new module206(this, t);
  }

  animate(t, n) {
    var s = this,
      u = null;
    if (t.__isInteraction) u = module210.createInteractionHandle();
    var _ = this._animation;
    if (this._animation) this._animation.stop();
    this._animation = t;
    t.start(
      this._value,
      function (t) {
        s._updateValue(t, true);
      },
      function (t) {
        s._animation = null;
        if (null !== u) module210.clearInteractionHandle(u);
        if (n) n(t);
      },
      _,
      this
    );
  }

  stopTracking() {
    if (this._tracking) this._tracking.__detach();
    this._tracking = null;
  }

  track(t) {
    this.stopTracking();
    this._tracking = t;
  }

  _updateValue(t, n) {
    this._value = t;
    if (n) v(this);
    module34(module33(k.prototype), '__callListeners', this).call(this, this.__getValue());
  }

  __getNativeConfig() {
    return {
      type: 'value',
      value: this._value,
      offset: this._offset,
    };
  }
}

module.exports = p;
