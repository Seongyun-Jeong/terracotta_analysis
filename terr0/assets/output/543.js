exports.createAnimatedAlways = function (t) {
  return new module527(t);
};

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module527 = (function (t) {
    function _(t) {
      var u;
      module356.default(this, _);
      (u = module358.default(
        this,
        module361.default(_).call(
          this,
          {
            type: 'always',
            what: t.__nodeID,
          },
          [t]
        )
      ))._what = t;
      return u;
    }

    module362.default(_, t);
    module357.default(_, [
      {
        key: '__onEvaluate',
        value: function () {
          return 0;
        },
      },
    ]);
    return _;
  })(require('./527').default);
