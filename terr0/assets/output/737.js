var module356 = require('./356'),
  module738 = require('./738'),
  module739 = require('./739'),
  module740 = require('./740'),
  module741 = require('./741'),
  module742 = require('./742'),
  module743 = require('./743'),
  c = (function () {
    function t(s, c) {
      module356.default(this, t);
      this._analytics = new module738.default(this);
      this._android = new module739.default(this);
      this._domainURIPrefix = c;
      this._ios = new module740.default(this);
      this._itunes = new module741.default(this);
      this._link = s;
      this._navigation = new module742.default(this);
      this._social = new module743.default(this);
    }

    module357.default(t, [
      {
        key: 'build',
        value: function () {
          if (!this._link) throw new Error('DynamicLink: Missing required `link` property');
          if (!this._domainURIPrefix) throw new Error('DynamicLink: Missing required `domainURIPrefix` property');
          return {
            analytics: this._analytics.build(),
            android: this._android.build(),
            domainURIPrefix: this._domainURIPrefix,
            ios: this._ios.build(),
            itunes: this._itunes.build(),
            link: this._link,
            navigation: this._navigation.build(),
            social: this._social.build(),
          };
        },
      },
      {
        key: 'analytics',
        get: function () {
          return this._analytics;
        },
      },
      {
        key: 'android',
        get: function () {
          return this._android;
        },
      },
      {
        key: 'ios',
        get: function () {
          return this._ios;
        },
      },
      {
        key: 'itunes',
        get: function () {
          return this._itunes;
        },
      },
      {
        key: 'navigation',
        get: function () {
          return this._navigation;
        },
      },
      {
        key: 'social',
        get: function () {
          return this._social;
        },
      },
    ]);
    return t;
  })();

exports.default = c;
