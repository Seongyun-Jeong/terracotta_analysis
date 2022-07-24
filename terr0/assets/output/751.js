var module356 = require('./356'),
  module750 = require('./750'),
  u = (function () {
    function t(s, u, h) {
      if ((module356.default(this, t), !Object.values(module750.Importance).includes(h))) throw new Error('AndroidChannel() Invalid Importance: ' + h);
      this._channelId = s;
      this._name = u;
      this._importance = h;
    }

    module357.default(t, [
      {
        key: 'enableLights',
        value: function (t) {
          this._lightsEnabled = t;
          return this;
        },
      },
      {
        key: 'enableVibration',
        value: function (t) {
          this._vibrationEnabled = t;
          return this;
        },
      },
      {
        key: 'setBypassDnd',
        value: function (t) {
          this._bypassDnd = t;
          return this;
        },
      },
      {
        key: 'setDescription',
        value: function (t) {
          this._description = t;
          return this;
        },
      },
      {
        key: 'setGroup',
        value: function (t) {
          this._group = t;
          return this;
        },
      },
      {
        key: 'setLightColor',
        value: function (t) {
          this._lightColor = t;
          return this;
        },
      },
      {
        key: 'setLockScreenVisibility',
        value: function (t) {
          if (!Object.values(module750.Visibility).includes(t)) throw new Error('AndroidChannel:setLockScreenVisibility Invalid Visibility: ' + t);
          this._lockScreenVisibility = t;
          return this;
        },
      },
      {
        key: 'setShowBadge',
        value: function (t) {
          this._showBadge = t;
          return this;
        },
      },
      {
        key: 'setSound',
        value: function (t) {
          this._sound = t;
          return this;
        },
      },
      {
        key: 'setVibrationPattern',
        value: function (t) {
          this._vibrationPattern = t;
          return this;
        },
      },
      {
        key: 'build',
        value: function () {
          if (!this._channelId) throw new Error('AndroidChannel: Missing required `channelId` property');
          if (!this._importance) throw new Error('AndroidChannel: Missing required `importance` property');
          if (!this._name) throw new Error('AndroidChannel: Missing required `name` property');
          return {
            bypassDnd: this._bypassDnd,
            channelId: this._channelId,
            description: this._description,
            group: this._group,
            importance: this._importance,
            lightColor: this._lightColor,
            lightsEnabled: this._lightsEnabled,
            lockScreenVisibility: this._lockScreenVisibility,
            name: this._name,
            showBadge: this._showBadge,
            sound: this._sound,
            vibrationEnabled: this._vibrationEnabled,
            vibrationPattern: this._vibrationPattern,
          };
        },
      },
      {
        key: 'bypassDnd',
        get: function () {
          return this._bypassDnd;
        },
      },
      {
        key: 'channelId',
        get: function () {
          return this._channelId;
        },
      },
      {
        key: 'description',
        get: function () {
          return this._description;
        },
      },
      {
        key: 'group',
        get: function () {
          return this._group;
        },
      },
      {
        key: 'importance',
        get: function () {
          return this._importance;
        },
      },
      {
        key: 'lightColor',
        get: function () {
          return this._lightColor;
        },
      },
      {
        key: 'lightsEnabled',
        get: function () {
          return this._lightsEnabled;
        },
      },
      {
        key: 'lockScreenVisibility',
        get: function () {
          return this._lockScreenVisibility;
        },
      },
      {
        key: 'name',
        get: function () {
          return this._name;
        },
      },
      {
        key: 'showBadge',
        get: function () {
          return this._showBadge;
        },
      },
      {
        key: 'sound',
        get: function () {
          return this._sound;
        },
      },
      {
        key: 'vibrationEnabled',
        get: function () {
          return this._vibrationEnabled;
        },
      },
      {
        key: 'vibrationPattern',
        get: function () {
          return this._vibrationPattern;
        },
      },
    ]);
    return t;
  })();

exports.default = u;
