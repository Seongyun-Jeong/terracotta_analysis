function t(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {},
      O = Object.keys(u);
    if ('function' == typeof Object.getOwnPropertySymbols)
      O = O.concat(
        Object.getOwnPropertySymbols(u).filter(function (t) {
          return Object.getOwnPropertyDescriptor(u, t).enumerable;
        })
      );
    O.forEach(function (o) {
      n(t, o, u[o]);
    });
  }

  return t;
}

function n(t, n, o) {
  if (n in t)
    Object.defineProperty(t, n, {
      value: o,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  else t[n] = o;
  return t;
}

var o = 'Navigation/POP',
  u = 'Navigation/PUSH',
  O = 'Navigation/RESET',
  P = {
    POP: o,
    POP_TO_TOP: 'Navigation/POP_TO_TOP',
    PUSH: u,
    RESET: O,
    REPLACE: 'Navigation/REPLACE',
    COMPLETE_TRANSITION: 'Navigation/COMPLETE_TRANSITION',
    pop: function (n) {
      return t(
        {
          type: o,
        },
        n
      );
    },
    popToTop: function (n) {
      return t(
        {
          type: 'Navigation/POP_TO_TOP',
        },
        n
      );
    },
    push: function (n) {
      return t(
        {
          type: u,
        },
        n
      );
    },
    reset: function (n) {
      return t(
        {
          type: O,
          key: null,
        },
        n
      );
    },
    replace: function (n) {
      return t(
        {
          type: 'Navigation/REPLACE',
        },
        n
      );
    },
    completeTransition: function (n) {
      return t(
        {
          type: 'Navigation/COMPLETE_TRANSITION',
        },
        n
      );
    },
  };
exports.default = P;
