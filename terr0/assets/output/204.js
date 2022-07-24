var module22 = require('./22'),
  module205 = require('./205'),
  module208 = require('./208'),
  module78 = require('./78'),
  module3 = require('./3'),
  module208 = require('./208').shouldUseNativeDriver;

function l(t, n, _) {
  var l = [];
  module3(_[0] && _[0].nativeEvent, 'Native driven events only support animated values contained inside `nativeEvent`.');

  (function t(n, v) {
    if (n instanceof module205) {
      n.__makeNative();

      l.push({
        nativeEventPath: v,
        animatedValueTag: n.__getNativeTag(),
      });
    } else if ('object' == typeof n) for (var o in n) t(n[o], v.concat(o));
  })(_[0].nativeEvent, []);

  var h = module78.findNodeHandle(t);
  l.forEach(function (t) {
    module208.API.addAnimatedEventToView(h, n, t);
  });
  return {
    detach: function () {
      l.forEach(function (t) {
        module208.API.removeAnimatedEventFromView(h, n, t.animatedValueTag);
      });
    },
  };
}

class h {
  constructor(n) {
    var s = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
    module22(this, v);
    this._listeners = [];
    this._argMapping = n;
    if (s.listener) this.__addListener(s.listener);
    this._callListeners = this._callListeners.bind(this);
    this._attachedEvent = null;
    this.__isNative = module208(s);
  }

  __addListener(t) {
    this._listeners.push(t);
  }

  __removeListener(t) {
    this._listeners = this._listeners.filter(function (n) {
      return n !== t;
    });
  }

  __attach(t, n) {
    module3(this.__isNative, 'Only native driven events need to be attached.');
    this._attachedEvent = l(t, n, this._argMapping);
  }

  __detach(t, n) {
    module3(this.__isNative, 'Only native driven events need to be detached.');
    if (this._attachedEvent) this._attachedEvent.detach();
  }

  __getHandler() {
    var t = this;
    return this.__isNative
      ? this._callListeners
      : function (...args) {
          var c = function t(n, v, o) {
            if ('number' == typeof v && n instanceof module205) n.setValue(v);
            else if ('object' == typeof n) for (var c in n) t(n[c], v[c], c);
          };

          if (!t.__isNative)
            t._argMapping.forEach(function (t, n) {
              c(t, args[n]);
            });

          t._callListeners.apply(t, args);
        };
  }

  _callListeners(...args) {
    this._listeners.forEach(function (t) {
      return t.apply(undefined, args);
    });
  }

  _validateMapping() {}
}

module.exports = {
  AnimatedEvent: h,
  attachNativeEvent: l,
};
