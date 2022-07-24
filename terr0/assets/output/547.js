exports.createAnimatedEvent = function (t, n) {
  return new N(t, n);
};

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module528 = require('./528'),
  module527 = require('./527'),
  module536 = require('./536'),
  module543 = require('./543'),
  module191 = require('./191'),
  module548 = require('./548');

function w(t) {
  var n = [],
    o = [],
    s = function t(s, l) {
      if (s instanceof module536.default) n.push(l.concat(s.__nodeID));
      else if ('object' == typeof s && s.__val) n.push(l.concat(s.__val.__nodeID));
      else if ('function' == typeof s) {
        var f = new module536.default(0);
        o.push(module543.createAnimatedAlways(s(f)));
        n.push(l.concat(f.__nodeID));
      } else if ('object' == typeof s) for (var u in s) t(s[u], l.concat(u));
    };

  module191.default(t[0] && t[0].nativeEvent, 'Native driven events only support animated values contained inside `nativeEvent`.');
  var l = t[0].nativeEvent;
  if ('object' == typeof l) s(l, []);
  else if ('function' == typeof l) {
    var f = {
        get: function (t, n) {
          return '__isProxy' === n || (t[n] || '__val' === n || (t[n] = new Proxy({}, f)), t[n]);
        },
        set: function (t, n, o) {
          if ('__val' === n) t[n] = o;
        },
      },
      u = 'function' == typeof Proxy ? new Proxy({}, f) : module548.default();
    o.push(module543.createAnimatedAlways(l(u)));
    s(u, []);
  }
  return {
    eventMappings: n,
    alwaysNodes: o,
  };
}

var N = (function (t) {
  function _(t) {
    var o;
    if (arguments.length > 1 && undefined !== arguments[1]) arguments[1];
    module356.default(this, _);
    var f = w(t),
      u = f.eventMappings,
      v = f.alwaysNodes;
    (o = module358.default(
      this,
      module361.default(_).call(this, {
        type: 'event',
        argMapping: u,
      })
    )).__isNative = true;
    o._alwaysNodes = v;
    return o;
  }

  module362.default(_, t);
  module357.default(_, [
    {
      key: 'attachEvent',
      value: function (t, n) {
        for (var o = 0; o < this._alwaysNodes.length; o++) this._alwaysNodes[o].__attach();

        this.__attach();

        var s = module2.findNodeHandle(t);
        module528.default.attachEvent(s, n, this.__nodeID);
      },
    },
    {
      key: 'detachEvent',
      value: function (t, n) {
        for (var o = 0; o < this._alwaysNodes.length; o++) this._alwaysNodes[o].isNativelyInitialized() && this._alwaysNodes[o].__detach();

        var s = module2.findNodeHandle(t);
        module528.default.detachEvent(s, n, this.__nodeID);

        this.__detach();
      },
    },
  ]);
  return _;
})(module527.default);

exports.default = N;
