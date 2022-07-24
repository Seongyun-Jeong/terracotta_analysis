var module22 = require('./22'),
  module54 = require('./54'),
  o = (function () {
    function o() {
      module22(this, o);
    }

    module23(o, null, [
      {
        key: 'get',
        value: function () {
          return module54.get('window').scale;
        },
      },
      {
        key: 'getFontScale',
        value: function () {
          return module54.get('window').fontScale || o.get();
        },
      },
      {
        key: 'getPixelSizeForLayoutSize',
        value: function (t) {
          return Math.round(t * o.get());
        },
      },
      {
        key: 'roundToNearestPixel',
        value: function (t) {
          var n = o.get();
          return Math.round(t * n) / n;
        },
      },
      {
        key: 'startDetecting',
        value: function () {},
      },
    ]);
    return o;
  })();

module.exports = o;
