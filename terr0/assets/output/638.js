exports.default = function (t) {
  var o = module51.default({}, module2.StyleSheet.flatten(t));

  if (o.transform) {
    o.transform.forEach(function (t) {
      var n = Object.keys(t)[0];
      o[n] = t[n];
    });
    delete o.transform;
  }

  return o;
};

var module51 = require('./51'),
  module2 = require('./2');
