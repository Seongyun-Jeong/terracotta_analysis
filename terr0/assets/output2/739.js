var module356 = require('./356');

class u {
  constructor(l) {
    module356.default(this, t);
    this._link = l;
  }

  setFallbackUrl(t) {
    this._fallbackUrl = t;
    return this._link;
  }

  setMinimumVersion(t) {
    this._minimumVersion = t;
    return this._link;
  }

  setPackageName(t) {
    this._packageName = t;
    return this._link;
  }

  build() {
    if ((this._fallbackUrl || this._minimumVersion) && !this._packageName) throw new Error('AndroidParameters: Missing required `packageName` property');
    return {
      fallbackUrl: this._fallbackUrl,
      minimumVersion: this._minimumVersion,
      packageName: this._packageName,
    };
  }
}

export default u;
