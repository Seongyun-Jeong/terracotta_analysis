var React = require('react'),
  module524 = require('./524');

var n = function (t, n) {
  if ('function' == typeof React.default.useEffect)
    React.default.useEffect(function () {
      var f = module524.always(t);

      f.__attach();

      return function () {
        f.__detach();
      };
    }, n);
};

exports.default = n;
