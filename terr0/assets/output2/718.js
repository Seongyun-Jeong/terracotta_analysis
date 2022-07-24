var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module719 = (function (t) {
    function f(t) {
      var n;
      module356.default(this, f);
      (n = module358.default(this, module361.default(f).call(this, t.message))).code = t.code;
      n.message = t.message;
      n.nativeErrorCode = t.nativeErrorCode;
      n.nativeErrorMessage = t.nativeErrorMessage;
      return n;
    }

    module362.default(f, t);
    return f;
  })(require('./719').default(Error));

export default module719;
