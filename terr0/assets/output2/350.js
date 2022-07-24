var module8 = require('./8').Vibration;

require('./43');

var n = {
  vibrate: function () {
    var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 400,
      o = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
    if ('number' == typeof n) module8.vibrate(n);
    else {
      if (!Array.isArray(n)) throw new Error('Vibration pattern should be a number or array');
      module8.vibrateByPattern(n, o ? 0 : -1);
    }
  },
  cancel: function () {
    module8.cancel();
  },
};
module.exports = n;
