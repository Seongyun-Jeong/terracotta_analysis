var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module531 = require('./531'),
  module362 = require('./362'),
  module536 = require('./536'),
  module527 = require('./527'),
  module526 = require('./526'),
  v = new ((function (t) {
    function s() {
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

    module362.default(s, t);
    module357.default(s, [
      {
        key: '__onEvaluate',
        value: function () {
          return +new Date();
        },
      },
      {
        key: '__attach',
        value: function () {
          module531.default(module361.default(s.prototype), '__attach', this).call(this);
          if (!this._frameCallback) this._frameCallback = requestAnimationFrame(this._runFrame);
        },
      },
      {
        key: '__detach',
        value: function () {
          if (this._frameCallback) {
            cancelAnimationFrame(this._frameCallback);
            this._frameCallback = null;
          }

          module531.default(module361.default(s.prototype), '__detach', this).call(this);
        },
      },
    ]);
    return s;
  })(module536.default))(),
  k = (function (t) {
    function s() {
      module356.default(this, s);
      return module358.default(
        this,
        module361.default(s).call(this, {
          type: 'clock',
        })
      );
    }

    module362.default(s, t);
    module357.default(s, [
      {
        key: '__onEvaluate',
        value: function () {
          return module526.val(v);
        },
      },
      {
        key: '__attach',
        value: function () {
          module531.default(module361.default(s.prototype), '__attach', this).call(this);
          if (this._started && !this._attached) v.__addChild(this);
          this._attached = true;
        },
      },
      {
        key: '__detach',
        value: function () {
          if (this._started && this._attached) v.__removeChild(this);
          this._attached = false;
          module531.default(module361.default(s.prototype), '__detach', this).call(this);
        },
      },
      {
        key: 'start',
        value: function () {
          if (!this._started && this._attached) v.__addChild(this);
          this._started = true;
        },
      },
      {
        key: 'stop',
        value: function () {
          if (this._started && this._attached) v.__removeChild(this);
          this._started = false;
        },
      },
      {
        key: 'isStarted',
        value: function () {
          return this._started;
        },
      },
    ]);
    return s;
  })(module527.default);

exports.default = k;
var y = v;
exports.clock = y;
