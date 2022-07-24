var module356 = require('./356');

class u {
  constructor(o) {
    module356.default(this, n);
    this._link = o;
  }

  setAffiliateToken(n) {
    this._affiliateToken = n;
    return this._link;
  }

  setCampaignToken(n) {
    this._campaignToken = n;
    return this._link;
  }

  setProviderToken(n) {
    this._providerToken = n;
    return this._link;
  }

  build() {
    return {
      affiliateToken: this._affiliateToken,
      campaignToken: this._campaignToken,
      providerToken: this._providerToken,
    };
  }
}

export default u;
