var module404 = require('./404');

Object.defineProperty(exports, 'Easing', {
  enumerable: true,
  get: function () {
    return module523.default;
  },
});
Object.defineProperty(exports, 'Transition', {
  enumerable: true,
  get: function () {
    return module578.Transition;
  },
});
Object.defineProperty(exports, 'Transitioning', {
  enumerable: true,
  get: function () {
    return module578.Transitioning;
  },
});
Object.defineProperty(exports, 'createTransitioningComponent', {
  enumerable: true,
  get: function () {
    return module578.createTransitioningComponent;
  },
});

var module284 = require('./284'),
  module2 = require('./2'),
  module523 = require('./523'),
  module535 = require('./535'),
  module536 = require('./536'),
  module527 = require('./527'),
  module551 = require('./551'),
  module524 = module404(require('./524')),
  module552 = module404(require('./552')),
  module564 = require('./564'),
  module568 = require('./568'),
  module569 = require('./569'),
  module570 = require('./570'),
  module571 = require('./571'),
  module573 = require('./573'),
  module575 = require('./575'),
  module576 = require('./576'),
  module577 = require('./577'),
  module578 = require('./578'),
  module579 = require('./579');

function I(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

var W = (function (t) {
  for (var n = 1; n < arguments.length; n++) {
    var u = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      I(Object(u), true).forEach(function (n) {
        module284.default(t, n, u[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      I(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
})(
  {
    View: module564.default(module2.View),
    Text: module564.default(module2.Text),
    Image: module564.default(module2.Image),
    ScrollView: module564.default(module2.ScrollView),
    Code: module551.default,
    createAnimatedComponent: module564.default,
    Clock: module535.default,
    Value: module536.default,
    Node: module527.default,
  },
  module524,
  {},
  module552,
  {
    decay: module577.default(module568.default, module575.default),
    timing: module577.default(module569.default, module571.default),
    spring: module577.default(module570.default, module573.default),
    SpringUtils: module579.default,
    addWhitelistedNativeProps: module576.addWhitelistedNativeProps,
    addWhitelistedUIProps: module576.addWhitelistedUIProps,
  }
);

exports.default = W;
