exports.createAnimatedDebug = function (t, u) {
  return u;
};

require('./405');

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module526 = require('./526'),
  module527 = require('./527');

require('./529');

require('./541');

(function (t) {
  function _(t, l) {
    var f;
    module356.default(this, _);
    (f = module358.default(
      this,
      module361.default(_).call(
        this,
        {
          type: 'debug',
          message: t,
          value: l.__nodeID,
        },
        [l]
      )
    ))._message = t;
    f._value = l;
    return f;
  }

  module362.default(_, t);
  module357.default(_, [
    {
      key: '__onEvaluate',
      value: function () {
        var t = module526.val(this._value);
        console.log(this._message, t);
        return t;
      },
    },
  ]);
})(module527.default);
