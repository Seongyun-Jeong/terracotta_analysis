var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module530 = require('./530'),
  module569 = require('./569'),
  module524 = require('./524'),
  module535 = require('./535'),
  module523 = require('./523'),
  module572 = require('./572'),
  w = module523.default.inOut(module523.default.ease),
  p = (function (t) {
    function k(t) {
      var u;
      module356.default(this, k);
      (u = module358.default(this, module361.default(k).call(this)))._toValue = t.toValue;
      u._easing = undefined !== t.easing ? t.easing : w;
      u._duration = undefined !== t.duration ? t.duration : 500;
      return u;
    }

    module362.default(k, t);
    module357.default(
      k,
      [
        {
          key: 'start',
          value: function (t) {
            this._clock = new module535.default();
            var n = {
                finished: new module530.default(0),
                position: t,
                time: new module530.default(0),
                frameTime: new module530.default(0),
              },
              u = {
                duration: this._duration,
                toValue: this._toValue,
                easing: this._easing,
              };
            return module524.block([
              module524.cond(module524.clockRunning(this._clock), 0, [module524.startClock(this._clock)]),
              module569.default(this._clock, n, u),
              module524.cond(n.finished, module524.stopClock(this._clock)),
            ]);
          },
        },
        {
          key: 'stop',
          value: function () {},
        },
      ],
      [
        {
          key: 'getDefaultState',
          value: function () {
            return {
              position: new module530.default(0),
              finished: new module530.default(0),
              time: new module530.default(0),
              frameTime: new module530.default(0),
            };
          },
        },
      ]
    );
    return k;
  })(module572.default);

exports.default = p;
