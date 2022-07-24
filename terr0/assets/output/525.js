exports.createAnimatedCond = function (t, o, n) {
  return new s(module529.adapt(t), module529.adapt(o), undefined === n ? undefined : module529.adapt(n));
};

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module526 = require('./526'),
  module527 = require('./527'),
  module529 = require('./529'),
  s = (function (t) {
    function f(t, n, u) {
      var _;

      module356.default(this, f);
      (_ = module358.default(
        this,
        module361.default(f).call(
          this,
          {
            type: 'cond',
            cond: t.__nodeID,
            ifBlock: n.__nodeID,
            elseBlock: u ? u.__nodeID : undefined,
          },
          [t, n, u]
        )
      ))._condition = t;
      _._ifBlock = n;
      _._elseBlock = u;
      return _;
    }

    module362.default(f, t);
    module357.default(f, [
      {
        key: '__onEvaluate',
        value: function () {
          return module526.val(this._condition) ? module526.val(this._ifBlock) : undefined !== this._elseBlock ? module526.val(this._elseBlock) : undefined;
        },
      },
    ]);
    return f;
  })(module527.default);
