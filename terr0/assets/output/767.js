!(function (n) {
  'use strict';

  var t, o, u, f, c;
  if (n)
    (function () {
      var u = n.crypto || n.msCrypto;
      if (!t && u && u.getRandomValues)
        try {
          var c = new Uint8Array(16);

          f = t = function () {
            u.getRandomValues(c);
            return c;
          };

          t();
        } catch (n) {}

      if (!t) {
        var s = new Array(16);

        o = t = function () {
          for (var n, t = 0; t < 16; t++) {
            if (0 == (3 & t)) n = 4294967296 * Math.random();
            s[t] = (n >>> ((3 & t) << 3)) & 255;
          }

          return s;
        };

        if ('undefined' != typeof console && console.warn) console.warn('[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()');
      }
    })();
  else
    (function () {
      if ('function' == typeof require)
        try {
          var module768 = require('./768');

          u = t =
            module768 &&
            function () {
              return module768(16);
            };

          t();
        } catch (n) {}
    })();

  for (var s = 'function' == typeof Buffer ? Buffer : Array, l = [], v = {}, w = 0; w < 256; w++) {
    l[w] = (w + 256).toString(16).substr(1);
    v[l[w]] = w;
  }

  function y(n, t) {
    var o = t || 0,
      u = l;
    return (
      u[n[o++]] +
      u[n[o++]] +
      u[n[o++]] +
      u[n[o++]] +
      '-' +
      u[n[o++]] +
      u[n[o++]] +
      '-' +
      u[n[o++]] +
      u[n[o++]] +
      '-' +
      u[n[o++]] +
      u[n[o++]] +
      '-' +
      u[n[o++]] +
      u[n[o++]] +
      u[n[o++]] +
      u[n[o++]] +
      u[n[o++]] +
      u[n[o++]]
    );
  }

  var p = t(),
    h = [1 | p[0], p[1], p[2], p[3], p[4], p[5]],
    C = 16383 & ((p[6] << 8) | p[7]),
    R = 0,
    _ = 0;

  function b(n, o, u) {
    var f = (o && u) || 0;

    if ('string' == typeof n) {
      o = 'binary' === n ? new s(16) : null;
      n = null;
    }

    var c = (n = n || {}).random || (n.rng || t)();
    if (((c[6] = (15 & c[6]) | 64), (c[8] = (63 & c[8]) | 128), o)) for (var l = 0; l < 16; l++) o[f + l] = c[l];
    return o || y(c);
  }

  var k = b;

  k.v1 = function (n, t, o) {
    var u = (t && o) || 0,
      f = t || [],
      c = null != (n = n || {}).clockseq ? n.clockseq : C,
      s = null != n.msecs ? n.msecs : new Date().getTime(),
      l = null != n.nsecs ? n.nsecs : _ + 1,
      v = s - R + (l - _) / 1e4;
    if ((v < 0 && null == n.clockseq && (c = (c + 1) & 16383), (v < 0 || s > R) && null == n.nsecs && (l = 0), l >= 1e4))
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    R = s;
    _ = l;
    C = c;
    var w = (1e4 * (268435455 & (s += 122192928e5)) + l) % 4294967296;
    f[u++] = (w >>> 24) & 255;
    f[u++] = (w >>> 16) & 255;
    f[u++] = (w >>> 8) & 255;
    f[u++] = 255 & w;
    var p = ((s / 4294967296) * 1e4) & 268435455;
    f[u++] = (p >>> 8) & 255;
    f[u++] = 255 & p;
    f[u++] = ((p >>> 24) & 15) | 16;
    f[u++] = (p >>> 16) & 255;
    f[u++] = (c >>> 8) | 128;
    f[u++] = 255 & c;

    for (var b = n.node || h, k = 0; k < 6; k++) f[u + k] = b[k];

    return t || y(f);
  };

  k.v4 = b;

  k.parse = function (n, t, o) {
    var u = (t && o) || 0,
      f = 0;

    for (
      t = t || [],
        n.toLowerCase().replace(/[0-9a-f]{2}/g, function (n) {
          if (f < 16) t[u + f++] = v[n];
        });
      f < 16;

    )
      t[u + f++] = 0;

    return t;
  };

  k.unparse = y;
  k.BufferClass = s;
  k._rng = t;
  k._mathRNG = o;
  k._nodeRNG = u;
  k._whatwgRNG = f;
  if (undefined !== module && module.exports) module.exports = k;
  else if ('function' == typeof define && define.amd)
    define(function () {
      return k;
    });
  else {
    c = n.uuid;

    k.noConflict = function () {
      n.uuid = c;
      return k;
    };

    n.uuid = k;
  }
})('undefined' != typeof window ? window : null);
