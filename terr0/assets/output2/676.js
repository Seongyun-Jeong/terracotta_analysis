var module356 = require('./356'),
  module674 = require('./674'),
  module675 = require('./675');

class l {
  constructor(o, l, c) {
    if ((module356.default(this, t), !l.moduleName)) throw new Error('Missing module name');
    if (!l.namespace) throw new Error('Missing namespace');
    var f = l.moduleName;
    this._app = o;
    this._customUrlOrRegion = c;
    this.namespace = l.namespace;
    module675.initialiseNativeModule(this, l, c);
    module674.initialiseLogger(this, o.name + ':' + f.replace('RNFirebase', ''));
  }

  app() {
    return this._app;
  }

  log() {
    return module674.getLogger(this);
  }
}

export default l;
