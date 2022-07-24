var module356 = require('./356');

class u {
  constructor(n) {
    module356.default(this, t);
    this._link = n;
  }

  setAppStoreId(t) {
    this._appStoreId = t;
    return this._link;
  }

  setBundleId(t) {
    this._bundleId = t;
    return this._link;
  }

  setCustomScheme(t) {
    this._customScheme = t;
    return this._link;
  }

  setFallbackUrl(t) {
    this._fallbackUrl = t;
    return this._link;
  }

  setIPadBundleId(t) {
    this._iPadBundleId = t;
    return this._link;
  }

  setIPadFallbackUrl(t) {
    this._iPadFallbackUrl = t;
    return this._link;
  }

  setMinimumVersion(t) {
    this._minimumVersion = t;
    return this._link;
  }

  build() {
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
  }
}

export default u;
