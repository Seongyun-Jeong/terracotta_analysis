var module46 = require('./46');

function s(t, s) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    if (s)
      n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      });
    o.push.apply(o, n);
  }

  return o;
}

function o(o) {
  for (var n = 1; n < arguments.length; n++) {
    var c = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      s(Object(c), true).forEach(function (s) {
        module46(o, s, c[s]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(c));
    else
      s(Object(c)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(c, t));
      });
  }

  return o;
}

import React from 'react';
import PropTypes from 'prop-types';

var module182 = require('./182'),
  module185 = require('./185'),
  module75 = require('./75'),
  module195 = require('./195'),
  module199 = require('./199'),
  module200 = require('./200'),
  f = module200.DeprecatedAccessibilityComponentTypes,
  O = module200.DeprecatedAccessibilityRoles,
  P = module200.DeprecatedAccessibilityStates,
  S = module200.DeprecatedAccessibilityTraits,
  R = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30,
  },
  v = [
    'accessibilityComponentType',
    'accessibilityLabel',
    'accessibilityHint',
    'accessibilityIgnoresInvertColors',
    'accessibilityRole',
    'accessibilityStates',
    'accessibilityTraits',
    'hitSlop',
    'nativeID',
    'onBlur',
    'onFocus',
    'onLayout',
    'testID',
  ],
  D = module195({
    displayName: 'TouchableWithoutFeedback',
    mixins: [module185.Mixin],
    propTypes: {
      accessible: PropTypes.bool,
      accessibilityLabel: PropTypes.node,
      accessibilityHint: PropTypes.string,
      accessibilityComponentType: PropTypes.oneOf(f),
      accessibilityIgnoresInvertColors: PropTypes.bool,
      accessibilityRole: PropTypes.oneOf(O),
      accessibilityStates: PropTypes.arrayOf(PropTypes.oneOf(P)),
      accessibilityTraits: PropTypes.oneOfType([PropTypes.oneOf(S), PropTypes.arrayOf(PropTypes.oneOf(S))]),
      onFocus: PropTypes.func,
      onBlur: PropTypes.func,
      disabled: PropTypes.bool,
      onPress: PropTypes.func,
      onPressIn: PropTypes.func,
      onPressOut: PropTypes.func,
      onLayout: PropTypes.func,
      onLongPress: PropTypes.func,
      nativeID: PropTypes.string,
      testID: PropTypes.string,
      delayPressIn: PropTypes.number,
      delayPressOut: PropTypes.number,
      delayLongPress: PropTypes.number,
      pressRetentionOffset: module182,
      hitSlop: module182,
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
    touchableHandlePress: function (t) {
      if (this.props.onPress) this.props.onPress(t);
    },
    touchableHandleActivePressIn: function (t) {
      if (this.props.onPressIn) this.props.onPressIn(t);
    },
    touchableHandleActivePressOut: function (t) {
      if (this.props.onPressOut) this.props.onPressOut(t);
    },
    touchableHandleLongPress: function (t) {
      if (this.props.onLongPress) this.props.onLongPress(t);
    },
    touchableGetPressRectOffset: function () {
      return this.props.pressRetentionOffset || R;
    },
    touchableGetHitSlop: function () {
      return this.props.hitSlop;
    },
    touchableGetHighlightDelayMS: function () {
      return this.props.delayPressIn || 0;
    },
    touchableGetLongPressDelayMS: function () {
      return 0 === this.props.delayLongPress ? 0 : this.props.delayLongPress || 500;
    },
    touchableGetPressOutDelayMS: function () {
      return this.props.delayPressOut || 0;
    },
    render: function () {
      var t = React.Children.only(this.props.children),
        s = t.props.children;
      if (module185.TOUCH_TARGET_DEBUG && t.type === module75)
        (s = React.Children.toArray(s)).push(
          module185.renderDebugView({
            color: 'red',
            hitSlop: this.props.hitSlop,
          })
        );
      var n = {},
        l = v,
        b = Array.isArray(l),
        h = 0;

      for (l = b ? l : l['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
        var y;

        if (b) {
          if (h >= l.length) break;
          y = l[h++];
        } else {
          if ((h = l.next()).done) break;
          y = h.value;
        }

        var f = y;
        if (undefined !== this.props[f]) n[f] = this.props[f];
      }

      return React.cloneElement(
        t,
        o({}, n, {
          accessible: false !== this.props.accessible,
          onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
          onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
          onResponderGrant: this.touchableHandleResponderGrant,
          onResponderMove: this.touchableHandleResponderMove,
          onResponderRelease: this.touchableHandleResponderRelease,
          onResponderTerminate: this.touchableHandleResponderTerminate,
          children: s,
        })
      );
    },
  });

module.exports = D;
