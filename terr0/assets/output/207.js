var module22 = require('./22'),
  module208 = require('./208'),
  _ = module208.API,
  module3 = require('./3'),
  v = 1;

class o {
  constructor() {
    module22(this, o);
    this._listeners = {};
  }

  __attach() {}

  __detach() {
    if (this.__isNative && null != this.__nativeTag) {
      module208.API.dropAnimatedNode(this.__nativeTag);
      this.__nativeTag = undefined;
    }
  }

  __getValue() {}

  __getAnimatedValue() {
    return this.__getValue();
  }

  __addChild(t) {}

  __removeChild(t) {}

  __getChildren() {
    return [];
  }
}

module.exports = o;
