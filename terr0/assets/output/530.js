var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module531 = require('./531'),
  module362 = require('./362'),
  module527 = require('./527'),
  module526 = require('./526'),
  module528 = require('./528');

function v(t) {
  return null === t || undefined === t || 'string' == typeof t ? t : Number(t);
}

var p = (function (t) {
  function f(t) {
    var u;
    module356.default(this, f);
    (u = module358.default(
      this,
      module361.default(f).call(this, {
        type: 'value',
        value: v(t),
      })
    ))._startingValue = u._value = t;
    u._animation = null;
    return u;
  }

  module362.default(f, t);
  module357.default(f, [
    {
      key: '__detach',
      value: function () {
        var t = this;
        module528.default.getValue(this.__nodeID, function (n) {
          return (t.__nodeConfig.value = n);
        });

        this.__detachAnimation(this._animation);

        module531.default(module361.default(f.prototype), '__detach', this).call(this);
      },
    },
    {
      key: '__detachAnimation',
      value: function (t) {
        if (t) t.__detach();
        if (this._animation === t) this._animation = null;
      },
    },
    {
      key: '__attachAnimation',
      value: function (t) {
        this.__detachAnimation(this._animation);

        this._animation = t;
      },
    },
    {
      key: '__onEvaluate',
      value: function () {
        if (this.__inputNodes && this.__inputNodes.length) this.__inputNodes.forEach(module526.val);
        return this._value + this._offset;
      },
    },
    {
      key: '_updateValue',
      value: function (t) {
        this._value = t;

        this.__forceUpdateCache(t);
      },
    },
  ]);
  return f;
})(module527.default);

exports.default = p;
