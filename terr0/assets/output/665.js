var t,
  n = 'object' == typeof Reflect ? Reflect : null,
  o =
    n && 'function' == typeof n.apply
      ? n.apply
      : function (t, n, o) {
          return Function.prototype.apply.call(t, n, o);
        };
t =
  n && 'function' == typeof n.ownKeys
    ? n.ownKeys
    : Object.getOwnPropertySymbols
    ? function (t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
      }
    : function (t) {
        return Object.getOwnPropertyNames(t);
      };

var s =
  Number.isNaN ||
  function (t) {
    return t != t;
  };

function u() {
  u.init.call(this);
}

module.exports = u;
u.EventEmitter = u;
u.prototype._events = undefined;
u.prototype._eventsCount = 0;
u.prototype._maxListeners = undefined;
var f = 10;

function p(t) {
  return undefined === t._maxListeners ? u.defaultMaxListeners : t._maxListeners;
}

function v(t, n, o, s) {
  var u, f, v, h;
  if ('function' != typeof o) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof o);

  if (
    (undefined === (f = t._events)
      ? ((f = t._events = Object.create(null)), (t._eventsCount = 0))
      : (undefined !== f.newListener && (t.emit('newListener', n, o.listener ? o.listener : o), (f = t._events)), (v = f[n])),
    undefined === v)
  ) {
    v = f[n] = o;
    ++t._eventsCount;
  } else if (('function' == typeof v ? (v = f[n] = s ? [o, v] : [v, o]) : s ? v.unshift(o) : v.push(o), (u = p(t)) > 0 && v.length > u && !v.warned)) {
    v.warned = true;
    var c = new Error('Possible EventEmitter memory leak detected. ' + v.length + ' ' + String(n) + ' listeners added. Use emitter.setMaxListeners() to increase limit');
    c.name = 'MaxListenersExceededWarning';
    c.emitter = t;
    c.type = n;
    c.count = v.length;
    h = c;
    if (console && console.warn) console.warn(h);
  }

  return t;
}

function h() {
  for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);

  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    o(this.listener, this.target, t);
  }
}

function c(t, n, o) {
  var s = {
      fired: false,
      wrapFn: undefined,
      target: t,
      type: n,
      listener: o,
    },
    u = h.bind(s);
  u.listener = o;
  s.wrapFn = u;
  return u;
}

function l(t, n, o) {
  var s = t._events;
  if (undefined === s) return [];
  var u = s[n];
  return undefined === u ? [] : 'function' == typeof u ? (o ? [u.listener || u] : [u]) : o ? w(u) : L(u, u.length);
}

function y(t) {
  var n = this._events;

  if (undefined !== n) {
    var o = n[t];
    if ('function' == typeof o) return 1;
    if (undefined !== o) return o.length;
  }

  return 0;
}

function L(t, n) {
  for (var o = new Array(n), s = 0; s < n; ++s) o[s] = t[s];

  return o;
}

function _(t, n) {
  for (; n + 1 < t.length; n++) t[n] = t[n + 1];

  t.pop();
}

function w(t) {
  for (var n = new Array(t.length), o = 0; o < n.length; ++o) n[o] = t[o].listener || t[o];

  return n;
}

Object.defineProperty(u, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return f;
  },
  set: function (t) {
    if ('number' != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + '.');
    f = t;
  },
});

u.init = function () {
  if (!(undefined !== this._events && this._events !== Object.getPrototypeOf(this)._events)) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

u.prototype.setMaxListeners = function (t) {
  if ('number' != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + '.');
  this._maxListeners = t;
  return this;
};

u.prototype.getMaxListeners = function () {
  return p(this);
};

u.prototype.emit = function (t) {
  for (var n = [], s = 1; s < arguments.length; s++) n.push(arguments[s]);

  var u = 'error' === t,
    f = this._events;
  if (undefined !== f) u = u && undefined === f.error;
  else if (!u) return false;

  if (u) {
    var p;
    if ((n.length > 0 && (p = n[0]), p instanceof Error)) throw p;
    var v = new Error('Unhandled error.' + (p ? ' (' + p.message + ')' : ''));
    throw ((v.context = p), v);
  }

  var h = f[t];
  if (undefined === h) return false;
  if ('function' == typeof h) o(h, this, n);
  else {
    var c = h.length,
      l = L(h, c);

    for (s = 0; s < c; ++s) o(l[s], this, n);
  }
  return true;
};

u.prototype.addListener = function (t, n) {
  return v(this, t, n, false);
};

u.prototype.on = u.prototype.addListener;

u.prototype.prependListener = function (t, n) {
  return v(this, t, n, true);
};

u.prototype.once = function (t, n) {
  if ('function' != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
  this.on(t, c(this, t, n));
  return this;
};

u.prototype.prependOnceListener = function (t, n) {
  if ('function' != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
  this.prependListener(t, c(this, t, n));
  return this;
};

u.prototype.removeListener = function (t, n) {
  var o, s, u, f, p;
  if ('function' != typeof n) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof n);
  if (undefined === (s = this._events)) return this;
  if (undefined === (o = s[t])) return this;
  if (o === n || o.listener === n)
    0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete s[t], s.removeListener && this.emit('removeListener', t, o.listener || n));
  else if ('function' != typeof o) {
    for (u = -1, f = o.length - 1; f >= 0; f--)
      if (o[f] === n || o[f].listener === n) {
        p = o[f].listener;
        u = f;
        break;
      }

    if (u < 0) return this;
    if (0 === u) o.shift();
    else _(o, u);
    if (1 === o.length) s[t] = o[0];
    if (undefined !== s.removeListener) this.emit('removeListener', t, p || n);
  }
  return this;
};

u.prototype.off = u.prototype.removeListener;

u.prototype.removeAllListeners = function (t) {
  var n, o, s;
  if (undefined === (o = this._events)) return this;

  if (undefined === o.removeListener) {
    if (0 === arguments.length) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (undefined !== o[t]) 0 == --this._eventsCount ? (this._events = Object.create(null)) : delete o[t];

    return this;
  }

  if (0 === arguments.length) {
    var u,
      f = Object.keys(o);

    for (s = 0; s < f.length; ++s) 'removeListener' !== (u = f[s]) && this.removeAllListeners(u);

    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  if ('function' == typeof (n = o[t])) this.removeListener(t, n);
  else if (undefined !== n) for (s = n.length - 1; s >= 0; s--) this.removeListener(t, n[s]);
  return this;
};

u.prototype.listeners = function (t) {
  return l(this, t, true);
};

u.prototype.rawListeners = function (t) {
  return l(this, t, false);
};

u.listenerCount = function (t, n) {
  return 'function' == typeof t.listenerCount ? t.listenerCount(n) : y.call(t, n);
};

u.prototype.listenerCount = y;

u.prototype.eventNames = function () {
  return this._eventsCount > 0 ? t(this._events) : [];
};
