export default function default(t) {
  var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};

  class b {
    constructor() {
      var t, n;
      module356.default(this, j);

      (n = module358.default(this, (t = module361.default(j)).call.apply(t, [this].concat(args))))._refHandler = function (t) {
        for (var o = t; null != o;) {
          for (var l = Object.getOwnPropertyNames(o), u = Array.isArray(l), f = 0, l = u ? l : l["function" == typeof Symbol && "function" == typeof Symbol && "function" == typeof Symbol ? Symbol.iterator : "@@iterator"]();;) {
            var c;

            if (u) {
              if (f >= l.length) break;
              c = l[f++];
            } else {
              if ((f = l.next()).done) break;
              c = f.value;
            }

            var p = c;
            if (!(p.startsWith('_') || p.startsWith('component') || v.has(p) || 'function' != typeof o[p] || undefined !== n[p])) o[p].prototype ? n[p] = o[p].bind(t) : n[p] = o[p];
          }

          o = Object.getPrototypeOf(o);
        }
      };

      return n;
    }

    render() {
      var l = this,
          u = Object.keys(this.props).reduce(function (t, n) {
        if (-1 !== h.indexOf(n)) t[n] = l.props[n];
        return t;
      }, O({}, o));
      return <module440.default><t /></module440.default>;
    }

  }

  b.propTypes = O({}, t.propTypes);
  b.displayName = t.displayName || 'ComponentWrapper';
  return b;
}
import React from "react";

var module51 = require("./51"),
    module284 = require("./284"),
    module356 = require("./356"),
    module358 = require("./358"),
    module361 = require("./361"),
    module362 = require("./362"),
    module440 = require("./440");

function b(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(t);
    if (n) l = l.filter(function (n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable;
    });
    o.push.apply(o, l);
  }

  return o;
}

function O(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2) b(Object(l), true).forEach(function (n) {
      module284.default(t, n, l[n]);
    });else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));else b(Object(l)).forEach(function (n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
    });
  }

  return t;
}

var v = new Set(['replaceState', 'isMounted']),
    h = ['id', 'minPointers', 'enabled', 'waitFor', 'simultaneousHandlers', 'shouldCancelWhenOutside', 'hitSlop', 'onGestureEvent', 'onHandlerStateChange', 'onBegan', 'onFailed', 'onCancelled', 'onActivated', 'onEnded', 'shouldActivateOnStart', 'disallowInterruption', 'onGestureHandlerEvent', 'onGestureHandlerStateChange'];