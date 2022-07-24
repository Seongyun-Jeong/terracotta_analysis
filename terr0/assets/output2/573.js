var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module530 = require('./530'),
  module572 = require('./572'),
  module574 = require('./574'),
  module570 = require('./570'),
  module524 = require('./524'),
  module535 = require('./535'),
  module191 = require('./191');

function b(s, t) {
  return undefined === s || null === s ? t : s;
}

var k = (function (s) {
  function c(s) {
    var n;

    if (
      (module356.default(this, c),
      ((n = module358.default(this, module361.default(c).call(this)))._overshootClamping = b(s.overshootClamping, false)),
      (n._restDisplacementThreshold = b(s.restDisplacementThreshold, 0.001)),
      (n._restSpeedThreshold = b(s.restSpeedThreshold, 0.001)),
      (n._initialVelocity = b(s.velocity, 0)),
      (n._lastVelocity = b(s.velocity, 0)),
      (n._toValue = s.toValue),
      (n._delay = b(s.delay, 0)),
      undefined !== s.stiffness || undefined !== s.damping || undefined !== s.mass)
    ) {
      module191.default(
        undefined === s.bounciness && undefined === s.speed && undefined === s.tension && undefined === s.friction,
        'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one'
      );
      n._stiffness = b(s.stiffness, 100);
      n._damping = b(s.damping, 10);
      n._mass = b(s.mass, 1);
    } else if (undefined !== s.bounciness || undefined !== s.speed) {
      module191.default(
        undefined === s.tension && undefined === s.friction && undefined === s.stiffness && undefined === s.damping && undefined === s.mass,
        'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one'
      );
      var f = module574.default.fromBouncinessAndSpeed(b(s.bounciness, 8), b(s.speed, 12));
      n._stiffness = f.stiffness;
      n._damping = f.damping;
      n._mass = 1;
    } else {
      var u = module574.default.fromOrigamiTensionAndFriction(b(s.tension, 40), b(s.friction, 7));
      n._stiffness = u.stiffness;
      n._damping = u.damping;
      n._mass = 1;
    }

    module191.default(n._stiffness > 0, 'Stiffness value must be greater than 0');
    module191.default(n._damping > 0, 'Damping value must be greater than 0');
    module191.default(n._mass > 0, 'Mass value must be greater than 0');
    return n;
  }

  module362.default(c, s);
  module357(
    c,
    [
      {
        key: 'start',
        value: function (s) {
          this._clock = new module535.default();
          var t = {
              finished: new module530.default(0),
              velocity: new module530.default(this._initialVelocity),
              position: s,
              time: new module530.default(0),
            },
            n = {
              damping: this._damping,
              mass: this._mass,
              stiffness: this._stiffness,
              toValue: this._toValue,
              overshootClamping: this._overshootClamping,
              restSpeedThreshold: this._restSpeedThreshold,
              restDisplacementThreshold: this._restDisplacementThreshold,
            };
          return module524.block([
            module524.cond(module524.clockRunning(this._clock), 0, [module524.startClock(this._clock)]),
            module570.default(this._clock, t, n),
            module524.cond(t.finished, module524.stopClock(this._clock)),
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
            velocity: new module530.default(0),
            time: new module530.default(0),
          };
        },
      },
    ]
  );
  return c;
})(module572.default);

export default k;
