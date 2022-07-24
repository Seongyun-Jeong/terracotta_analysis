var module323 = require('./323'),
  n = {
    defaultOriginWhitelist: ['http://*', 'https://*'],
    extractOrigin: function (t) {
      var n = /^[A-Za-z0-9]+:(\/\/)?[^/]*/.exec(t);
      return null === n ? null : n[0];
    },
    originWhitelistToRegex: function (n) {
      return module323(n).replace(/\\\*/g, '.*');
    },
  };

module.exports = n;
