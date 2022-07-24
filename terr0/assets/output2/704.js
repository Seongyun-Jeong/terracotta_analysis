var module356 = require('./356'),
  module672 = require('./672'),
  module675 = require('./675');

class c {
  constructor(u) {
    module356.default(this, t);
    this.ref = u;
    this.path = u.path;
    this._database = u._database;
  }

  set(t) {
    return module675.getNativeModule(this._database).onDisconnectSet(this.path, {
      type: module672.typeOf(t),
      value: t,
    });
  }

  update(t) {
    return module675.getNativeModule(this._database).onDisconnectUpdate(this.path, t);
  }

  remove() {
    return module675.getNativeModule(this._database).onDisconnectRemove(this.path);
  }

  cancel() {
    return module675.getNativeModule(this._database).onDisconnectCancel(this.path);
  }
}

export default c;
