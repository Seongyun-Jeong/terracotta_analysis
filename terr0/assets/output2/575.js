var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module572 = require('./572'),
  module568 = require('./568'),
  module524 = require('./524'),
  module535 = require('./535'),
  module530 = require('./530'),
  k = (function (t) {
    function f(t) {
      var n;
      module356.default(this, f);
      (n = module358.default(this, module361.default(f).call(this)))._deceleration = undefined !== t.deceleration ? t.deceleration : 0.998;
      n._velocity = t.velocity;
      return n;
    }

    module362.default(f, t);
    module357(
      f,
      [
        {
          key: 'start',
          value: function (t) {
            this._clock = new module535.default();
            var l = {
                finished: new module530.default(0),
                velocity: new module530.default(this._velocity),
                position: t,
                time: new module530.default(0),
              },
              n = {
                deceleration: this._deceleration,
              };
            return module524.block([
              module524.cond(module524.clockRunning(this._clock), 0, [module524.startClock(this._clock)]),
              module568.default(this._clock, l, n),
              module524.cond(l.finished, module524.stopClock(this._clock)),
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
              velocity: new module530.default(0),
            };
          },
        },
      ]
    );
    return f;
  })(module572.default);

export default k;
