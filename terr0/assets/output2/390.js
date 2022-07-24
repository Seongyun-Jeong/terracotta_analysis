var module383 = require('./383'),
  module391 = require('./391'),
  module415 = require('./415');

var n = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    v = module391.default(t, n);
  return module383.default(module415.default, v, n);
};

export default n;
