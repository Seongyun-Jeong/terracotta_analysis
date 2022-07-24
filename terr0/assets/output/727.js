var module356 = require('./356'),
  l = (function () {
    function t(n, l) {
      module356.default(this, t);
      this._latitude = n;
      this._longitude = l;
    }

    module357.default(t, [
      {
        key: 'latitude',
        get: function () {
          return this._latitude;
        },
      },
      {
        key: 'longitude',
        get: function () {
          return this._longitude;
        },
      },
    ]);
    return t;
  })();

exports.default = l;
