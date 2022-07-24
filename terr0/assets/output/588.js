exports.default = function (n) {
  var t, f;
  return function (...args) {
    if (t) {
      if (t.length !== args.length) l = true;
      else
        for (var c = 0; c < t.length; c++)
          if (t[c] !== args[c]) {
            l = true;
            break;
          }
    } else l = true;

    t = args;
    if (l || undefined === f) f = n.apply(undefined, args);
    return f;
  };
};
