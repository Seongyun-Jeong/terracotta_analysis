var module356 = require('./356');

class o {
  constructor() {
    module356.default(this, t);
    this._props = {
      startMuted: true,
    };
  }

  build() {
    return this._props;
  }

  setStartMuted() {
    var t = !(arguments.length > 0 && undefined !== arguments[0]) || arguments[0];
    this._props.startMuted = t;
    return this;
  }
}

export default o;
