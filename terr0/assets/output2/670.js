import module2 from './2';
var v = {},
  u = {},
  module38 = new (require('./38').default)();
exports.SharedEventEmitter = module38;
export function getAppEventName(t, n) {
  return t.app.name + '-' + n;
}

var p = function (t, u) {
    var o = u.app.name + '-' + t,
      p = module2.NativeModules[t];
    if (!v[o]) v[o] = new module2.NativeEventEmitter(p);
    return v[o];
  },
  E = function (t, n, v) {
    if (!u[v]) {
      p(t, n).addListener(v, function (t) {
        if (t.appName) module38.emit(t.appName + '-' + v, t);
        else module38.emit(v, t);
      });
      u[v] = true;
    }
  };

export function initialiseNativeModuleEventEmitter(t, n) {
  var v = n.events,
    u = n.moduleName;
  if (v && v.length) for (var o = 0, p = v.length; o < p; o++) E(u, t, v[o]);
}
