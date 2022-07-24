require('./43');

var module11 = require('./11'),
  module22 = require('./22'),
  module38 = require('./38'),
  module29 = require('./29'),
  module3 = require('./3'),
  v = new module38(),
  h = false,
  u = {},
  f = (function () {
    function o() {
      module22(this, o);
    }

    module23(o, null, [
      {
        key: 'set',
        value: function (t) {
          if (t && t.windowPhysicalPixels) {
            var s = (t = JSON.parse(JSON.stringify(t))).windowPhysicalPixels;
            t.window = {
              width: s.width / s.scale,
              height: s.height / s.scale,
              scale: s.scale,
              fontScale: s.fontScale,
            };
            var o = t.screenPhysicalPixels;
            t.screen = {
              width: o.width / o.scale,
              height: o.height / o.scale,
              scale: o.scale,
              fontScale: o.fontScale,
            };
            delete t.screenPhysicalPixels;
            delete t.windowPhysicalPixels;
          }

          module11(u, t);
          if (h)
            v.emit('change', {
              window: u.window,
              screen: u.screen,
            });
          else h = true;
        },
      },
      {
        key: 'get',
        value: function (n) {
          module3(u[n], 'No dimension set for key ' + n);
          return u[n];
        },
      },
      {
        key: 'addEventListener',
        value: function (n, t) {
          module3('change' === n, 'Trying to subscribe to unknown event: "%s"', n);
          v.addListener(n, t);
        },
      },
      {
        key: 'removeEventListener',
        value: function (n, t) {
          module3('change' === n, 'Trying to remove listener for unknown event: "%s"', n);
          v.removeListener(n, t);
        },
      },
    ]);
    return o;
  })(),
  w = globals.nativeExtensions && globals.nativeExtensions.DeviceInfo && globals.nativeExtensions.DeviceInfo.Dimensions,
  y = true;

if (!w) {
  w = require('./55').Dimensions;
  y = false;
}

module3(w, 'Either DeviceInfo native extension or DeviceInfo Native Module must be registered');
f.set(w);
if (!y)
  module29.addListener('didUpdateDimensions', function (n) {
    f.set(n);
  });
module.exports = f;
