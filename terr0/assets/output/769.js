var module663 = require('./663'),
  o = module663.Buffer;

function f(n, o) {
  for (var f in n) o[f] = n[f];
}

function t(n, f, t) {
  return o(n, f, t);
}

if (o.from && o.alloc && o.allocUnsafe && o.allocUnsafeSlow) module.exports = module663;
else {
  f(module663, exports);
  exports.Buffer = t;
}
f(o, t);

t.from = function (n, f, t) {
  if ('number' == typeof n) throw new TypeError('Argument must not be a number');
  return o(n, f, t);
};

t.alloc = function (n, f, t) {
  if ('number' != typeof n) throw new TypeError('Argument must be a number');
  var u = o(n);
  if (undefined !== f) 'string' == typeof t ? u.fill(f, t) : u.fill(f);
  else u.fill(0);
  return u;
};

t.allocUnsafe = function (n) {
  if ('number' != typeof n) throw new TypeError('Argument must be a number');
  return o(n);
};

t.allocUnsafeSlow = function (o) {
  if ('number' != typeof o) throw new TypeError('Argument must be a number');
  return module663.SlowBuffer(o);
};
