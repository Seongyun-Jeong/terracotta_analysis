var module46 = require('./46');

function o(t, o) {
  var s = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    if (o)
      n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    s.push.apply(s, n);
  }

  return s;
}

function s(s) {
  for (var n = 1; n < arguments.length; n++) {
    var p = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      o(Object(p), true).forEach(function (o) {
        module46(s, o, p[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(s, Object.getOwnPropertyDescriptors(p));
    else
      o(Object(p)).forEach(function (t) {
        Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(p, t));
      });
  }

  return s;
}

var module43 = require('./43'),
  React = require('react'),
  PropTypes = require('prop-types'),
  module78 = require('./78'),
  module185 = require('./185'),
  module194 = require('./194'),
  module42 = require('./42'),
  module75 = require('./75'),
  module195 = require('./195'),
  module199 = require('./199'),
  module69 = require('./69'),
  v = PropTypes.shape({
    type: PropTypes.oneOf(['RippleAndroid']),
    color: PropTypes.number,
    borderless: PropTypes.bool,
  }),
  S = PropTypes.shape({
    type: PropTypes.oneOf(['ThemeAttrAndroid']),
    attribute: PropTypes.string.isRequired,
  }),
  O = PropTypes.oneOfType([v, S]),
  T = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30,
  },
  H = module195({
    displayName: 'TouchableNativeFeedback',
    propTypes: s({}, module194.propTypes, {
      background: O,
      hasTVPreferredFocus: PropTypes.bool,
      useForeground: PropTypes.bool,
    }),
    statics: {
      SelectableBackground: function () {
        return {
          type: 'ThemeAttrAndroid',
          attribute: 'selectableItemBackground',
        };
      },
      SelectableBackgroundBorderless: function () {
        return {
          type: 'ThemeAttrAndroid',
          attribute: 'selectableItemBackgroundBorderless',
        };
      },
      Ripple: function (t, o) {
        return {
          type: 'RippleAndroid',
          color: module69(t),
          borderless: o,
        };
      },
      canUseNativeForeground: function () {
        return module43.Version >= 23;
      },
    },
    mixins: [module185.Mixin],
    getDefaultProps: function () {
      return {
        background: this.SelectableBackground(),
      };
    },
    getInitialState: function () {
      return this.touchableGetInitialState();
    },
    componentDidMount: function () {
      module199(this.props);
    },
    UNSAFE_componentWillReceiveProps: function (t) {
      module199(t);
    },
    touchableHandleActivePressIn: function (t) {
      if (this.props.onPressIn) this.props.onPressIn(t);

      this._dispatchPressedStateChange(true);

      if (this.pressInLocation) this._dispatchHotspotUpdate(this.pressInLocation.locationX, this.pressInLocation.locationY);
    },
    touchableHandleActivePressOut: function (t) {
      if (this.props.onPressOut) this.props.onPressOut(t);

      this._dispatchPressedStateChange(false);
    },
    touchableHandlePress: function (t) {
      if (this.props.onPress) this.props.onPress(t);
    },
    touchableHandleLongPress: function (t) {
      if (this.props.onLongPress) this.props.onLongPress(t);
    },
    touchableGetPressRectOffset: function () {
      return this.props.pressRetentionOffset || T;
    },
    touchableGetHitSlop: function () {
      return this.props.hitSlop;
    },
    touchableGetHighlightDelayMS: function () {
      return this.props.delayPressIn;
    },
    touchableGetLongPressDelayMS: function () {
      return this.props.delayLongPress;
    },
    touchableGetPressOutDelayMS: function () {
      return this.props.delayPressOut;
    },
    _handleResponderMove: function (t) {
      this.touchableHandleResponderMove(t);

      this._dispatchHotspotUpdate(t.nativeEvent.locationX, t.nativeEvent.locationY);
    },
    _dispatchHotspotUpdate: function (t, o) {
      module42.dispatchViewManagerCommand(module78.findNodeHandle(this), module42.getViewManagerConfig('RCTView').Commands.hotspotUpdate, [t || 0, o || 0]);
    },
    _dispatchPressedStateChange: function (t) {
      module42.dispatchViewManagerCommand(module78.findNodeHandle(this), module42.getViewManagerConfig('RCTView').Commands.setPressed, [t]);
    },
    render: function () {
      var o,
        n = React.Children.only(this.props.children),
        c = n.props.children;

      if (module185.TOUCH_TARGET_DEBUG && n.type === module75) {
        if (!Array.isArray(c)) c = [c];
        c.push(
          module185.renderDebugView({
            color: 'brown',
            hitSlop: this.props.hitSlop,
          })
        );
      }

      if (this.props.useForeground && !H.canUseNativeForeground())
        console.warn(
          'Requested foreground ripple, but it is not available on this version of Android. Consider calling TouchableNativeFeedback.canUseNativeForeground() and using a different Touchable if the result is false.'
        );
      var l = this.props.useForeground && H.canUseNativeForeground() ? 'nativeForegroundAndroid' : 'nativeBackgroundAndroid',
        h = s(
          {},
          n.props,
          (module46((o = {}), l, this.props.background),
          module46(o, 'accessible', false !== this.props.accessible),
          module46(o, 'accessibilityLabel', this.props.accessibilityLabel),
          module46(o, 'accessibilityRole', this.props.accessibilityRole),
          module46(o, 'accessibilityStates', this.props.accessibilityStates),
          module46(o, 'children', c),
          module46(o, 'testID', this.props.testID),
          module46(o, 'onLayout', this.props.onLayout),
          module46(o, 'hitSlop', this.props.hitSlop),
          module46(o, 'isTVSelectable', true),
          module46(o, 'hasTVPreferredFocus', this.props.hasTVPreferredFocus),
          module46(o, 'onStartShouldSetResponder', this.touchableHandleStartShouldSetResponder),
          module46(o, 'onResponderTerminationRequest', this.touchableHandleResponderTerminationRequest),
          module46(o, 'onResponderGrant', this.touchableHandleResponderGrant),
          module46(o, 'onResponderMove', this._handleResponderMove),
          module46(o, 'onResponderRelease', this.touchableHandleResponderRelease),
          module46(o, 'onResponderTerminate', this.touchableHandleResponderTerminate),
          o)
        );
      return React.cloneElement(n, h);
    },
  });

module.exports = H;
