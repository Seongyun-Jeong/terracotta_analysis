var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  o = {
    btoa: function () {
      var o,
        n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '',
        c = 0,
        f = 0,
        h = '';

      for (f = 0, c = 0, o = t; n.charAt(0 | c) || ((o = '='), c % 1); h += o.charAt(63 & (f >> (8 - (c % 1) * 8)))) {
        var l = n.charCodeAt((c += 0.75));
        if (l > 255) throw new Error("'RNFirebase.utils.btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        f = (f << 8) | l;
      }

      return h;
    },
    atob: function () {
      var o,
        n = 0,
        c = 0,
        f = 0,
        h = '',
        l = (arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : '').replace(/=+$/, '');
      if (l.length % 4 == 1) throw new Error("'RNFirebase.utils.atob' failed: The string to be decoded is not correctly encoded.");

      for (c = 0, f = 0, n = 0; (o = l.charAt(n++)); ~o && ((f = c % 4 ? 64 * f + o : o), c++ % 4) ? (h += String.fromCharCode(255 & (f >> ((-2 * c) & 6)))) : 0) o = t.indexOf(o);

      return h;
    },
  };
exports.default = o;
