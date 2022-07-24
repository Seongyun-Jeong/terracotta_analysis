var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module225 = require('./225'),
  module208 = require('./208').shouldUseNativeDriver;

class u {
  constructor(n) {
    var _;

    module22(this, v);
    (_ = module30(this, module33(v).call(this)))._deceleration = undefined !== n.deceleration ? n.deceleration : 0.998;
    _._velocity = n.velocity;
    _._useNativeDriver = module208(n);
    _.__isInteraction = undefined === n.isInteraction || n.isInteraction;
    _.__iterations = undefined !== n.iterations ? n.iterations : 1;
    return _;
  }

  __getNativeAnimationConfig() {
    return {
      type: 'decay',
      deceleration: this._deceleration,
      velocity: this._velocity,
      iterations: this.__iterations,
    };
  }

  start(t, n, s, o, _) {
    this.__active = true;
    this._lastValue = t;
    this._fromValue = t;
    this._onUpdate = n;
    this.__onEnd = s;
    this._startTime = Date.now();
    if (this._useNativeDriver) this.__startNativeAnimation(_);
    else this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
  }

  onUpdate() {
    var t = Date.now(),
      n = this._fromValue + (this._velocity / (1 - this._deceleration)) * (1 - Math.exp(-(1 - this._deceleration) * (t - this._startTime)));

    this._onUpdate(n);

    if (Math.abs(this._lastValue - n) < 0.1)
      this.__debouncedOnEnd({
        finished: true,
      });
    else {
      this._lastValue = n;
      if (this.__active) this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }

  stop() {
    module34(module33(v.prototype), 'stop', this).call(this);
    this.__active = false;
    globals.cancelAnimationFrame(this._animationFrame);

    this.__debouncedOnEnd({
      finished: false,
    });
  }
}

module.exports = u;
