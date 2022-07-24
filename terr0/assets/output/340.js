var module46 = require('./46');

function n(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function o(o) {
  for (var c = 1; c < arguments.length; c++) {
    var s = null != arguments[c] ? arguments[c] : {};
    if (c % 2)
      n(Object(s), true).forEach(function (n) {
        module46(o, n, s[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(s));
    else
      n(Object(s)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(s, t));
      });
  }

  return o;
}

var module8 = require('./8').ImagePickerIOS,
  s = {
    canRecordVideos: function (t) {
      return module8.canRecordVideos(t);
    },
    canUseCamera: function (t) {
      return module8.canUseCamera(t);
    },
    openCameraDialog: function (t, n, s) {
      module46 = o(
        {
          videoMode: false,
        },
        module46
      );
      return module8.openCameraDialog(module46, n, s);
    },
    openSelectDialog: function (t, n, s) {
      module46 = o(
        {
          showImages: true,
          showVideos: false,
        },
        module46
      );
      return module8.openSelectDialog(module46, n, s);
    },
  };

module.exports = s;
