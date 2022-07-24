var module284 = require('./284'),
  module356 = require('./356'),
  module528 = require('./528');

function u(t, n) {
  var _ = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });

    _.push.apply(_, o);
  }

  return _;
}

function s(t) {
  for (var _ = 1; _ < arguments.length; _++) {
    var o = null != arguments[_] ? arguments[_] : {};
    if (_ % 2)
      u(Object(o), true).forEach(function (_) {
        module284.default(t, _, o[_]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      u(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var h = [],
  c = 1,
  f = null;

function v(t) {
  for (var n in t) {
    var _ = t[n];
    if (_ instanceof k) t[n] = _.__nodeID;
  }

  return t;
}

function p() {
  for (
    var t = new Set(),
      n = function n(_) {
        if (!t.has(_))
          if ((t.add(_), 'function' == typeof _.update)) _.update();
          else {
            var o = _.__getChildren();

            if (o) for (var l = 0, u = o.length; l < u; l++) n(o[l]);
          }
      },
      _ = 0;
    _ < h.length;
    _++
  ) {
    n(h[_]);
  }

  h.length = 0;
  f = null;
  c += 1;
}

var y = 0;

class k {
  constructor(n, o) {
    module356.default(this, t);
    this.__lastLoopID = 0;
    this.__memoizedValue = null;
    this.__children = [];
    this.__nodeID = ++y;
    this.__nodeConfig = v(n);
    this.__initialized = false;
    this.__inputNodes =
      o &&
      o.filter(function (n) {
        return n instanceof t;
      });
  }

  __attach() {
    this.__nativeInitialize();

    var t = this.__inputNodes;
    if (t) for (var n = 0, _ = t.length; n < _; n++) t[n].__addChild(this);
  }

  __detach() {
    var t = this.__inputNodes;
    if (t) for (var n = 0, _ = t.length; n < _; n++) t[n].__removeChild(this);

    this.__nativeTearDown();
  }

  __getValue() {
    if (this.__lastLoopID < c) {
      this.__lastLoopID = c;
      return (this.__memoizedValue = this.__onEvaluate());
    } else return this.__memoizedValue;
  }

  __forceUpdateCache(t) {
    this.__memoizedValue = t;

    this.__markUpdated();
  }

  __dangerouslyRescheduleEvaluate() {
    this.__lastLoopID = 0;

    this.__markUpdated();
  }

  __markUpdated() {
    h.push(this);
    if (!f) f = setImmediate(p);
  }

  __nativeInitialize() {
    if (!this.__initialized) {
      module528.default.createNode(this.__nodeID, s({}, this.__nodeConfig));
      this.__initialized = true;
    }
  }

  __nativeTearDown() {
    if (this.__initialized) {
      module528.default.dropNode(this.__nodeID);
      this.__initialized = false;
    }
  }

  isNativelyInitialized() {
    return this.__initialized;
  }

  __onEvaluate() {
    throw new Error('Missing implementation of onEvaluate');
  }

  __getProps() {
    return this.__getValue();
  }

  __getChildren() {
    return this.__children;
  }

  __addChild(t) {
    if (0 === this.__children.length) this.__attach();

    this.__children.push(t);

    t.__nativeInitialize();

    module528.default.connectNodes(this.__nodeID, t.__nodeID);
  }

  __removeChild(t) {
    var n = this.__children.indexOf(t);

    if (-1 !== n) {
      module528.default.disconnectNodes(this.__nodeID, t.__nodeID);

      this.__children.splice(n, 1);

      if (0 === this.__children.length) this.__detach();
    } else console.warn("Trying to remove a child that doesn't exist");
  }

  _connectAnimatedView(t) {
    module528.default.connectNodeToView(this.__nodeID, t);
  }

  _disconnectAnimatedView(t) {
    module528.default.disconnectNodeFromView(this.__nodeID, t);
  }
}

export default k;
