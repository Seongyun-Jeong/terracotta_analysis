var module22 = require('./22'),
  module208 = require('./208');

class _ {
  constructor() {
    module22(this, _);
  }

  start(t, n, o, _, s) {}

  stop() {
    if (this.__nativeId) module208.API.stopAnimation(this.__nativeId);
  }

  __getNativeAnimationConfig() {
    throw new Error('This animation type cannot be offloaded to native');
  }

  __debouncedOnEnd(t) {
    var n = this.__onEnd;
    this.__onEnd = null;
    if (n) n(t);
  }

  __startNativeAnimation(t) {
    t.__makeNative();

    this.__nativeId = module208.generateNewAnimationId();
    module208.API.startAnimatingNode(this.__nativeId, t.__getNativeTag(), this.__getNativeAnimationConfig(), this.__debouncedOnEnd.bind(this));
  }
}

module.exports = _;
