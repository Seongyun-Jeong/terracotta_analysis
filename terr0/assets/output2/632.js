import module2 from './2';

var module284 = require('./284');

function c(t, n) {
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

var l = module2.StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'relative',
    resizeMode: 'cover',
    width: null,
    height: null,
  },
  loaderContainer: (function (t) {
    for (var o = 1; o < arguments.length; o++) {
      var l = null != arguments[o] ? arguments[o] : {};
      if (o % 2)
        c(Object(l), true).forEach(function (o) {
          module284.default(t, o, l[o]);
        });
      else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
      else
        c(Object(l)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
        });
    }

    return t;
  })({}, module2.StyleSheet.absoluteFillObject, {
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
export default l;
