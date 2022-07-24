var module356 = require('./356'),
  u = (function () {
    function n(o) {
      module356.default(this, n);
      this._link = o;
    }

    module357.default(n, [
      {
        key: 'setAffiliateToken',
        value: function (n) {
          this._affiliateToken = n;
          return this._link;
        },
      },
      {
        key: 'setCampaignToken',
        value: function (n) {
          this._campaignToken = n;
          return this._link;
        },
      },
      {
        key: 'setProviderToken',
        value: function (n) {
          this._providerToken = n;
          return this._link;
        },
      },
      {
        key: 'build',
        value: function () {
          return {
            affiliateToken: this._affiliateToken,
            campaignToken: this._campaignToken,
            providerToken: this._providerToken,
          };
        },
      },
    ]);
    return n;
  })();

exports.default = u;
