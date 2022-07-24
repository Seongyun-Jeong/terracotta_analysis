require('./205');

require('./223');

import module3 from './3';

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module225 = require('./225'),
  module227 = require('./227'),
  module208 = require('./208').shouldUseNativeDriver;

function v(t, s) {
  return undefined === t || null === t ? s : t;
}

class p {
  constructor(s) {
    var h;

    if (
      (module22(this, y),
      ((h = module30(this, module33(y).call(this)))._overshootClamping = v(s.overshootClamping, false)),
      (h._restDisplacementThreshold = v(s.restDisplacementThreshold, 0.001)),
      (h._restSpeedThreshold = v(s.restSpeedThreshold, 0.001)),
      (h._initialVelocity = v(s.velocity, 0)),
      (h._lastVelocity = v(s.velocity, 0)),
      (h._toValue = s.toValue),
      (h._delay = v(s.delay, 0)),
      (h._useNativeDriver = module208(s)),
      (h.__isInteraction = undefined === s.isInteraction || s.isInteraction),
      (h.__iterations = undefined !== s.iterations ? s.iterations : 1),
      undefined !== s.stiffness || undefined !== s.damping || undefined !== s.mass)
    ) {
      module3(
        undefined === s.bounciness && undefined === s.speed && undefined === s.tension && undefined === s.friction,
        'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one'
      );
      h._stiffness = v(s.stiffness, 100);
      h._damping = v(s.damping, 10);
      h._mass = v(s.mass, 1);
    } else if (undefined !== s.bounciness || undefined !== s.speed) {
      module3(
        undefined === s.tension && undefined === s.friction && undefined === s.stiffness && undefined === s.damping && undefined === s.mass,
        'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one'
      );

      var _ = module227.fromBouncinessAndSpeed(v(s.bounciness, 8), v(s.speed, 12));

      h._stiffness = _.stiffness;
      h._damping = _.damping;
      h._mass = 1;
    } else {
      var l = module227.fromOrigamiTensionAndFriction(v(s.tension, 40), v(s.friction, 7));
      h._stiffness = l.stiffness;
      h._damping = l.damping;
      h._mass = 1;
    }

    module3(h._stiffness > 0, 'Stiffness value must be greater than 0');
    module3(h._damping > 0, 'Damping value must be greater than 0');
    module3(h._mass > 0, 'Mass value must be greater than 0');
    return h;
  }

  __getNativeAnimationConfig() {
    return {
      type: 'spring',
      overshootClamping: this._overshootClamping,
      restDisplacementThreshold: this._restDisplacementThreshold,
      restSpeedThreshold: this._restSpeedThreshold,
      stiffness: this._stiffness,
      damping: this._damping,
      mass: this._mass,
      initialVelocity: v(this._initialVelocity, this._lastVelocity),
      toValue: this._toValue,
      iterations: this.__iterations,
    };
  }

  start(t, s, n, o, h) {
    var _ = this;

    if (
      ((this.__active = true),
      (this._startPosition = t),
      (this._lastPosition = this._startPosition),
      (this._onUpdate = s),
      (this.__onEnd = n),
      (this._lastTime = Date.now()),
      (this._frameTime = 0),
      o instanceof y)
    ) {
      var l = o.getInternalState();
      this._lastPosition = l.lastPosition;
      this._lastVelocity = l.lastVelocity;
      this._initialVelocity = this._lastVelocity;
      this._lastTime = l.lastTime;
    }

    var f = function () {
      if (_._useNativeDriver) _.__startNativeAnimation(h);
      else _.onUpdate();
    };

    if (this._delay) this._timeout = setTimeout(f, this._delay);
    else f();
  }

  getInternalState() {
    return {
      lastPosition: this._lastPosition,
      lastVelocity: this._lastVelocity,
      lastTime: this._lastTime,
    };
  }

  onUpdate() {
    var t = Date.now();
    if (t > this._lastTime + 64) t = this._lastTime + 64;
    var s = (t - this._lastTime) / 1e3;
    this._frameTime += s;

    var n = this._damping,
      o = this._mass,
      h = this._stiffness,
      _ = -this._initialVelocity,
      l = n / (2 * Math.sqrt(h * o)),
      f = Math.sqrt(h / o),
      c = f * Math.sqrt(1 - l * l),
      u = this._toValue - this._startPosition,
      v = 0,
      p = 0,
      y = this._frameTime;

    if (l < 1) {
      var V = Math.exp(-l * f * y);
      v = this._toValue - V * (((_ + l * f * u) / c) * Math.sin(c * y) + u * Math.cos(c * y));
      p = l * f * V * ((Math.sin(c * y) * (_ + l * f * u)) / c + u * Math.cos(c * y)) - V * (Math.cos(c * y) * (_ + l * f * u) - c * u * Math.sin(c * y));
    } else {
      var T = Math.exp(-f * y);
      v = this._toValue - T * (u + (_ + f * u) * y);
      p = T * (_ * (y * f - 1) + y * u * (f * f));
    }

    if (((this._lastTime = t), (this._lastPosition = v), (this._lastVelocity = p), this._onUpdate(v), this.__active)) {
      var b = false;
      if (this._overshootClamping && 0 !== this._stiffness) b = this._startPosition < this._toValue ? v > this._toValue : v < this._toValue;

      var M = Math.abs(p) <= this._restSpeedThreshold,
        D = true;

      if ((0 !== this._stiffness && (D = Math.abs(this._toValue - v) <= this._restDisplacementThreshold), b || (M && D))) {
        if (0 !== this._stiffness) {
          this._lastPosition = this._toValue;
          this._lastVelocity = 0;

          this._onUpdate(this._toValue);
        }

        return void this.__debouncedOnEnd({
          finished: true,
        });
      }

      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }

  stop() {
    module34(module33(y.prototype), 'stop', this).call(this);
    this.__active = false;
    clearTimeout(this._timeout);
    globals.cancelAnimationFrame(this._animationFrame);

    this.__debouncedOnEnd({
      finished: false,
    });
  }
}

module.exports = p;
