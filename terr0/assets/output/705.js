var module356 = require('./356'),
  h = (function () {
    function t(u) {
      module356.default(this, t);
      this.path = u ? (u.length > 1 && u.endsWith('/') ? u.substring(0, u.length - 1) : u) : '/';
    }

    module357.default(t, [
      {
        key: 'key',
        get: function () {
          return '/' === this.path ? null : this.path.substring(this.path.lastIndexOf('/') + 1);
        },
      },
    ]);
    return t;
  })();

exports.default = h;
