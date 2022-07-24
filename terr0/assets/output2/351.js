var module5 = require('./5'),
  n = {
    vibrate: function () {
      module5(false, 'VibrationIOS is deprecated, and will be removed. Use Vibration instead.');
    },
  };

module.exports = n;
