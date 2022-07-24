var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module533 = require('./533'),
  module537 = require('./537'),
  module530 = require('./530'),
  module540 = require('./540'),
  _ = (function (t) {
    function h() {
      module356.default(this, h);
      return module358.default(this, module361.default(h).apply(this, arguments));
    }

    module362.default(h, t);
    module357.default(h, [
      {
        key: 'setValue',
        value: function (t) {
          this.__detachAnimation(this._animation);

          module540.evaluateOnce(module533.createAnimatedSet(this, t), this);
        },
      },
      {
        key: 'interpolate',
        value: function (t) {
          return module537.default(this, t);
        },
      },
    ]);
    return h;
  })(module530.default);

exports.default = _;
