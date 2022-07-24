import module11 from './11';

var module46 = require('./46');

function o(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function s(t) {
  for (var s = 1; s < arguments.length; s++) {
    var u = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      o(Object(u), true).forEach(function (o) {
        module46(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      o(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
}

import module3 from './3';
import module5 from './5';

var module56 = require('./56'),
  module42 = require('./42'),
  module159 = require('./159'),
  module160 = require('./160'),
  module161 = require('./161'),
  module69 = require('./69'),
  module162 = require('./162'),
  module72 = require('./72');

var E = false;

function w(t) {
  if (module42.ViewManagerNames || module42.LazyViewManagersEnabled) t = T(t, module42.getDefaultEventTypes());
  else {
    t.bubblingEventTypes = T(t.bubblingEventTypes, module42.genericBubblingEventTypes);
    t.directEventTypes = T(t.directEventTypes, module42.genericDirectEventTypes);
  }
}

function T(t, n) {
  if (!n) return t;
  if (!t) return n;

  for (var o in n)
    if (n.hasOwnProperty(o)) {
      var s = n[o];

      if (t.hasOwnProperty(o)) {
        var u = t[o];
        if ('object' == typeof s && 'object' == typeof u) s = T(u, s);
      }

      t[o] = s;
    }

  return t;
}

function P(t) {
  switch (t) {
    case 'CATransform3D':
      return module160;

    case 'CGPoint':
      return module161;

    case 'CGSize':
      return module72;

    case 'UIEdgeInsets':
      return module159;
  }

  return null;
}

function j(t) {
  switch (t) {
    case 'CGColor':
    case 'UIColor':
      return module69;

    case 'CGColorArray':
    case 'UIColorArray':
      return h;

    case 'CGImage':
    case 'UIImage':
    case 'RCTImageSource':
      return module162;

    case 'Color':
      return module69;

    case 'ColorArray':
      return h;
  }

  return null;
}

function h(t) {
  return null == t ? null : t.map(module69);
}

module.exports = function (n) {
  var o = module42.getViewManagerConfig(n);
  module3(null != o && null != o.NativeProps, 'requireNativeComponent: "%s" was not found in the UIManager.', n);

  for (var l = o.baseModuleName, p = o.bubblingEventTypes, b = o.directEventTypes, f = o.NativeProps; l; ) {
    var v = module42.getViewManagerConfig(l);

    if (v) {
      p = s({}, v.bubblingEventTypes, {}, p);
      b = s({}, v.directEventTypes, {}, b);
      f = s({}, v.NativeProps, {}, f);
      l = v.baseModuleName;
    } else {
      module5(false, 'Base module "%s" does not exist', l);
      l = null;
    }
  }

  var y = {};

  for (var T in f) {
    var h = f[T],
      I = P(h),
      N = j(h);
    y[T] = (null == I && null == N) || {
      diff: I,
      process: N,
    };
  }

  y.style = module56;
  module11(o, {
    uiViewClassName: n,
    validAttributes: y,
    bubblingEventTypes: p,
    directEventTypes: b,
  });

  if (!E) {
    w(o);
    E = true;
  }

  return o;
};
