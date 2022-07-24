var n,
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36');

n = (function (n) {
  function c() {
    module22(this, c);
    return module30(this, module33(c).apply(this, arguments));
  }

  module36(c, n);
  module23(
    c,
    [
      {
        key: 'render',
        value: function () {
          return null;
        },
      },
    ],
    [
      {
        key: 'ignoreWarnings',
        value: function (n) {},
      },
      {
        key: 'install',
        value: function () {},
      },
      {
        key: 'uninstall',
        value: function () {},
      },
    ]
  );
  return c;
})(require('react').Component);

module.exports = n;
