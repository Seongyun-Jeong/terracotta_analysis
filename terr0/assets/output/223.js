var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module205 = require('./205'),
  module209 = require('./209'),
  module3 = require('./3'),
  h = 1;

class x {
  constructor(s) {
    var l;
    module22(this, c);
    l = module30(this, module33(c).call(this));
    var o = s || {
      x: 0,
      y: 0,
    };

    if ('number' == typeof o.x && 'number' == typeof o.y) {
      l.x = new module205(o.x);
      l.y = new module205(o.y);
    } else {
      module3(o.x instanceof module205 && o.y instanceof module205, 'AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.');
      l.x = o.x;
      l.y = o.y;
    }

    l._listeners = {};
    return l;
  }

  setValue(t) {
    this.x.setValue(t.x);
    this.y.setValue(t.y);
  }

  setOffset(t) {
    this.x.setOffset(t.x);
    this.y.setOffset(t.y);
  }

  flattenOffset() {
    this.x.flattenOffset();
    this.y.flattenOffset();
  }

  extractOffset() {
    this.x.extractOffset();
    this.y.extractOffset();
  }

  __getValue() {
    return {
      x: this.x.__getValue(),
      y: this.y.__getValue(),
    };
  }

  resetAnimation(t) {
    this.x.resetAnimation();
    this.y.resetAnimation();
    if (t) t(this.__getValue());
  }

  stopAnimation(t) {
    this.x.stopAnimation();
    this.y.stopAnimation();
    if (t) t(this.__getValue());
  }

  addListener(t) {
    var s = this,
      n = String(h++),
      u = function (n) {
        n.value;
        t(s.__getValue());
      };

    this._listeners[n] = {
      x: this.x.addListener(u),
      y: this.y.addListener(u),
    };
    return n;
  }

  removeListener(t) {
    this.x.removeListener(this._listeners[t].x);
    this.y.removeListener(this._listeners[t].y);
    delete this._listeners[t];
  }

  removeAllListeners() {
    this.x.removeAllListeners();
    this.y.removeAllListeners();
    this._listeners = {};
  }

  getLayout() {
    return {
      left: this.x,
      top: this.y,
    };
  }

  getTranslateTransform() {
    return [
      {
        translateX: this.x,
      },
      {
        translateY: this.y,
      },
    ];
  }
}

module.exports = x;
