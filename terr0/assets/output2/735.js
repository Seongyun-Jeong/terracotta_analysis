var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module676 = require('./676'),
  module675 = require('./675'),
  v = 'iid';

exports.NAMESPACE = v;
var c = 'RNFirebaseInstanceId';
exports.MODULE_NAME = c;

class M {
  constructor(t) {
    module356.default(this, f);
    return module358.default(
      this,
      module361.default(f).call(this, t, {
        hasCustomUrlSupport: false,
        moduleName: c,
        hasMultiAppSupport: false,
        namespace: v,
      })
    );
  }

  get() {
    return module675.getNativeModule(this).get();
  }

  delete() {
    return module675.getNativeModule(this).delete();
  }

  getToken(t, u) {
    return module675.getNativeModule(this).getToken(t || this.app.options.messagingSenderId, u || '*');
  }

  deleteToken(t, u) {
    return module675.getNativeModule(this).deleteToken(t || this.app.options.messagingSenderId, u || '*');
  }
}

export default M;
export const statics = {};
