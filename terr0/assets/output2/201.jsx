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
    var p = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      s(Object(p), true).forEach(function (s) {
        module46(o, s, p[s]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(p));
    else
      s(Object(p)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(p, t));
      });
  }

  return o;
}

import React from 'react';
import PropTypes from 'prop-types';

var module202 = require('./202'),
  module229 = require('./229'),
  module263 = require('./263'),
  module43 = require('./43'),
  module185 = require('./185'),
  module194 = require('./194'),
  module195 = require('./195'),
  module199 = require('./199'),
  module74 = require('./74'),
  v = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30,
  },
  S = module195({
    displayName: 'TouchableOpacity',
    mixins: [module185.Mixin.withoutDefaultFocusAndBlur, module263],
    propTypes: o({}, module194.propTypes, {
      activeOpacity: PropTypes.number,
      hasTVPreferredFocus: PropTypes.bool,
      tvParallaxProperties: PropTypes.object,
    }),
    getDefaultProps: function () {
      return {
        activeOpacity: 0.2,
      };
    },
    getInitialState: function () {
      return o({}, this.touchableGetInitialState(), {
        anim: new module202.Value(this._getChildStyleOpacityWithDefault()),
      });
    },
    componentDidMount: function () {
      module199(this.props);
    },
    UNSAFE_componentWillReceiveProps: function (t) {
      module199(t);
    },
    componentDidUpdate: function (t, s) {
      if (this.props.disabled !== t.disabled) this._opacityInactive(250);
    },
    setOpacityTo: function (t, s) {
      module202
        .timing(this.state.anim, {
          toValue: t,
          duration: s,
          easing: module229.inOut(module229.quad),
          useNativeDriver: true,
        })
        .start();
    },
    touchableHandleActivePressIn: function (t) {
      if ('onResponderGrant' === t.dispatchConfig.registrationName) this._opacityActive(0);
      else this._opacityActive(150);
      if (this.props.onPressIn) this.props.onPressIn(t);
    },
    touchableHandleActivePressOut: function (t) {
      this._opacityInactive(250);

      if (this.props.onPressOut) this.props.onPressOut(t);
    },
    touchableHandleFocus: function (t) {
      if (module43.isTV) this._opacityActive(150);
      if (this.props.onFocus) this.props.onFocus(t);
    },
    touchableHandleBlur: function (t) {
      if (module43.isTV) this._opacityInactive(250);
      if (this.props.onBlur) this.props.onBlur(t);
    },
    touchableHandlePress: function (t) {
      if (this.props.onPress) this.props.onPress(t);
    },
    touchableHandleLongPress: function (t) {
      if (this.props.onLongPress) this.props.onLongPress(t);
    },
    touchableGetPressRectOffset: function () {
      return this.props.pressRetentionOffset || v;
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
      return this.props.delayPressOut;
    },
    _opacityActive: function (t) {
      this.setOpacityTo(this.props.activeOpacity, t);
    },
    _opacityInactive: function (t) {
      this.setOpacityTo(this._getChildStyleOpacityWithDefault(), t);
    },
    _getChildStyleOpacityWithDefault: function () {
      var t = module74(this.props.style) || {};
      return null == t.opacity ? 1 : t.opacity;
    },
    render: function () {
      return (
        <module202.View
          accessible={false !== this.props.accessible}
          accessibilityLabel={this.props.accessibilityLabel}
          accessibilityHint={this.props.accessibilityHint}
          accessibilityRole={this.props.accessibilityRole}
          accessibilityStates={this.props.accessibilityStates}
          style={[
            this.props.style,
            {
              opacity: this.state.anim,
            },
          ]}
          nativeID={this.props.nativeID}
          testID={this.props.testID}
          onLayout={this.props.onLayout}
          isTVSelectable
          hasTVPreferredFocus={this.props.hasTVPreferredFocus}
          tvParallaxProperties={this.props.tvParallaxProperties}
          hitSlop={this.props.hitSlop}
          onStartShouldSetResponder={this.touchableHandleStartShouldSetResponder}
          onResponderTerminationRequest={this.touchableHandleResponderTerminationRequest}
          onResponderGrant={this.touchableHandleResponderGrant}
          onResponderMove={this.touchableHandleResponderMove}
          onResponderRelease={this.touchableHandleResponderRelease}
          onResponderTerminate={this.touchableHandleResponderTerminate}
        >
          {this.props.children}
          {module185.renderDebugView({
            color: 'cyan',
            hitSlop: this.props.hitSlop,
          })}
        </module202.View>
      );
    },
  });

module.exports = S;
