var module363 = require('./363');

function n() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if ('function' == typeof Proxy) return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (t) {
    return false;
  }
}

function c(o, u, f) {
  if (n()) module.exports = c = Reflect.construct;
  else
    module.exports = c = function (n, c, o) {
      var u = [null];
      u.push.apply(u, c);
      var f = new (Function.bind.apply(n, u))();
      if (o) module363(f, o.prototype);
      return f;
    };
  return c.apply(null, arguments);
}

module.exports = c;
