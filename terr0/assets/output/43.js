var module8 = require('./8'),
  n = {
    OS: 'android',

    get Version() {
      var n = module8.PlatformConstants;
      return n && n.Version;
    },

    get isTesting() {
      return false;
    },

    get isTV() {
      var n = module8.PlatformConstants;
      return n && 'tv' === n.uiMode;
    },

    select: function (t) {
      return 'android' in t ? t.android : t.default;
    },
  };

module.exports = n;
