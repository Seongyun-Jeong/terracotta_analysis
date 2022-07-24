var module356 = require('./356'),
  u = (function () {
    function t(n) {
      module356.default(this, t);
      this._link = n;
    }

    module357.default(t, [
      {
        key: 'setAppStoreId',
        value: function (t) {
          this._appStoreId = t;
          return this._link;
        },
      },
      {
        key: 'setBundleId',
        value: function (t) {
          this._bundleId = t;
          return this._link;
        },
      },
      {
        key: 'setCustomScheme',
        value: function (t) {
          this._customScheme = t;
          return this._link;
        },
      },
      {
        key: 'setFallbackUrl',
        value: function (t) {
          this._fallbackUrl = t;
          return this._link;
        },
      },
      {
        key: 'setIPadBundleId',
        value: function (t) {
          this._iPadBundleId = t;
          return this._link;
        },
      },
      {
        key: 'setIPadFallbackUrl',
        value: function (t) {
          this._iPadFallbackUrl = t;
          return this._link;
        },
      },
      {
        key: 'setMinimumVersion',
        value: function (t) {
          this._minimumVersion = t;
          return this._link;
        },
      },
      {
        key: 'build',
        value: function () {
          if ((this._appStoreId || this._customScheme || this._fallbackUrl || this._iPadBundleId || this._iPadFallbackUrl || this._minimumVersion) && !this._bundleId)
            throw new Error('IOSParameters: Missing required `bundleId` property');
          return {
            appStoreId: this._appStoreId,
            bundleId: this._bundleId,
            customScheme: this._customScheme,
            fallbackUrl: this._fallbackUrl,
            iPadBundleId: this._iPadBundleId,
            iPadFallbackUrl: this._iPadFallbackUrl,
            minimumVersion: this._minimumVersion,
          };
        },
      },
    ]);
    return t;
  })();

exports.default = u;
