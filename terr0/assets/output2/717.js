var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module718 = (function (t) {
    function o(t) {
      var n;
      module356.default(this, o);
      (n = module358.default(this, module361.default(o).call(this, t.error))).path = t.path;
      n.appName = t.appName;
      return n;
    }

    module362.default(o, t);
    return o;
  })(require('./718').default);

export default module718;
