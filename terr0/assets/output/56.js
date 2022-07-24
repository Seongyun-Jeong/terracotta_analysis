var module46 = require('./46');

function t(o, t) {
  var n = Object.keys(o);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(o);
    if (t)
      c = c.filter(function (t) {
        return Object.getOwnPropertyDescriptor(o, t).enumerable;
      });
    n.push.apply(n, c);
  }

  return n;
}

for (
  var module57 = require('./57'),
    module67 = require('./67'),
    module68 = require('./68'),
    module69 = require('./69'),
    module70 = require('./70'),
    module72 = require('./72'),
    p = {},
    O = 0,
    u = Object.keys(
      (function (n) {
        for (var c = 1; c < arguments.length; c++) {
          var l = null != arguments[c] ? arguments[c] : {};
          if (c % 2)
            t(Object(l), true).forEach(function (t) {
              module46(n, t, l[t]);
            });
          else if (Object.getOwnPropertyDescriptors) Object.defineProperties(n, Object.getOwnPropertyDescriptors(l));
          else
            t(Object(l)).forEach(function (o) {
              Object.defineProperty(n, o, Object.getOwnPropertyDescriptor(l, o));
            });
        }

        return n;
      })({}, module68, {}, module67, {}, module57)
    );
  O < u.length;
  O++
) {
  p[u[O]] = true;
}

p.transform = {
  process: module70,
};
p.shadowOffset = {
  diff: module72,
};
var y = {
  process: module69,
};
p.backgroundColor = y;
p.borderBottomColor = y;
p.borderColor = y;
p.borderLeftColor = y;
p.borderRightColor = y;
p.borderTopColor = y;
p.borderStartColor = y;
p.borderEndColor = y;
p.color = y;
p.shadowColor = y;
p.textDecorationColor = y;
p.tintColor = y;
p.textShadowColor = y;
p.overlayColor = y;
module.exports = p;
