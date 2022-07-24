var module706 = require('./706'),
  u = {
    cleanup: function () {
      module706.default.removeListenersForRegistrations(Object.keys(module706.default._reverseLookup));
    },
  };

export default u;
