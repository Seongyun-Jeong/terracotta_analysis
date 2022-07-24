var module22 = require('./22'),
  module8 = require('./8').ImageEditingManager,
  c = (function () {
    function c() {
      module22(this, c);
    }

    module23(c, null, [
      {
        key: 'cropImage',
        value: function (n, t, c, o) {
          module8.cropImage(n, t, c, o);
        },
      },
    ]);
    return c;
  })();

module.exports = c;
