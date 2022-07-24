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
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      s(Object(l), true).forEach(function (s) {
        module46(o, s, l[s]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(l));
    else
      s(Object(l)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(l, t));
      });
  }

  return o;
}

import PropTypes from 'prop-types';
import React from 'react';

var module58 = require('./58'),
  module253 = require('./253'),
  module263 = require('./263'),
  module43 = require('./43'),
  module175 = require('./175'),
  module52 = require('./52'),
  module185 = require('./185'),
  module194 = require('./194'),
  module75 = require('./75'),
  module195 = require('./195'),
  module199 = require('./199'),
  _ = {
    activeOpacity: 0.85,
    delayPressOut: 100,
    underlayColor: 'black',
  },
  v = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 30,
  },
  H = module195({
    displayName: 'TouchableHighlight',
    propTypes: o({}, module194.propTypes, {
      activeOpacity: PropTypes.number,
      underlayColor: module58,
      style: module253.style,
      onShowUnderlay: PropTypes.func,
      onHideUnderlay: PropTypes.func,
      hasTVPreferredFocus: PropTypes.bool,
      tvParallaxProperties: PropTypes.object,
      testOnly_pressed: PropTypes.bool,
    }),
    mixins: [module263, module185.Mixin.withoutDefaultFocusAndBlur],
    getDefaultProps: function () {
      return _;
    },
    getInitialState: function () {
      this._isMounted = false;
      return this.props.testOnly_pressed
        ? o({}, this.touchableGetInitialState(), {
            extraChildStyle: {
              opacity: this.props.activeOpacity,
            },
            extraUnderlayStyle: {
              backgroundColor: this.props.underlayColor,
            },
          })
        : o({}, this.touchableGetInitialState(), {
            extraChildStyle: null,
            extraUnderlayStyle: null,
          });
    },
    componentDidMount: function () {
      this._isMounted = true;
      module199(this.props);
    },
    componentWillUnmount: function () {
      this._isMounted = false;
      clearTimeout(this._hideTimeout);
    },
    UNSAFE_componentWillReceiveProps: function (t) {
      module199(t);
    },
    viewConfig: {
      uiViewClassName: 'RCTView',
      validAttributes: module175.RCTView,
    },
    touchableHandleActivePressIn: function (t) {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = null;

      this._showUnderlay();

      if (this.props.onPressIn) this.props.onPressIn(t);
    },
    touchableHandleActivePressOut: function (t) {
      if (!this._hideTimeout) this._hideUnderlay();
      if (this.props.onPressOut) this.props.onPressOut(t);
    },
    touchableHandleFocus: function (t) {
      if (module43.isTV) this._showUnderlay();
      if (this.props.onFocus) this.props.onFocus(t);
    },
    touchableHandleBlur: function (t) {
      if (module43.isTV) this._hideUnderlay();
      if (this.props.onBlur) this.props.onBlur(t);
    },
    touchableHandlePress: function (t) {
      clearTimeout(this._hideTimeout);

      if (!module43.isTV) {
        this._showUnderlay();

        this._hideTimeout = setTimeout(this._hideUnderlay, this.props.delayPressOut);
      }

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
      return this.props.delayPressIn;
    },
    touchableGetLongPressDelayMS: function () {
      return this.props.delayLongPress;
    },
    touchableGetPressOutDelayMS: function () {
      return this.props.delayPressOut;
    },
    _showUnderlay: function () {
      if (this._isMounted && this._hasPressHandler()) {
        this.setState({
          extraChildStyle: {
            opacity: this.props.activeOpacity,
          },
          extraUnderlayStyle: {
            backgroundColor: this.props.underlayColor,
          },
        });
        if (this.props.onShowUnderlay) this.props.onShowUnderlay();
      }
    },
    _hideUnderlay: function () {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = null;
      if (!this.props.testOnly_pressed)
        this._hasPressHandler() &&
          (this.setState({
            extraChildStyle: null,
            extraUnderlayStyle: null,
          }),
          this.props.onHideUnderlay && this.props.onHideUnderlay());
    },
    _hasPressHandler: function () {
      return !!(this.props.onPress || this.props.onPressIn || this.props.onPressOut || this.props.onLongPress);
    },
    render: function () {
      var t = React.Children.only(this.props.children);
      return (
        <module75
          accessible={false !== this.props.accessible}
          accessibilityLabel={this.props.accessibilityLabel}
          accessibilityHint={this.props.accessibilityHint}
          accessibilityRole={this.props.accessibilityRole}
          accessibilityStates={this.props.accessibilityStates}
          style={module52.compose(this.props.style, this.state.extraUnderlayStyle)}
          onLayout={this.props.onLayout}
          hitSlop={this.props.hitSlop}
          isTVSelectable
          tvParallaxProperties={this.props.tvParallaxProperties}
          hasTVPreferredFocus={this.props.hasTVPreferredFocus}
          onStartShouldSetResponder={this.touchableHandleStartShouldSetResponder}
          onResponderTerminationRequest={this.touchableHandleResponderTerminationRequest}
          onResponderGrant={this.touchableHandleResponderGrant}
          onResponderMove={this.touchableHandleResponderMove}
          onResponderRelease={this.touchableHandleResponderRelease}
          onResponderTerminate={this.touchableHandleResponderTerminate}
          nativeID={this.props.nativeID}
          testID={this.props.testID}
        >
          <t style={module52.compose(t.props.style, this.state.extraChildStyle)} />
          {module185.renderDebugView({
            color: 'green',
            hitSlop: this.props.hitSlop,
          })}
        </module75>
      );
    },
  });

module.exports = H;
