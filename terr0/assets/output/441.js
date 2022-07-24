exports.default = function (t) {
  var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    h = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {},
    _ = arguments.length > 3 ? arguments[3] : undefined,
    H = arguments.length > 4 && undefined !== arguments[4] ? arguments[4] : {},
    G = (function (n) {
      function G(n) {
        var u;

        if (
          (module356.default(this, G),
          ((u = module358.default(this, module361.default(G).call(this, n)))._onGestureHandlerEvent = function (t) {
            if (t.nativeEvent.handlerTag === u._handlerTag) {
              if (u.props.onGestureEvent) u.props.onGestureEvent(t);
            } else if (u.props.onGestureHandlerEvent) u.props.onGestureHandlerEvent(t);
          }),
          (u._onGestureHandlerStateChange = function (t) {
            if (t.nativeEvent.handlerTag === u._handlerTag) {
              if (u.props.onHandlerStateChange) u.props.onHandlerStateChange(t);
              var n = N[t.nativeEvent.state];
              if ('function' == typeof u.props[n]) u.props[n](t);
            } else u.props.onGestureHandlerStateChange && u.props.onGestureHandlerStateChange(t);
          }),
          (u._refHandler = function (t) {
            u._viewNode = t;
            var n = React.default.Children.only(u.props.children),
              o = n.ref;
            if (null !== o) 'function' == typeof o ? o(t) : (o.current = t);
          }),
          (u._createGestureHandler = function (n) {
            u._config = n;
            module443.default.createGestureHandler(t, u._handlerTag, n);
          }),
          (u._attachGestureHandler = function (t) {
            u._viewTag = t;
            module443.default.attachGestureHandler(u._handlerTag, t);
          }),
          (u._updateGestureHandler = function (t) {
            u._config = t;
            module443.default.updateGestureHandler(u._handlerTag, t);
          }),
          (u._handlerTag = T++),
          (u._config = {}),
          n.id)
        ) {
          if (undefined !== b[n.id]) throw new Error('Handler with ID "' + n.id + '" already registered');
          b[n.id] = u._handlerTag;
        }

        return u;
      }

      module362.default(G, n);
      module357.default(G, [
        {
          key: 'componentWillUnmount',
          value: function () {
            module443.default.dropGestureHandler(this._handlerTag);
            if (this._updateEnqueued) clearImmediate(this._updateEnqueued);
            if (this.props.id) delete b[this.props.id];
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            var t,
              n,
              o = this;
            t = this.props;
            if (
              (n = function (t) {
                return Array.isArray(t)
                  ? t.some(function (t) {
                      return t && null === t.current;
                    })
                  : t && null === t.current;
              })(t.simultaneousHandlers) ||
              n(t.waitFor)
            )
              this._updateEnqueued = setImmediate(function () {
                o._updateEnqueued = null;

                o._update();
              });

            this._createGestureHandler(C(_ ? _(this.props) : this.props, E({}, this.constructor.propTypes, {}, H), h));

            this._attachGestureHandler(module2.findNodeHandle(this._viewNode));
          },
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            var t = module2.findNodeHandle(this._viewNode);
            if (this._viewTag !== t) this._attachGestureHandler(t);

            this._update();
          },
        },
        {
          key: '_update',
          value: function () {
            var t = C(_ ? _(this.props) : this.props, E({}, this.constructor.propTypes, {}, H), h);
            if (!module442.default(this._config, t)) this._updateGestureHandler(t);
          },
        },
        {
          key: 'setNativeProps',
          value: function (t) {
            var n = E({}, this.props, {}, t),
              o = C(_ ? _(n) : n, E({}, this.constructor.propTypes, {}, H), h);

            this._updateGestureHandler(o);
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this._onGestureHandlerEvent,
              n = this.props,
              o = n.onGestureEvent,
              u = n.onGestureHandlerEvent;

            if (o && 'function' != typeof o) {
              if (u) throw new Error('Nesting touch handlers with native animated driver is not supported yet');
              t = this.props.onGestureEvent;
            } else if (u && 'function' != typeof u) throw new Error('Nesting touch handlers with native animated driver is not supported yet');

            var s = this._onGestureHandlerStateChange,
              l = this.props,
              p = l.onHandlerStateChange,
              h = l.onGestureHandlerStateChange;

            if (p && 'function' != typeof p) {
              if (h) throw new Error('Nesting touch handlers with native animated driver is not supported yet');
              s = this.props.onHandlerStateChange;
            } else if (h && 'function' != typeof h) throw new Error('Nesting touch handlers with native animated driver is not supported yet');

            var v = React.default.Children.only(this.props.children),
              y = v.props.children;
            if (module2.Touchable.TOUCH_TARGET_DEBUG && v.type && ('RNGestureHandlerButton' === v.type || 'View' === v.type.name || 'View' === v.type.displayName))
              (y = React.default.Children.toArray(y)).push(
                module2.Touchable.renderDebugView({
                  color: 'mediumspringgreen',
                  hitSlop: v.props.hitSlop,
                })
              );
            return React.default.cloneElement(
              v,
              {
                ref: this._refHandler,
                collapsable: false,
                onGestureHandlerEvent: t,
                onGestureHandlerStateChange: s,
              },
              y
            );
          },
        },
      ]);
      return G;
    })(React.default.Component);

  G.displayName = t;
  G.propTypes = n;
  return G;
};

var n,
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module284 = require('./284'),
  React = require('react'),
  module442 = require('./442'),
  module443 = require('./443'),
  module444 = require('./444');

function H(t, n) {
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

function E(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      H(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      H(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var G = module2.NativeModules.UIManager,
  w = G.setJSResponder,
  S = G.clearJSResponder;

G.setJSResponder = function (t, n) {
  module443.default.handleSetJSResponder(t, n);
  w(t, n);
};

G.clearJSResponder = function () {
  module443.default.handleClearJSResponder();
  S();
};

G.genericDirectEventTypes = E({}, G.genericDirectEventTypes, {
  onGestureHandlerEvent: {
    registrationName: 'onGestureHandlerEvent',
  },
  onGestureHandlerStateChange: {
    registrationName: 'onGestureHandlerStateChange',
  },
});
var T = 1,
  b = {};

function C(t, n) {
  var o = E({}, arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {});
  Object.keys(n).forEach(function (n) {
    var u,
      s,
      l = t[n];

    if (((s = n), !(undefined === (u = l) || (u === Object(u) && '__isNative' in u) || 'onHandlerStateChange' === s || 'onGestureEvent' === s))) {
      var p = t[n];
      if ('simultaneousHandlers' === n || 'waitFor' === n) p = O(t[n]);
      else if ('hitSlop' === n && 'object' != typeof p)
        p = {
          top: p,
          left: p,
          bottom: p,
          right: p,
        };
      o[n] = p;
    }
  });
  return o;
}

function O(t) {
  if (!Array.isArray(t)) t = [t];
  return t
    .map(function (t) {
      return b[t] || (t.current && t.current._handlerTag) || -1;
    })
    .filter(function (t) {
      return t > 0;
    });
}

n = {};
module284.default(n, module444.default.BEGAN, 'onBegan');
module284.default(n, module444.default.FAILED, 'onFailed');
module284.default(n, module444.default.CANCELLED, 'onCancelled');
module284.default(n, module444.default.ACTIVE, 'onActivated');
module284.default(n, module444.default.END, 'onEnded');
var N = n;
