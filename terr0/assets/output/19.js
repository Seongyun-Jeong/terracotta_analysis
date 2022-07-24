module.exports = function (n) {
  if (Array.isArray(n)) {
    for (var t = 0, f = new Array(n.length); t < n.length; t++) f[t] = n[t];

    return f;
  }
};
