var module356 = require('./356'),
  l = (function () {
    function t(u) {
      module356.default(this, t);
      this._link = u;
    }

    module357.default(t, [
      {
        key: 'setForcedRedirectEnabled',
        value: function (t) {
          this._forcedRedirectEnabled = t;
          return this._link;
        },
      },
      {
        key: 'build',
        value: function () {
          return {
            forcedRedirectEnabled: this._forcedRedirectEnabled,
          };
        },
      },
    ]);
    return t;
  })();

exports.default = l;
