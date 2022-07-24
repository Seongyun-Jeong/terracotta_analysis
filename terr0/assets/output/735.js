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

var M = (function (t) {
  function f(t) {
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

  module362.default(f, t);
  module357.default(f, [
    {
      key: 'get',
      value: function () {
        return module675.getNativeModule(this).get();
      },
    },
    {
      key: 'delete',
      value: function () {
        return module675.getNativeModule(this).delete();
      },
    },
    {
      key: 'getToken',
      value: function (t, u) {
        return module675.getNativeModule(this).getToken(t || this.app.options.messagingSenderId, u || '*');
      },
    },
    {
      key: 'deleteToken',
      value: function (t, u) {
        return module675.getNativeModule(this).deleteToken(t || this.app.options.messagingSenderId, u || '*');
      },
    },
  ]);
  return f;
})(module676.default);

exports.default = M;
exports.statics = {};
