var module356 = require('./356'),
  u = (function () {
    function t(s) {
      module356.default(this, t);
      this._parts = s;
    }

    module357.default(
      t,
      [
        {
          key: 'child',
          value: function (n) {
            return new t(this._parts.concat(n.split('/')));
          },
        },
        {
          key: 'parent',
          value: function () {
            return this._parts.length > 1 ? new t(this._parts.slice(0, this._parts.length - 1)) : null;
          },
        },
        {
          key: 'id',
          get: function () {
            return this._parts.length ? this._parts[this._parts.length - 1] : '';
          },
        },
        {
          key: 'isDocument',
          get: function () {
            return this._parts.length % 2 == 0;
          },
        },
        {
          key: 'isCollection',
          get: function () {
            return this._parts.length % 2 == 1;
          },
        },
        {
          key: 'relativeName',
          get: function () {
            return this._parts.join('/');
          },
        },
      ],
      [
        {
          key: 'fromName',
          value: function (n) {
            return new t(n ? n.split('/') : []);
          },
        },
      ]
    );
    return t;
  })();

exports.default = u;
