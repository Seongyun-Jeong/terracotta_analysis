var module356 = require('./356'),
  module672 = require('./672'),
  u = (function () {
    function t(n) {
      module356.default(this, t);

      if (n) {
        this._collapseKey = n.collapseKey;
        this._data = n.data;
        this._from = n.from;
        this._messageId = n.messageId;
        this._messageType = n.messageType;
        this._sentTime = n.sentTime;
      }

      this._data = this._data || {};
      this._messageId = this._messageId || module672.generatePushID();
      this._ttl = 3600;
    }

    module357.default(t, [
      {
        key: 'setCollapseKey',
        value: function (t) {
          this._collapseKey = t;
          return this;
        },
      },
      {
        key: 'setData',
        value: function () {
          var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
          if (!module672.isObject(t)) throw new Error("RemoteMessage:setData expects an object but got type '" + typeof t + "'.");
          this._data = t;
          return this;
        },
      },
      {
        key: 'setMessageId',
        value: function (t) {
          this._messageId = t;
          return this;
        },
      },
      {
        key: 'setMessageType',
        value: function (t) {
          this._messageType = t;
          return this;
        },
      },
      {
        key: 'setTo',
        value: function (t) {
          this._to = t;
          return this;
        },
      },
      {
        key: 'setTtl',
        value: function (t) {
          this._ttl = t;
          return this;
        },
      },
      {
        key: 'build',
        value: function () {
          if (!this._data) throw new Error('RemoteMessage: Missing required `data` property');
          if (!this._messageId) throw new Error('RemoteMessage: Missing required `messageId` property');
          if (!this._to) throw new Error('RemoteMessage: Missing required `to` property');
          if (!this._ttl) throw new Error('RemoteMessage: Missing required `ttl` property');
          return {
            collapseKey: this._collapseKey,
            data: this._data,
            messageId: this._messageId,
            messageType: this._messageType,
            to: this._to,
            ttl: this._ttl,
          };
        },
      },
      {
        key: 'collapseKey',
        get: function () {
          return this._collapseKey;
        },
      },
      {
        key: 'data',
        get: function () {
          return this._data;
        },
      },
      {
        key: 'from',
        get: function () {
          return this._from;
        },
      },
      {
        key: 'messageId',
        get: function () {
          return this._messageId;
        },
      },
      {
        key: 'messageType',
        get: function () {
          return this._messageType;
        },
      },
      {
        key: 'sentTime',
        get: function () {
          return this._sentTime;
        },
      },
      {
        key: 'to',
        get: function () {
          return this._to;
        },
      },
      {
        key: 'ttl',
        get: function () {
          return this._ttl;
        },
      },
    ]);
    return t;
  })();

exports.default = u;
