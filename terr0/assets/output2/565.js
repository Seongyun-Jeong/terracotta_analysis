export function createOrReusePropsNode(t, n, o) {
  if (t.style)
    t = w({}, t, {
      style: module566.createOrReuseStyleNode(t.style, o && o._props.style),
    });
  var c = j(t);
  if (o && module442.default(c, o._config)) return o;
  return new P(t, c, n);
}
import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module531 = require('./531'),
  module362 = require('./362'),
  module284 = require('./284'),
  module527 = require('./527'),
  module547 = require('./547'),
  module566 = require('./566'),
  module191 = require('./191'),
  module442 = require('./442');

function b(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function w(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      b(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      b(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

function j(t) {
  var n = {};

  for (var o in t) {
    var c = t[o];
    if (c instanceof module527.default && !(c instanceof module547.default)) n[o] = c.__nodeID;
  }

  return n;
}

class P {
  constructor(t, o, l) {
    var f;
    module356.default(this, s);
    (f = module358.default(
      this,
      module361.default(s).call(
        this,
        {
          type: 'props',
          props: o,
        },
        Object.values(t).filter(function (t) {
          return !(t instanceof module547.default);
        })
      )
    ))._config = o;
    f._props = t;
    f._callback = l;

    f.__attach();

    return f;
  }

  __onEvaluate() {
    var t = {};

    for (var n in this._props) {
      var o = this._props[n];
      if (o instanceof module527.default) t[n] = o.__getValue();
    }

    return t;
  }

  __detach() {
    var t = module2.findNodeHandle(this._animatedView);
    module191.default(null != t, 'Unable to locate attached view in the native tree');

    this._disconnectAnimatedView(t);

    module531.default(module361.default(s.prototype), '__detach', this).call(this);
  }

  update() {
    this._callback();
  }

  setNativeView(t) {
    if (this._animatedView !== t) {
      this._animatedView = t;
      var n = module2.findNodeHandle(this._animatedView);
      module191.default(null != n, 'Unable to locate attached view in the native tree');

      this._connectAnimatedView(n);
    }
  }
}
