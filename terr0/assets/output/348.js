var module8 = require('./8').ToastAndroid,
  o = {
    SHORT: module8.SHORT,
    LONG: module8.LONG,
    TOP: module8.TOP,
    BOTTOM: module8.BOTTOM,
    CENTER: module8.CENTER,
    show: function (o, s) {
      module8.show(o, s);
    },
    showWithGravity: function (o, s, O) {
      module8.showWithGravity(o, s, O);
    },
    showWithGravityAndOffset: function (o, s, O, n, T) {
      module8.showWithGravityAndOffset(o, s, O, n, T);
    },
  };

module.exports = o;
