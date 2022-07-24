var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module719 = (function (t) {
    function o(t, n, s) {
      var c;
      module356.default(this, o);
      (c = module358.default(this, module361.default(o).call(this, n))).code = t;
      c.details = s;
      c.message = n;
      return c;
    }

    module362.default(o, t);
    return o;
  })(require('./719').default(Error));

exports.default = module719;
