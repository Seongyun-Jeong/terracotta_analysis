var module356 = require('./356');

class l {
  constructor(u) {
    module356.default(this, t);
    this._link = u;
  }

  setForcedRedirectEnabled(t) {
    this._forcedRedirectEnabled = t;
    return this._link;
  }

  build() {
    return {
      forcedRedirectEnabled: this._forcedRedirectEnabled,
    };
  }
}

export default l;
