var module46 = require('./46');

function o(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (o)
      c = c.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, c);
  }

  return n;
}

function n(n) {
  for (var c = 1; c < arguments.length; c++) {
    var s = null != arguments[c] ? arguments[c] : {};
    if (c % 2)
      o(Object(s), true).forEach(function (o) {
        module46(n, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(s));
    else
      o(Object(s)).forEach(function (t) {
        Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(s, t));
      });
  }

  return n;
}

var module8 = require('./8').ActionSheetManager,
  module3 = require('./3'),
  module69 = require('./69'),
  l = {
    showActionSheetWithOptions: function (t, o) {
      module3('object' == typeof t && null !== t, 'Options must be a valid object');
      module3('function' == typeof o, 'Must provide a valid callback');
      module8.showActionSheetWithOptions(
        n({}, t, {
          tintColor: module69(t.tintColor),
        }),
        o
      );
    },
    showShareActionSheetWithOptions: function (t, o, l) {
      module3('object' == typeof t && null !== t, 'Options must be a valid object');
      module3('function' == typeof o, 'Must provide a valid failureCallback');
      module3('function' == typeof l, 'Must provide a valid successCallback');
      module8.showShareActionSheetWithOptions(
        n({}, t, {
          tintColor: module69(t.tintColor),
        }),
        o,
        l
      );
    },
  };

module.exports = l;
