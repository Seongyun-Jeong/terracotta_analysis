require('./43');

var module22 = require('./22'),
  module8 = require('./8').ImageStoreManager,
  module4 = require('./4');

function F(o) {
  module4('imagestore-' + o, 'react-native: ImageStore.' + o + '() is not implemented on android');
}

var u = (function () {
  function s() {
    module22(this, s);
  }

  module23(s, null, [
    {
      key: 'hasImageForTag',
      value: function (o, n) {
        if (module8.hasImageForTag) module8.hasImageForTag(o, n);
        else F('hasImageForTag');
      },
    },
    {
      key: 'removeImageForTag',
      value: function (o) {
        if (module8.removeImageForTag) module8.removeImageForTag(o);
        else F('removeImageForTag');
      },
    },
    {
      key: 'addImageFromBase64',
      value: function (o, n, s) {
        if (module8.addImageFromBase64) module8.addImageFromBase64(o, n, s);
        else F('addImageFromBase64');
      },
    },
    {
      key: 'getBase64ForTag',
      value: function (o, n, s) {
        if (module8.getBase64ForTag) module8.getBase64ForTag(o, n, s);
        else F('getBase64ForTag');
      },
    },
  ]);
  return s;
})();

module.exports = u;
