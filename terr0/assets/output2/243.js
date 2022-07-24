import module3 from './3';

var module244 = require('./244'),
  module117 = require('./117'),
  module8 = require('./8').KeyboardObserver,
  module245 = require('./245'),
  c = {
    addListener: function (o, t) {
      module3(false, 'Dummy method used for documentation');
    },
    removeListener: function (o, t) {
      module3(false, 'Dummy method used for documentation');
    },
    removeAllListeners: function (o) {
      module3(false, 'Dummy method used for documentation');
    },
    dismiss: function () {
      module3(false, 'Dummy method used for documentation');
    },
    scheduleLayoutAnimation: function (o) {
      module3(false, 'Dummy method used for documentation');
    },
  };

(c = new module117(module8)).dismiss = module245;

c.scheduleLayoutAnimation = function (n) {
  var t = n.duration,
    u = n.easing;
  if (null != t && 0 !== t)
    module244.configureNext({
      duration: t,
      update: {
        duration: t,
        type: (null != u && module244.Types[u]) || 'keyboard',
      },
    });
};

module.exports = c;
