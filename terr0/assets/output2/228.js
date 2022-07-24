require('./205');

require('./223');

var t,
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module34 = require('./34'),
  module36 = require('./36'),
  module225 = require('./225'),
  module208 = require('./208').shouldUseNativeDriver;

function c() {
  if (!t) {
    var module229 = require('./229');

    t = module229.inOut(module229.ease);
  }

  return t;
}

class f {
  constructor(t) {
    var s;
    module22(this, f);
    (s = module30(this, module33(f).call(this)))._toValue = t.toValue;
    s._easing = undefined !== t.easing ? t.easing : c();
    s._duration = undefined !== t.duration ? t.duration : 500;
    s._delay = undefined !== t.delay ? t.delay : 0;
    s.__iterations = undefined !== t.iterations ? t.iterations : 1;
    s.__isInteraction = undefined === t.isInteraction || t.isInteraction;
    s._useNativeDriver = module208(t);
    return s;
  }

  __getNativeAnimationConfig() {
    for (var t = [], n = 0; n < this._duration; n += 16.666666666666668) t.push(this._easing(n / this._duration));

    t.push(this._easing(1));
    return {
      type: 'frames',
      frames: t,
      toValue: this._toValue,
      iterations: this.__iterations,
    };
  }

  start(t, n, s, o, _) {
    var u = this;
    this.__active = true;
    this._fromValue = t;
    this._onUpdate = n;
    this.__onEnd = s;

    var h = function () {
      if (0 !== u._duration || u._useNativeDriver) {
        u._startTime = Date.now();
        if (u._useNativeDriver) u.__startNativeAnimation(_);
        else u._animationFrame = requestAnimationFrame(u.onUpdate.bind(u));
      } else {
        u._onUpdate(u._toValue);

        u.__debouncedOnEnd({
          finished: true,
        });
      }
    };

    if (this._delay) this._timeout = setTimeout(h, this._delay);
    else h();
  }

  onUpdate() {
    var t = Date.now();

    if (t >= this._startTime + this._duration) {
      if (0 === this._duration) this._onUpdate(this._toValue);
      else this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue));
      return void this.__debouncedOnEnd({
        finished: true,
      });
    }

    this._onUpdate(this._fromValue + this._easing((t - this._startTime) / this._duration) * (this._toValue - this._fromValue));

    if (this.__active) this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
  }

  stop() {
    module34(module33(f.prototype), 'stop', this).call(this);
    this.__active = false;
    clearTimeout(this._timeout);
    globals.cancelAnimationFrame(this._animationFrame);

    this.__debouncedOnEnd({
      finished: false,
    });
  }
}

module.exports = f;
