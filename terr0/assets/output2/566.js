export function createOrReuseStyleNode(t, n) {
  if ((t = module2.StyleSheet.flatten(t) || {}).transform)
    t = _({}, t, {
      transform: module567.createOrReuseTransformNode(t.transform, n && n._style.transform),
    });
  var o = b(t);
  if (n && module442.default(o, n._config)) return n;
  return new j(t, o);
}
import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module284 = require('./284'),
  module527 = require('./527'),
  module567 = require('./567'),
  module442 = require('./442');

function p(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function _(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      p(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      p(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function b(t) {
  var n = {};

  for (var o in t) {
    var u = t[o];
    if (u instanceof module527.default) n[o] = u.__nodeID;
  }

  return n;
}

class j {
  constructor(t, o) {
    var l;
    module356.default(this, c);
    (l = module358.default(
      this,
      module361.default(c).call(
        this,
        {
          type: 'style',
          style: o,
        },
        Object.values(t)
      )
    ))._config = o;
    l._style = t;
    return l;
  }

  _walkStyleAndGetAnimatedValues(t) {
    var n = {};

    for (var o in t) {
      var u = t[o];
      if (u instanceof module527.default) n[o] = u.__getValue();
      else if (u && !Array.isArray(u) && 'object' == typeof u) n[o] = this._walkStyleAndGetAnimatedValues(u);
    }

    return n;
  }

  __onEvaluate() {
    return this._walkStyleAndGetAnimatedValues(this._style);
  }
}

export default j;
