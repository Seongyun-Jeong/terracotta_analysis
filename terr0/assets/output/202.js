var module46 = require('./46');

function c() {
  var module43 = require('./43');

  c = function () {
    return module43;
  };

  return module43;
}

function o(t, n) {
  var c = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    c.push.apply(c, o);
  }

  return c;
}

var module212 = c().default.isTesting ? require('./203') : require('./212');

module.exports = (function (t) {
  for (var c = 1; c < arguments.length; c++) {
    var u = null != arguments[c] ? arguments[c] : {};
    if (c % 2)
      o(Object(u), true).forEach(function (c) {
        module46.default(t, c, u[c]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      o(Object(u)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(u, n));
      });
  }

  return t;
})(
  {
    get FlatList() {
      return require('./232');
    },

    get Image() {
      return require('./251');
    },

    get ScrollView() {
      return require('./257');
    },

    get SectionList() {
      return require('./258');
    },

    get Text() {
      return require('./261');
    },

    get View() {
      return require('./262');
    },
  },
  module212
);
