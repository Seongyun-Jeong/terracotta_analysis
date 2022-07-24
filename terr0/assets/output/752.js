var module356 = require('./356'),
  u = (function () {
    function n(o, u, s) {
      module356.default(this, n);
      this._name = u;
      this._groupId = o;
      this._description = s;
    }

    module357.default(n, [
      {
        key: 'build',
        value: function () {
          if (!this._groupId) throw new Error('AndroidChannelGroup: Missing required `groupId` property');
          if (!this._name) throw new Error('AndroidChannelGroup: Missing required `name` property');
          return {
            name: this._name,
            groupId: this._groupId,
            description: this._description,
            channels: [],
          };
        },
      },
      {
        key: 'groupId',
        get: function () {
          return this._groupId;
        },
      },
      {
        key: 'name',
        get: function () {
          return this._name;
        },
      },
      {
        key: 'description',
        get: function () {
          return this._description;
        },
      },
    ]);
    return n;
  })();

exports.default = u;
