var module356 = require('./356'),
  u = (function () {
    function t() {
      module356.default(this, t);
      this._props = {
        keywords: [],
        testDevices: [],
      };
    }

    module357.default(t, [
      {
        key: 'build',
        value: function () {
          return this._props;
        },
      },
      {
        key: 'addTestDevice',
        value: function (t) {
          this._props.testDevices.push(t || 'DEVICE_ID_EMULATOR');

          return this;
        },
      },
      {
        key: 'addKeyword',
        value: function (t) {
          this._props.keywords.push(t);

          return this;
        },
      },
      {
        key: 'setBirthday',
        value: function () {},
      },
      {
        key: 'setContentUrl',
        value: function (t) {
          this._props.contentUrl = t;
          return this;
        },
      },
      {
        key: 'setGender',
        value: function (t) {
          if (['male', 'female', 'unknown'].includes(t)) this._props.gender = t;
          return this;
        },
      },
      {
        key: 'setLocation',
        value: function () {},
      },
      {
        key: 'setRequestAgent',
        value: function (t) {
          this._props.requestAgent = t;
          return this;
        },
      },
      {
        key: 'setIsDesignedForFamilies',
        value: function (t) {
          this._props.isDesignedForFamilies = t;
          return this;
        },
      },
      {
        key: 'tagForChildDirectedTreatment',
        value: function (t) {
          this._props.tagForChildDirectedTreatment = t;
          return this;
        },
      },
    ]);
    return t;
  })();

exports.default = u;
