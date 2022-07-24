var module11 = require('./11'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module32 = require('./32'),
  module36 = require('./36'),
  module46 = require('./46');

function f(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function h(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      f(Object(o), true).forEach(function (n) {
        module46(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      f(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var module181 = require('./181'),
  React = require('react'),
  module175 = require('./175'),
  module76 = require('./76'),
  module185 = require('./185'),
  module42 = require('./42'),
  module157 = require('./157'),
  module192 = require('./192'),
  module69 = require('./69'),
  w = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30,
  },
  x = {
    validAttributes: h({}, module175.UIView, {
      isHighlighted: true,
      numberOfLines: true,
      ellipsizeMode: true,
      allowFontScaling: true,
      maxFontSizeMultiplier: true,
      disabled: true,
      selectable: true,
      selectionColor: true,
      adjustsFontSizeToFit: true,
      minimumFontScale: true,
      textBreakStrategy: true,
      onTextLayout: true,
    }),
    directEventTypes: {
      topTextLayout: {
        registrationName: 'onTextLayout',
      },
    },
    uiViewClassName: 'RCTText',
  },
  C = (function (c, ...args) {
    function f() {
      var t, o;
      module22(this, f);
      (o = module30(this, (t = module33(f)).call.apply(t, [this].concat(args)))).state = h({}, module185.Mixin.touchableGetInitialState(), {
        isHighlighted: false,
        createResponderHandlers: o._createResponseHandlers.bind(module32(o)),
        responseHandlers: null,
      });
      return o;
    }

    module36(f, c);
    module23(
      f,
      [
        {
          key: 'render',
          value: function () {
            var n = this.props;
            if (M(n))
              n = h({}, n, {}, this.state.responseHandlers, {
                isHighlighted: this.state.isHighlighted,
              });
            if (null != n.selectionColor)
              n = h({}, n, {
                selectionColor: module69(n.selectionColor),
              });
            return (
              <module76.Consumer>
                {function (o) {
                  return o ? (
                    <V />
                  ) : (
                    <module76.Provider value>
                      <j />
                    </module76.Provider>
                  );
                }}
              </module76.Consumer>
            );
          },
        },
        {
          key: '_createResponseHandlers',
          value: function () {
            var t = this;
            return {
              onStartShouldSetResponder: function () {
                var n = t.props.onStartShouldSetResponder,
                  o = (null != n && n()) || M(t.props);
                if (o) t._attachTouchHandlers();
                return o;
              },
              onResponderGrant: function (n, o) {
                module192(t.touchableHandleResponderGrant)(n, o);
                if (null != t.props.onResponderGrant) t.props.onResponderGrant.call(t, n, o);
              },
              onResponderMove: function (n) {
                module192(t.touchableHandleResponderMove)(n);
                if (null != t.props.onResponderMove) t.props.onResponderMove.call(t, n);
              },
              onResponderRelease: function (n) {
                module192(t.touchableHandleResponderRelease)(n);
                if (null != t.props.onResponderRelease) t.props.onResponderRelease.call(t, n);
              },
              onResponderTerminate: function (n) {
                module192(t.touchableHandleResponderTerminate)(n);
                if (null != t.props.onResponderTerminate) t.props.onResponderTerminate.call(t, n);
              },
              onResponderTerminationRequest: function () {
                var n = t.props.onResponderTerminationRequest;
                return !!module192(t.touchableHandleResponderTerminationRequest)() && (null == n || n());
              },
            };
          },
        },
        {
          key: '_attachTouchHandlers',
          value: function () {
            var t = this;

            if (null == this.touchableGetPressRectOffset) {
              for (var n in module185.Mixin) 'function' == typeof module185.Mixin[n] && (this[n] = module185.Mixin[n].bind(this));

              this.touchableHandleActivePressIn = function () {
                if (!t.props.suppressHighlighting && M(t.props))
                  t.setState({
                    isHighlighted: true,
                  });
              };

              this.touchableHandleActivePressOut = function () {
                if (!t.props.suppressHighlighting && M(t.props))
                  t.setState({
                    isHighlighted: false,
                  });
              };

              this.touchableHandlePress = function (n) {
                if (null != t.props.onPress) t.props.onPress(n);
              };

              this.touchableHandleLongPress = function (n) {
                if (null != t.props.onLongPress) t.props.onLongPress(n);
              };

              this.touchableGetPressRectOffset = function () {
                return null == t.props.pressRetentionOffset ? w : t.props.pressRetentionOffset;
              };
            }
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, n) {
            return null == n.responseHandlers && M(t)
              ? {
                  responseHandlers: n.createResponderHandlers(),
                }
              : null;
          },
        },
      ]
    );
    return f;
  })(React.Component);

C.defaultProps = {
  accessible: true,
  allowFontScaling: true,
  ellipsizeMode: 'tail',
};
C.viewConfig = x;

var M = function (t) {
    return null != t.onPress || null != t.onLongPress || null != t.onStartShouldSetResponder;
  },
  j = module157(x.uiViewClassName, function () {
    return x;
  }),
  V =
    null == module42.getViewManagerConfig('RCTVirtualText')
      ? j
      : module157('RCTVirtualText', function () {
          return {
            validAttributes: h({}, module175.UIView, {
              isHighlighted: true,
              maxFontSizeMultiplier: true,
            }),
            uiViewClassName: 'RCTVirtualText',
          };
        }),
  E = React.forwardRef(function (n, o) {
    return <C />;
  });

E.displayName = 'Text';
E.propTypes = module181;
module.exports = E;
