var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module531 = require('./531'),
  module362 = require('./362'),
  module536 = require('./536'),
  module527 = require('./527'),
  module526 = require('./526');

class k {
  constructor() {
    module356.default(this, s);
    return module358.default(
      this,
      module361.default(s).call(this, {
        type: 'clock',
      })
    );
  }

  __onEvaluate() {
    return module526.val(v);
  }

  __attach() {
    module531.default(module361.default(s.prototype), '__attach', this).call(this);
    if (this._started && !this._attached) v.__addChild(this);
    this._attached = true;
  }

  __detach() {
    if (this._started && this._attached) v.__removeChild(this);
    this._attached = false;
    module531.default(module361.default(s.prototype), '__detach', this).call(this);
  }

  start() {
    if (!this._started && this._attached) v.__addChild(this);
    this._started = true;
  }

  stop() {
    if (this._started && this._attached) v.__removeChild(this);
    this._started = false;
  }

  isStarted() {
    return this._started;
  }
}

class v {
  constructor() {
    var t;
    module356.default(this, s);

    (t = module358.default(
      this,
      module361.default(s).call(this, {
        type: 'MAIN_CLOCK',
      })
    ))._runFrame = function () {
      t._updateValue(0);

      if (t.__children.length > 0) t._frameCallback = requestAnimationFrame(t._runFrame);
    };

    return t;
  }

  __onEvaluate() {
    return +new Date();
  }

  __attach() {
    module531.default(module361.default(s.prototype), '__attach', this).call(this);
    if (!this._frameCallback) this._frameCallback = requestAnimationFrame(this._runFrame);
  }

  __detach() {
    if (this._frameCallback) {
      cancelAnimationFrame(this._frameCallback);
      this._frameCallback = null;
    }

    module531.default(module361.default(s.prototype), '__detach', this).call(this);
  }
}

export default k;
var y = v;
exports.clock = y;
