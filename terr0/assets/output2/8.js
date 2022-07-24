import module9 from '@babel/runtime/helpers/defineEnumerableProperties';
import module3 from './3';

var module11 = require('./11'),
  module12 = require('./12'),
  module16 = require('./16');

function f(n, u) {
  if (!n) return null;
  var f = module12(n, 5),
    s = f[0],
    h = f[1],
    y = f[2],
    C = f[3],
    p = f[4];
  if ((module3(!s.startsWith('RCT') && !s.startsWith('RK'), "Module name prefixes should've been stripped by the native side but wasn't for " + s), !h && !y))
    return {
      name: s,
    };
  var M = {};
  if (y)
    y.forEach(function (n, t) {
      var o = C && v(C, t),
        f = p && v(p, t);
      module3(!o || !f, 'Cannot have a method that is both async and a sync hook');
      var s = o ? 'promise' : f ? 'sync' : 'async';
      M[n] = c(u, t, s);
    });
  module11(M, h);
  if (null == M.getConstants)
    M.getConstants = function () {
      return h;
    };
  else
    console.warn(
      "Unable to define method 'getConstants()' on NativeModule '" + s + "'. NativeModule '" + s + "' already has a constant or method called 'getConstants'. Please remove it."
    );
  return {
    name: s,
    module: M,
  };
}

function s(n, t) {
  module3(globals.nativeRequireModuleConfig, "Can't lazily create module without nativeRequireModuleConfig");
  var o = f(globals.nativeRequireModuleConfig(n), t);
  return o && o.module;
}

function c(n, t, o) {
  var f = null;
  (f =
    'promise' === o
      ? function (...args) {
          return new Promise(function (o, f) {
            module16.enqueueNativeCall(
              n,
              t,
              args,
              function (n) {
                return o(n);
              },
              function (n) {
                return f(h(n));
              }
            );
          });
        }
      : 'sync' === o
      ? function (...args) {
          return globals.nativeCallSyncHook(n, t, args);
        }
      : function (...args) {
          var c = args.length > 0 ? args[args.length - 1] : null,
            v = args.length > 1 ? args[args.length - 2] : null,
            h = 'function' == typeof c,
            y = 'function' == typeof v;
          if (y) module3(h, 'Cannot have a non-function arg after a function arg.');
          var C = h ? c : null,
            p = y ? v : null,
            M = h + y;
          args = args.slice(0, args.length - M);
          module16.enqueueNativeCall(n, t, args, p, C);
        }).type = o;
  return f;
}

function v(n, t) {
  return -1 !== n.indexOf(t);
}

function h(o) {
  var u = o || {},
    l = u.message,
    f = module9(u, ['message']),
    s = new Error(l);
  s.framesToPop = 1;
  return module11(s, f);
}

globals.__fbGenNativeModule = f;
var y = {};
if (globals.nativeModuleProxy) y = globals.nativeModuleProxy;
else if (!globals.nativeExtensions) {
  var C = globals.__fbBatchedBridgeConfig;
  module3(C, '__fbBatchedBridgeConfig is not set, cannot invoke native modules');

  var module28 = require('./28');

  (C.remoteModuleConfig || []).forEach(function (n, t) {
    var o = f(n, t);
    if (o)
      o.module
        ? (y[o.name] = o.module)
        : module28(y, o.name, {
            get: function () {
              return s(o.name, t);
            },
          });
  });
}
module.exports = y;
