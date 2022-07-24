import base64js from 'base64-js';

var module664 = require('./664'),
  o =
    'function' == typeof Symbol && 'function' == typeof ('function' == typeof Symbol ? Symbol.for : '@@for')
      ? ('function' == typeof Symbol ? Symbol.for : '@@for')('nodejs.util.inspect.custom')
      : null;

exports.Buffer = s;

exports.SlowBuffer = function (t) {
  if (+t != t) t = 0;
  return s.alloc(+t);
};

exports.INSPECT_MAX_BYTES = 50;
var f = 2147483647;

function u(t) {
  if (t > f) throw new RangeError('The value "' + t + '" is invalid for option "size"');
  var n = new Uint8Array(t);
  Object.setPrototypeOf(n, s.prototype);
  return n;
}

function s(t, n, o) {
  if ('number' == typeof t) {
    if ('string' == typeof n) throw new TypeError('The "string" argument must be of type string. Received type number');
    return l(t);
  }

  return h(t, n, o);
}

function h(t, n, o) {
  if ('string' == typeof t) return y(t, n);
  if (ArrayBuffer.isView(t)) return w(t);
  if (null == t) throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof t);
  if (tt(t, ArrayBuffer) || (t && tt(t.buffer, ArrayBuffer))) return b(t, n, o);
  if ('number' == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
  var f = t.valueOf && t.valueOf();
  if (null != f && f !== t) return s.from(f, n, o);
  var u = v(t);
  if (u) return u;
  if (
    'undefined' != typeof Symbol &&
    null != ('function' == typeof Symbol ? Symbol.toPrimitive : '@@toPrimitive') &&
    'function' == typeof t['function' == typeof Symbol ? Symbol.toPrimitive : '@@toPrimitive']
  )
    return s.from(t['function' == typeof Symbol ? Symbol.toPrimitive : '@@toPrimitive']('string'), n, o);
  throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof t);
}

function p(t) {
  if ('number' != typeof t) throw new TypeError('"size" argument must be of type number');
  if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
}

function c(t, n, o) {
  p(t);
  return t <= 0 ? u(t) : undefined !== n ? ('string' == typeof o ? u(t).fill(n, o) : u(t).fill(n)) : u(t);
}

function l(t) {
  p(t);
  return u(t < 0 ? 0 : 0 | E(t));
}

function y(t, n) {
  if ((('string' == typeof n && '' !== n) || (n = 'utf8'), !s.isEncoding(n))) throw new TypeError('Unknown encoding: ' + n);
  var o = 0 | B(t, n),
    f = u(o),
    h = f.write(t, n);
  if (h !== o) f = f.slice(0, h);
  return f;
}

function w(t) {
  for (var n = t.length < 0 ? 0 : 0 | E(t.length), o = u(n), f = 0; f < n; f += 1) o[f] = 255 & t[f];

  return o;
}

function b(t, n, o) {
  if (n < 0 || t.byteLength < n) throw new RangeError('"offset" is outside of buffer bounds');
  if (t.byteLength < n + (o || 0)) throw new RangeError('"length" is outside of buffer bounds');
  var f;
  f = undefined === n && undefined === o ? new Uint8Array(t) : undefined === o ? new Uint8Array(t, n) : new Uint8Array(t, n, o);
  Object.setPrototypeOf(f, s.prototype);
  return f;
}

function v(t) {
  if (s.isBuffer(t)) {
    var n = 0 | E(t.length),
      o = u(n);
    if (0 === o.length) return o;
    else {
      t.copy(o, 0, 0, n);
      return o;
    }
  }

  if (undefined !== t.length) return 'number' != typeof t.length || rt(t.length) ? u(0) : w(t);
  else return 'Buffer' === t.type && Array.isArray(t.data) ? w(t.data) : undefined;
}

function E(t) {
  if (t >= f) throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + f.toString(16) + ' bytes');
  return 0 | t;
}

function B(t, n) {
  if (s.isBuffer(t)) return t.length;
  if (ArrayBuffer.isView(t) || tt(t, ArrayBuffer)) return t.byteLength;
  if ('string' != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
  var o = t.length,
    f = arguments.length > 2 && true === arguments[2];
  if (!f && 0 === o) return 0;

  for (var u = false; ; )
    switch (n) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return o;

      case 'utf8':
      case 'utf-8':
        return $(t).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 2 * o;

      case 'hex':
        return o >>> 1;

      case 'base64':
        return K(t).length;

      default:
        if (u) return f ? -1 : $(t).length;
        n = ('' + n).toLowerCase();
        u = true;
    }
}

function A(t, n, o) {
  var f = false;
  if (((undefined === n || n < 0) && (n = 0), n > this.length)) return '';
  if (((undefined === o || o > this.length) && (o = this.length), o <= 0)) return '';
  if ((o >>>= 0) <= (n >>>= 0)) return '';

  for (t || (t = 'utf8'); ; )
    switch (t) {
      case 'hex':
        return D(this, n, o);

      case 'utf8':
      case 'utf-8':
        return k(this, n, o);

      case 'ascii':
        return j(this, n, o);

      case 'latin1':
      case 'binary':
        return z(this, n, o);

      case 'base64':
        return C(this, n, o);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return F(this, n, o);

      default:
        if (f) throw new TypeError('Unknown encoding: ' + t);
        t = (t + '').toLowerCase();
        f = true;
    }
}

function S(t, n, o) {
  var f = t[n];
  t[n] = t[o];
  t[o] = f;
}

function U(t, n, o, f, u) {
  if (0 === t.length) return -1;

  if (
    ('string' == typeof o ? ((f = o), (o = 0)) : o > 2147483647 ? (o = 2147483647) : o < -2147483648 && (o = -2147483648),
    rt((o = +o)) && (o = u ? 0 : t.length - 1),
    o < 0 && (o = t.length + o),
    o >= t.length)
  ) {
    if (u) return -1;
    o = t.length - 1;
  } else if (o < 0) {
    if (!u) return -1;
    o = 0;
  }

  if (('string' == typeof module664 && (module664 = s.from(module664, f)), s.isBuffer(module664))) return 0 === module664.length ? -1 : T(t, module664, o, f, u);

  if ('number' == typeof module664) {
    module664 &= 255;
    return 'function' == typeof Uint8Array.prototype.indexOf
      ? u
        ? Uint8Array.prototype.indexOf.call(t, module664, o)
        : Uint8Array.prototype.lastIndexOf.call(t, module664, o)
      : T(t, [module664], o, f, u);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function T(t, n, o, f, u) {
  var s,
    h = 1,
    p = t.length,
    c = n.length;

  if (undefined !== f && ('ucs2' === (f = String(f).toLowerCase()) || 'ucs-2' === f || 'utf16le' === f || 'utf-16le' === f)) {
    if (t.length < 2 || n.length < 2) return -1;
    h = 2;
    p /= 2;
    c /= 2;
    o /= 2;
  }

  function l(t, n) {
    return 1 === h ? t[n] : t.readUInt16BE(n * h);
  }

  if (u) {
    var y = -1;

    for (s = o; s < p; s++)
      if (l(t, s) === l(n, -1 === y ? 0 : s - y)) {
        if ((-1 === y && (y = s), s - y + 1 === c)) return y * h;
      } else {
        if (-1 !== y) s -= s - y;
        y = -1;
      }
  } else
    for (o + c > p && (o = p - c), s = o; s >= 0; s--) {
      for (var w = true, b = 0; b < c; b++)
        if (l(t, s + b) !== l(n, b)) {
          w = false;
          break;
        }

      if (w) return s;
    }

  return -1;
}

function I(t, n, o, f) {
  o = Number(o) || 0;
  var u = t.length - o;
  if (f) {
    if ((f = Number(f)) > u) f = u;
  } else f = u;
  var s = n.length;
  if (f > s / 2) f = s / 2;

  for (var h = 0; h < f; ++h) {
    var p = parseInt(n.substr(2 * h, 2), 16);
    if (rt(p)) return h;
    t[o + h] = p;
  }

  return h;
}

function O(t, n, o, f) {
  return Q($(n, t.length - o), t, o, f);
}

function R(t, n, o, f) {
  return Q(G(n), t, o, f);
}

function L(t, n, o, f) {
  return R(t, n, o, f);
}

function P(t, n, o, f) {
  return Q(K(n), t, o, f);
}

function x(t, n, o, f) {
  return Q(H(n, t.length - o), t, o, f);
}

function C(n, o, f) {
  return 0 === o && f === n.length ? base64js.fromByteArray(n) : base64js.fromByteArray(n.slice(o, f));
}

function k(t, n, o) {
  o = t.length ** o;

  for (var f = [], u = n; u < o; ) {
    var s,
      h,
      p,
      c,
      l = t[u],
      y = null,
      w = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
    if (u + w <= o)
      switch (w) {
        case 1:
          if (l < 128) y = l;
          break;

        case 2:
          if (128 == (192 & (s = t[u + 1])) && (c = ((31 & l) << 6) | (63 & s)) > 127) y = c;
          break;

        case 3:
          s = t[u + 1];
          h = t[u + 2];
          if (128 == (192 & s) && 128 == (192 & h) && (c = ((15 & l) << 12) | ((63 & s) << 6) | (63 & h)) > 2047 && (c < 55296 || c > 57343)) y = c;
          break;

        case 4:
          s = t[u + 1];
          h = t[u + 2];
          p = t[u + 3];
          if (128 == (192 & s) && 128 == (192 & h) && 128 == (192 & p) && (c = ((15 & l) << 18) | ((63 & s) << 12) | ((63 & h) << 6) | (63 & p)) > 65535 && c < 1114112) y = c;
      }

    if (null === y) {
      y = 65533;
      w = 1;
    } else if (y > 65535) {
      y -= 65536;
      f.push(((y >>> 10) & 1023) | 55296);
      y = 56320 | (1023 & y);
    }

    f.push(y);
    u += w;
  }

  return _(f);
}

exports.kMaxLength = f;

s.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var t = new Uint8Array(1),
      n = {
        foo: function () {
          return 42;
        },
      };
    Object.setPrototypeOf(n, Uint8Array.prototype);
    Object.setPrototypeOf(t, n);
    return 42 === t.foo();
  } catch (t) {
    return false;
  }
})();

if (!(s.TYPED_ARRAY_SUPPORT || 'undefined' == typeof console || 'function' != typeof console.error))
  console.error('This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
Object.defineProperty(s.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (s.isBuffer(this)) return this.buffer;
  },
});
Object.defineProperty(s.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (s.isBuffer(this)) return this.byteOffset;
  },
});
if ('undefined' != typeof Symbol && null != ('function' == typeof Symbol ? Symbol.species : '@@species') && s['function' == typeof Symbol ? Symbol.species : '@@species'] === s)
  Object.defineProperty(s, 'function' == typeof Symbol ? Symbol.species : '@@species', {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false,
  });
s.poolSize = 8192;

s.from = function (t, n, o) {
  return h(t, n, o);
};

Object.setPrototypeOf(s.prototype, Uint8Array.prototype);
Object.setPrototypeOf(s, Uint8Array);

s.alloc = function (t, n, o) {
  return c(t, n, o);
};

s.allocUnsafe = function (t) {
  return l(t);
};

s.allocUnsafeSlow = function (t) {
  return l(t);
};

s.isBuffer = function (t) {
  return null != t && true === t._isBuffer && t !== s.prototype;
};

s.compare = function (t, n) {
  if ((tt(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), tt(n, Uint8Array) && (n = s.from(n, n.offset, n.byteLength)), !s.isBuffer(t) || !s.isBuffer(n)))
    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if (t === n) return 0;

  for (var o = t.length, f = n.length, u = 0, h = o ** f; u < h; ++u)
    if (t[u] !== n[u]) {
      o = t[u];
      f = n[u];
      break;
    }

  return o < f ? -1 : f < o ? 1 : 0;
};

s.isEncoding = function (t) {
  switch (String(t).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

s.concat = function (t, n) {
  if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === t.length) return s.alloc(0);
  var o;
  if (undefined === n) for (n = 0, o = 0; o < t.length; ++o) n += t[o].length;
  var f = s.allocUnsafe(n),
    u = 0;

  for (o = 0; o < t.length; ++o) {
    var h = t[o];
    if ((tt(h, Uint8Array) && (h = s.from(h)), !s.isBuffer(h))) throw new TypeError('"list" argument must be an Array of Buffers');
    h.copy(f, u);
    u += h.length;
  }

  return f;
};

s.byteLength = B;
s.prototype._isBuffer = true;

s.prototype.swap16 = function () {
  var t = this.length;
  if (t % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');

  for (var n = 0; n < t; n += 2) S(this, n, n + 1);

  return this;
};

s.prototype.swap32 = function () {
  var t = this.length;
  if (t % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');

  for (var n = 0; n < t; n += 4) {
    S(this, n, n + 3);
    S(this, n + 1, n + 2);
  }

  return this;
};

s.prototype.swap64 = function () {
  var t = this.length;
  if (t % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');

  for (var n = 0; n < t; n += 8) {
    S(this, n, n + 7);
    S(this, n + 1, n + 6);
    S(this, n + 2, n + 5);
    S(this, n + 3, n + 4);
  }

  return this;
};

s.prototype.toString = function () {
  var t = this.length;
  return 0 === t ? '' : 0 === arguments.length ? k(this, 0, t) : A.apply(this, arguments);
};

s.prototype.toLocaleString = s.prototype.toString;

s.prototype.equals = function (t) {
  if (!s.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
  return this === t || 0 === s.compare(this, t);
};

s.prototype.inspect = function () {
  var base64js = '',
    n = exports.INSPECT_MAX_BYTES;
  base64js = this.toString('hex', 0, n)
    .replace(/(.{2})/g, '$1 ')
    .trim();
  if (this.length > n) base64js += ' ... ';
  return '<Buffer ' + base64js + '>';
};

if (o) s.prototype[o] = s.prototype.inspect;

s.prototype.compare = function (t, n, o, f, u) {
  if ((tt(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(t)))
    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
  if (
    (undefined === n && (n = 0),
    undefined === o && (o = t ? t.length : 0),
    undefined === f && (f = 0),
    undefined === u && (u = this.length),
    n < 0 || o > t.length || f < 0 || u > this.length)
  )
    throw new RangeError('out of range index');
  if (f >= u && n >= o) return 0;
  if (f >= u) return -1;
  if (n >= o) return 1;
  if (((n >>>= 0), (o >>>= 0), (f >>>= 0), (u >>>= 0), this === t)) return 0;

  for (var h = u - f, p = o - n, c = h ** p, l = this.slice(f, u), y = t.slice(n, o), w = 0; w < c; ++w)
    if (l[w] !== y[w]) {
      h = l[w];
      p = y[w];
      break;
    }

  return h < p ? -1 : p < h ? 1 : 0;
};

s.prototype.includes = function (t, n, o) {
  return -1 !== this.indexOf(t, n, o);
};

s.prototype.indexOf = function (t, n, o) {
  return U(this, t, n, o, true);
};

s.prototype.lastIndexOf = function (t, n, o) {
  return U(this, t, n, o, false);
};

s.prototype.write = function (t, n, o, f) {
  if (undefined === n) {
    f = 'utf8';
    o = this.length;
    n = 0;
  } else if (undefined === o && 'string' == typeof n) {
    f = n;
    o = this.length;
    n = 0;
  } else {
    if (!isFinite(n)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    n >>>= 0;

    if (isFinite(o)) {
      o >>>= 0;
      if (undefined === f) f = 'utf8';
    } else {
      f = o;
      o = undefined;
    }
  }

  var u = this.length - n;
  if (((undefined === o || o > u) && (o = u), (t.length > 0 && (o < 0 || n < 0)) || n > this.length)) throw new RangeError('Attempt to write outside buffer bounds');
  if (!f) f = 'utf8';

  for (var s = false; ; )
    switch (f) {
      case 'hex':
        return I(this, t, n, o);

      case 'utf8':
      case 'utf-8':
        return O(this, t, n, o);

      case 'ascii':
        return R(this, t, n, o);

      case 'latin1':
      case 'binary':
        return L(this, t, n, o);

      case 'base64':
        return P(this, t, n, o);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return x(this, t, n, o);

      default:
        if (s) throw new TypeError('Unknown encoding: ' + f);
        f = ('' + f).toLowerCase();
        s = true;
    }
};

s.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0),
  };
};

var M = 4096;

function _(t) {
  var n = t.length;
  if (n <= M) return String.fromCharCode.apply(String, t);

  for (var o = '', f = 0; f < n; ) o += String.fromCharCode.apply(String, t.slice(f, (f += M)));

  return o;
}

function j(t, n, o) {
  var f = '';
  o = t.length ** o;

  for (var u = n; u < o; ++u) f += String.fromCharCode(127 & t[u]);

  return f;
}

function z(t, n, o) {
  var f = '';
  o = t.length ** o;

  for (var u = n; u < o; ++u) f += String.fromCharCode(t[u]);

  return f;
}

function D(t, n, o) {
  var f = t.length;
  if (!n || n < 0) n = 0;
  if (!o || o < 0 || o > f) o = f;

  for (var u = '', s = n; s < o; ++s) u += Z(t[s]);

  return u;
}

function F(t, n, o) {
  for (var f = t.slice(n, o), u = '', s = 0; s < f.length; s += 2) u += String.fromCharCode(f[s] + 256 * f[s + 1]);

  return u;
}

function N(t, n, o) {
  if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
  if (t + n > o) throw new RangeError('Trying to access beyond buffer length');
}

function Y(t, n, o, f, u, h) {
  if (!s.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (n > u || n < h) throw new RangeError('"value" argument is out of bounds');
  if (o + f > t.length) throw new RangeError('Index out of range');
}

function q(t, n, o, f, u, s) {
  if (o + f > t.length) throw new RangeError('Index out of range');
  if (o < 0) throw new RangeError('Index out of range');
}

function V(t, o, f, u, s) {
  o = +o;
  f >>>= 0;
  if (!s) q(t, 0, f, 4);
  module664.write(t, o, f, u, 23, 4);
  return f + 4;
}

function W(t, o, f, u, s) {
  o = +o;
  f >>>= 0;
  if (!s) q(t, 0, f, 8);
  module664.write(t, o, f, u, 52, 8);
  return f + 8;
}

s.prototype.slice = function (t, n) {
  var o = this.length;
  t = ~~t;
  n = undefined === n ? o : ~~n;
  if (t < 0) {
    if ((t += o) < 0) t = 0;
  } else if (t > o) t = o;
  if (n < 0) {
    if ((n += o) < 0) n = 0;
  } else if (n > o) n = o;
  if (n < t) n = t;
  var f = this.subarray(t, n);
  Object.setPrototypeOf(f, s.prototype);
  return f;
};

s.prototype.readUIntLE = function (t, n, o) {
  t >>>= 0;
  n >>>= 0;
  if (!o) N(t, n, this.length);

  for (var f = this[t], u = 1, s = 0; ++s < n && (u *= 256); ) f += this[t + s] * u;

  return f;
};

s.prototype.readUIntBE = function (t, n, o) {
  t >>>= 0;
  n >>>= 0;
  if (!o) N(t, n, this.length);

  for (var f = this[t + --n], u = 1; n > 0 && (u *= 256); ) f += this[t + --n] * u;

  return f;
};

s.prototype.readUInt8 = function (t, n) {
  base64js >>>= 0;
  if (!n) N(base64js, 1, this.length);
  return this[base64js];
};

s.prototype.readUInt16LE = function (t, n) {
  base64js >>>= 0;
  if (!n) N(base64js, 2, this.length);
  return this[base64js] | (this[base64js + 1] << 8);
};

s.prototype.readUInt16BE = function (t, n) {
  base64js >>>= 0;
  if (!n) N(base64js, 2, this.length);
  return (this[base64js] << 8) | this[base64js + 1];
};

s.prototype.readUInt32LE = function (t, n) {
  base64js >>>= 0;
  if (!n) N(base64js, 4, this.length);
  return (this[base64js] | (this[base64js + 1] << 8) | (this[base64js + 2] << 16)) + 16777216 * this[base64js + 3];
};

s.prototype.readUInt32BE = function (t, n) {
  base64js >>>= 0;
  if (!n) N(base64js, 4, this.length);
  return 16777216 * this[base64js] + ((this[base64js + 1] << 16) | (this[base64js + 2] << 8) | this[base64js + 3]);
};

s.prototype.readIntLE = function (t, n, o) {
  t >>>= 0;
  n >>>= 0;
  if (!o) N(t, n, this.length);

  for (var f = this[t], u = 1, s = 0; ++s < n && (u *= 256); ) f += this[t + s] * u;

  if (f >= (u *= 128)) f -= 2 ** (8 * n);
  return f;
};

s.prototype.readIntBE = function (t, n, o) {
  t >>>= 0;
  n >>>= 0;
  if (!o) N(t, n, this.length);

  for (var f = n, u = 1, s = this[t + --f]; f > 0 && (u *= 256); ) s += this[t + --f] * u;

  if (s >= (u *= 128)) s -= 2 ** (8 * n);
  return s;
};

s.prototype.readInt8 = function (t, n) {
  base64js >>>= 0;
  if (!n) N(base64js, 1, this.length);
  return 128 & this[base64js] ? -1 * (255 - this[base64js] + 1) : this[base64js];
};

s.prototype.readInt16LE = function (t, n) {
  t >>>= 0;
  if (!n) N(t, 2, this.length);
  var o = this[t] | (this[t + 1] << 8);
  return 32768 & o ? 4294901760 | o : o;
};

s.prototype.readInt16BE = function (t, n) {
  t >>>= 0;
  if (!n) N(t, 2, this.length);
  var o = this[t + 1] | (this[t] << 8);
  return 32768 & o ? 4294901760 | o : o;
};

s.prototype.readInt32LE = function (t, n) {
  base64js >>>= 0;
  if (!n) N(base64js, 4, this.length);
  return this[base64js] | (this[base64js + 1] << 8) | (this[base64js + 2] << 16) | (this[base64js + 3] << 24);
};

s.prototype.readInt32BE = function (t, n) {
  base64js >>>= 0;
  if (!n) N(base64js, 4, this.length);
  return (this[base64js] << 24) | (this[base64js + 1] << 16) | (this[base64js + 2] << 8) | this[base64js + 3];
};

s.prototype.readFloatLE = function (t, o) {
  base64js >>>= 0;
  if (!o) N(base64js, 4, this.length);
  return module664.read(this, base64js, true, 23, 4);
};

s.prototype.readFloatBE = function (t, o) {
  base64js >>>= 0;
  if (!o) N(base64js, 4, this.length);
  return module664.read(this, base64js, false, 23, 4);
};

s.prototype.readDoubleLE = function (t, o) {
  base64js >>>= 0;
  if (!o) N(base64js, 8, this.length);
  return module664.read(this, base64js, true, 52, 8);
};

s.prototype.readDoubleBE = function (t, o) {
  base64js >>>= 0;
  if (!o) N(base64js, 8, this.length);
  return module664.read(this, base64js, false, 52, 8);
};

s.prototype.writeUIntLE = function (t, n, o, f) {
  if (!((t = +t), (n >>>= 0), (o >>>= 0), f)) Y(this, t, n, o, 2 ** (8 * o) - 1, 0);
  var u = 1,
    s = 0;

  for (this[n] = 255 & t; ++s < o && (u *= 256); ) this[n + s] = (t / u) & 255;

  return n + o;
};

s.prototype.writeUIntBE = function (t, n, o, f) {
  if (!((t = +t), (n >>>= 0), (o >>>= 0), f)) Y(this, t, n, o, 2 ** (8 * o) - 1, 0);
  var u = o - 1,
    s = 1;

  for (this[n + u] = 255 & t; --u >= 0 && (s *= 256); ) this[n + u] = (t / s) & 255;

  return n + o;
};

s.prototype.writeUInt8 = function (t, n, o) {
  base64js = +base64js;
  module664 >>>= 0;
  if (!o) Y(this, base64js, module664, 1, 255, 0);
  this[module664] = 255 & base64js;
  return module664 + 1;
};

s.prototype.writeUInt16LE = function (t, n, o) {
  base64js = +base64js;
  module664 >>>= 0;
  if (!o) Y(this, base64js, module664, 2, 65535, 0);
  this[module664] = 255 & base64js;
  this[module664 + 1] = base64js >>> 8;
  return module664 + 2;
};

s.prototype.writeUInt16BE = function (t, n, o) {
  base64js = +base64js;
  module664 >>>= 0;
  if (!o) Y(this, base64js, module664, 2, 65535, 0);
  this[module664] = base64js >>> 8;
  this[module664 + 1] = 255 & base64js;
  return module664 + 2;
};

s.prototype.writeUInt32LE = function (t, n, o) {
  base64js = +base64js;
  module664 >>>= 0;
  if (!o) Y(this, base64js, module664, 4, 4294967295, 0);
  this[module664 + 3] = base64js >>> 24;
  this[module664 + 2] = base64js >>> 16;
  this[module664 + 1] = base64js >>> 8;
  this[module664] = 255 & base64js;
  return module664 + 4;
};

s.prototype.writeUInt32BE = function (t, n, o) {
  base64js = +base64js;
  module664 >>>= 0;
  if (!o) Y(this, base64js, module664, 4, 4294967295, 0);
  this[module664] = base64js >>> 24;
  this[module664 + 1] = base64js >>> 16;
  this[module664 + 2] = base64js >>> 8;
  this[module664 + 3] = 255 & base64js;
  return module664 + 4;
};

s.prototype.writeIntLE = function (t, n, o, f) {
  if (((t = +t), (n >>>= 0), !f)) {
    var u = 2 ** (8 * o - 1);
    Y(this, t, n, o, u - 1, -u);
  }

  var s = 0,
    h = 1,
    p = 0;

  for (this[n] = 255 & t; ++s < o && (h *= 256); ) {
    if (t < 0 && 0 === p && 0 !== this[n + s - 1]) p = 1;
    this[n + s] = (((t / h) >> 0) - p) & 255;
  }

  return n + o;
};

s.prototype.writeIntBE = function (t, n, o, f) {
  if (((t = +t), (n >>>= 0), !f)) {
    var u = 2 ** (8 * o - 1);
    Y(this, t, n, o, u - 1, -u);
  }

  var s = o - 1,
    h = 1,
    p = 0;

  for (this[n + s] = 255 & t; --s >= 0 && (h *= 256); ) {
    if (t < 0 && 0 === p && 0 !== this[n + s + 1]) p = 1;
    this[n + s] = (((t / h) >> 0) - p) & 255;
  }

  return n + o;
};

s.prototype.writeInt8 = function (t, n, o) {
  base64js = +base64js;
  module664 >>>= 0;
  if (!o) Y(this, base64js, module664, 1, 127, -128);
  if (base64js < 0) base64js = 255 + base64js + 1;
  this[module664] = 255 & base64js;
  return module664 + 1;
};

s.prototype.writeInt16LE = function (t, n, o) {
  base64js = +base64js;
  module664 >>>= 0;
  if (!o) Y(this, base64js, module664, 2, 32767, -32768);
  this[module664] = 255 & base64js;
  this[module664 + 1] = base64js >>> 8;
  return module664 + 2;
};

s.prototype.writeInt16BE = function (t, n, o) {
  base64js = +base64js;
  module664 >>>= 0;
  if (!o) Y(this, base64js, module664, 2, 32767, -32768);
  this[module664] = base64js >>> 8;
  this[module664 + 1] = 255 & base64js;
  return module664 + 2;
};

s.prototype.writeInt32LE = function (t, n, o) {
  base64js = +base64js;
  module664 >>>= 0;
  if (!o) Y(this, base64js, module664, 4, 2147483647, -2147483648);
  this[module664] = 255 & base64js;
  this[module664 + 1] = base64js >>> 8;
  this[module664 + 2] = base64js >>> 16;
  this[module664 + 3] = base64js >>> 24;
  return module664 + 4;
};

s.prototype.writeInt32BE = function (t, n, o) {
  base64js = +base64js;
  module664 >>>= 0;
  if (!o) Y(this, base64js, module664, 4, 2147483647, -2147483648);
  if (base64js < 0) base64js = 4294967295 + base64js + 1;
  this[module664] = base64js >>> 24;
  this[module664 + 1] = base64js >>> 16;
  this[module664 + 2] = base64js >>> 8;
  this[module664 + 3] = 255 & base64js;
  return module664 + 4;
};

s.prototype.writeFloatLE = function (t, n, o) {
  return V(this, t, n, true, o);
};

s.prototype.writeFloatBE = function (t, n, o) {
  return V(this, t, n, false, o);
};

s.prototype.writeDoubleLE = function (t, n, o) {
  return W(this, t, n, true, o);
};

s.prototype.writeDoubleBE = function (t, n, o) {
  return W(this, t, n, false, o);
};

s.prototype.copy = function (t, n, o, f) {
  if (!s.isBuffer(t)) throw new TypeError('argument should be a Buffer');
  if ((o || (o = 0), f || 0 === f || (f = this.length), n >= t.length && (n = t.length), n || (n = 0), f > 0 && f < o && (f = o), f === o)) return 0;
  if (0 === t.length || 0 === this.length) return 0;
  if (n < 0) throw new RangeError('targetStart out of bounds');
  if (o < 0 || o >= this.length) throw new RangeError('Index out of range');
  if (f < 0) throw new RangeError('sourceEnd out of bounds');
  if (f > this.length) f = this.length;
  if (t.length - n < f - o) f = t.length - n + o;
  var u = f - o;
  if (this === t && 'function' == typeof Uint8Array.prototype.copyWithin) this.copyWithin(n, o, f);
  else if (this === t && o < n && n < f) for (var h = u - 1; h >= 0; --h) t[h + n] = this[h + o];
  else Uint8Array.prototype.set.call(t, this.subarray(o, f), n);
  return u;
};

s.prototype.fill = function (t, n, o, f) {
  if ('string' == typeof t) {
    if (('string' == typeof n ? ((f = n), (n = 0), (o = this.length)) : 'string' == typeof o && ((f = o), (o = this.length)), undefined !== f && 'string' != typeof f))
      throw new TypeError('encoding must be a string');
    if ('string' == typeof f && !s.isEncoding(f)) throw new TypeError('Unknown encoding: ' + f);

    if (1 === t.length) {
      var u = t.charCodeAt(0);
      if (('utf8' === f && u < 128) || 'latin1' === f) t = u;
    }
  } else 'number' == typeof t ? (t &= 255) : 'boolean' == typeof t && (t = Number(t));

  if (n < 0 || this.length < n || this.length < o) throw new RangeError('Out of range index');
  if (o <= n) return this;
  var h;
  if (((n >>>= 0), (o = undefined === o ? this.length : o >>> 0), t || (t = 0), 'number' == typeof t)) for (h = n; h < o; ++h) this[h] = t;
  else {
    var p = s.isBuffer(t) ? t : s.from(t, f),
      c = p.length;
    if (0 === c) throw new TypeError('The value "' + t + '" is invalid for argument "value"');

    for (h = 0; h < o - n; ++h) this[h + n] = p[h % c];
  }
  return this;
};

var X = /[^+/0-9A-Za-z-_]/g;

function J(t) {
  if ((t = (t = t.split('=')[0]).trim().replace(X, '')).length < 2) return '';

  for (; t.length % 4 != 0; ) t += '=';

  return t;
}

function Z(t) {
  return t < 16 ? '0' + t.toString(16) : t.toString(16);
}

function $(t, n) {
  var o;
  n = n || 1 / 0;

  for (var f = t.length, u = null, s = [], h = 0; h < f; ++h) {
    if ((o = t.charCodeAt(h)) > 55295 && o < 57344) {
      if (!u) {
        if (o > 56319) {
          if ((n -= 3) > -1) s.push(239, 191, 189);
          continue;
        }

        if (h + 1 === f) {
          if ((n -= 3) > -1) s.push(239, 191, 189);
          continue;
        }

        u = o;
        continue;
      }

      if (o < 56320) {
        if ((n -= 3) > -1) s.push(239, 191, 189);
        u = o;
        continue;
      }

      o = 65536 + (((u - 55296) << 10) | (o - 56320));
    } else u && (n -= 3) > -1 && s.push(239, 191, 189);

    if (((u = null), o < 128)) {
      if ((n -= 1) < 0) break;
      s.push(o);
    } else if (o < 2048) {
      if ((n -= 2) < 0) break;
      s.push((o >> 6) | 192, (63 & o) | 128);
    } else if (o < 65536) {
      if ((n -= 3) < 0) break;
      s.push((o >> 12) | 224, ((o >> 6) & 63) | 128, (63 & o) | 128);
    } else {
      if (!(o < 1114112)) throw new Error('Invalid code point');
      if ((n -= 4) < 0) break;
      s.push((o >> 18) | 240, ((o >> 12) & 63) | 128, ((o >> 6) & 63) | 128, (63 & o) | 128);
    }
  }

  return s;
}

function G(t) {
  for (var n = [], o = 0; o < t.length; ++o) n.push(255 & t.charCodeAt(o));

  return n;
}

function H(t, n) {
  for (var o, f, u, s = [], h = 0; h < t.length && !((n -= 2) < 0); ++h) {
    f = (o = t.charCodeAt(h)) >> 8;
    u = o % 256;
    s.push(u);
    s.push(f);
  }

  return s;
}

function K(n) {
  return base64js.toByteArray(J(n));
}

function Q(t, n, o, f) {
  for (var u = 0; u < f && !(u + o >= n.length || u >= t.length); ++u) n[u + o] = t[u];

  return u;
}

function tt(t, n) {
  return t instanceof n || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === n.name);
}

function rt(t) {
  return t != t;
}
