var module8 = require('./8'),
  module3 = require('./3'),
  n = {
    setGlobalOptions: function (n) {
      if ((undefined !== n.debug && module3(module8.FrameRateLogger, 'Trying to debug FrameRateLogger without the native module!'), module8.FrameRateLogger)) {
        var c = {
          debug: !!n.debug,
          reportStackTraces: !!n.reportStackTraces,
        };
        Object.freeze(c);
        Object.seal(c);
        module8.FrameRateLogger.setGlobalOptions(c);
      }
    },
    setContext: function (o) {
      if (module8.FrameRateLogger) module8.FrameRateLogger.setContext(o);
    },
    beginScroll: function () {
      if (module8.FrameRateLogger) module8.FrameRateLogger.beginScroll();
    },
    endScroll: function () {
      if (module8.FrameRateLogger) module8.FrameRateLogger.endScroll();
    },
  };

module.exports = n;
