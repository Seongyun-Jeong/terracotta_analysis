require('./43');

require('./44');

var module8 = require('./8'),
  module28 = require('./28'),
  module3 = require('./3'),
  s = module8.UIManager,
  c = {};

module3(s, 'UIManager is undefined. The native module config is probably incorrect.');
s.__takeSnapshot = s.takeSnapshot;

s.takeSnapshot = function () {
  module3(false, 'UIManager.takeSnapshot should not be called directly. Use ReactNative.takeSnapshot instead.');
};

var f = new Set();

function u(o) {
  var f = s[o];

  if (f.Manager) {
    c[o] = f;
    module28(f, 'Constants', {
      get: function () {
        var t = module8[f.Manager],
          o = {};
        if (t)
          Object.keys(t).forEach(function (n) {
            var s = t[n];
            if ('function' != typeof s) o[n] = s;
          });
        return o;
      },
    });
    module28(f, 'Commands', {
      get: function () {
        var t = module8[f.Manager],
          o = {},
          s = 0;
        if (t)
          Object.keys(t).forEach(function (n) {
            if ('function' == typeof t[n]) o[n] = s++;
          });
        return o;
      },
    });
  }
}

if (
  ((s.getViewManagerConfig = function (n) {
    if (undefined === c[n] && s.getConstantsForViewManager)
      try {
        c[n] = s.getConstantsForViewManager(n);
      } catch (t) {
        c[n] = null;
      }
    var t = c[n];
    if (t) return t;

    if (s.lazilyLoadView && !f.has(n)) {
      var o = s.lazilyLoadView(n);
      f.add(n);

      if (o.viewConfig) {
        s[n] = o.viewConfig;
        u(n);
      }
    }

    return c[n];
  }),
  s.ViewManagerNames)
) {
  (globals.__residual
    ? globals.__residual
    : function (n, t) {
        for (var o = arguments.length, s = new Array(o > 2 ? o - 2 : 0), c = 2; c < o; c++) s[c - 2] = arguments[c];

        return t.apply(undefined, s);
      })(
    'void',
    function (n, t) {
      n.ViewManagerNames.forEach(function (o) {
        t(n, o, {
          get: function () {
            return n.getConstantsForViewManager(o);
          },
        });
      });
    },
    s,
    module28
  );
  if (globals.__makePartial) globals.__makePartial(s);
}

module.exports = s;
