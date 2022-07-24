module.exports = function (t) {
  if (t && t.__esModule) return t;
  var o = {};
  if (null != t)
    for (var n in t)
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        var c = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
        if (c.get || c.set) Object.defineProperty(o, n, c);
        else o[n] = t[n];
      }
  o.default = t;
  return o;
};
