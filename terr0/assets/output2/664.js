exports.read = function (o, t, h, M, f) {
  var w,
    p,
    n = 8 * f - M - 1,
    N = (1 << n) - 1,
    u = N >> 1,
    s = -7,
    c = h ? f - 1 : 0,
    l = h ? -1 : 1,
    v = o[t + c];

  for (c += l, w = v & ((1 << -s) - 1), v >>= -s, s += n; s > 0; w = 256 * w + o[t + c], c += l, s -= 8);

  for (p = w & ((1 << -s) - 1), w >>= -s, s += M; s > 0; p = 256 * p + o[t + c], c += l, s -= 8);

  if (0 === w) w = 1 - u;
  else {
    if (w === N) return p ? NaN : (1 / 0) * (v ? -1 : 1);
    p += 2 ** M;
    w -= u;
  }
  return (v ? -1 : 1) * p * 2 ** (w - M);
};

exports.write = function (o, t, h, M, f, w) {
  var p,
    n,
    N,
    u = 8 * w - f - 1,
    s = (1 << u) - 1,
    c = s >> 1,
    l = 23 === f ? 2 ** -24 - 2 ** -77 : 0,
    v = M ? 0 : w - 1,
    _ = M ? 1 : -1,
    b = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;

  for (
    t = Math.abs(t),
      isNaN(t) || t === 1 / 0
        ? ((n = isNaN(t) ? 1 : 0), (p = s))
        : ((p = Math.floor(Math.log(t) / Math.LN2)),
          t * (N = 2 ** -p) < 1 && (p--, (N *= 2)),
          (t += p + c >= 1 ? l / N : l * 2 ** (1 - c)) * N >= 2 && (p++, (N /= 2)),
          p + c >= s ? ((n = 0), (p = s)) : p + c >= 1 ? ((n = (t * N - 1) * 2 ** f), (p += c)) : ((n = t * 2 ** (c - 1) * 2 ** f), (p = 0)));
    f >= 8;
    o[h + v] = 255 & n, v += _, n /= 256, f -= 8
  );

  for (p = (p << f) | n, u += f; u > 0; o[h + v] = 255 & p, v += _, p /= 256, u -= 8);

  o[h + v - _] |= 128 * b;
};
