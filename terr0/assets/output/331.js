var module8 = require('./8').DeviceEventManager,
  t = [];

require('./29').addListener('hardwareBackPress', function () {
  for (var n = t.length - 1; n >= 0; n--) if (t[n]()) return;

  s.exitApp();
});

var s = {
  exitApp: function () {
    module8.invokeDefaultBackPressHandler();
  },
  addEventListener: function (n, f) {
    if (-1 === t.indexOf(f)) t.push(f);
    return {
      remove: function () {
        return s.removeEventListener(n, f);
      },
    };
  },
  removeEventListener: function (n, s) {
    if (-1 !== t.indexOf(s)) t.splice(t.indexOf(s), 1);
  },
};
module.exports = s;
