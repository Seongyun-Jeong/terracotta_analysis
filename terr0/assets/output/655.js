var module404 = require('./404');

var module284 = require('./284'),
  module2 = require('./2'),
  module634 = module404(require('./634')),
  u = module2.Dimensions.get('window'),
  f = u.height,
  c = u.width;

exports.initializeAnimations = function () {
  var t = function (t, n, s) {
      return {
        from: module284.default({}, t, n),
        to: module284.default({}, t, s),
      };
    },
    n = {
      slideInDown: t('translateY', -f, 0),
      slideInUp: t('translateY', f, 0),
      slideInLeft: t('translateX', -c, 0),
      slideInRight: t('translateX', c, 0),
      slideOutDown: t('translateY', 0, f),
      slideOutUp: t('translateY', 0, -f),
      slideOutLeft: t('translateX', 0, -c),
      slideOutRight: t('translateX', 0, c),
    };

  module634.initializeRegistryWithDefinitions(n);
};

exports.buildAnimations = function (t) {
  var n = t.animationIn,
    o = t.animationOut,
    s = n,
    l = o;

  if (O(n)) {
    var u = JSON.stringify(n);
    v(u, n);
    s = u;
  }

  if (O(o)) {
    var f = JSON.stringify(o);
    v(f, o);
    l = f;
  }

  return {
    animationIn: s,
    animationOut: l,
  };
};

var v = function (t, n) {
    module634.registerAnimation(t, module634.createAnimation(n));
  },
  O = function (t) {
    return null !== t && 'object' == typeof t;
  };
