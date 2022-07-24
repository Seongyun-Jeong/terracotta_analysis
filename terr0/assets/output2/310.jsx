import module22 from './22';
import module11 from './11';

var module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module46 = require('./46');

function p(t, n) {
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

require('./43');

import PropTypes from 'prop-types';
import React from 'react';
import module3 from './3';

var h,
  module58 = require('./58'),
  module253 = require('./253'),
  module311 = require('./311'),
  module263 = require('./263'),
  module78 = require('./78'),
  module52 = require('./52'),
  module180 = require('./180'),
  module76 = require('./76'),
  module153 = require('./153'),
  module194 = require('./194'),
  module42 = require('./42'),
  module195 = require('./195'),
  module156 = require('./156');

require('./5');

h = module156('AndroidTextInput');

(function (c) {
  function u() {
    module22(this, u);
    return module30(this, module33(u).apply(this, arguments));
  }

  module36(u, c);
  module23(u, [
    {
      key: 'clear',
      value: function () {},
    },
    {
      key: 'isFocused',
      value: function () {},
    },
  ]);
})(module78.NativeComponent);

var E = ['phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'],
  w = function () {
    return true;
  },
  L = module195({
    displayName: 'TextInput',
    statics: {
      State: {
        currentlyFocusedField: module153.currentlyFocusedField,
        focusTextInput: module153.focusTextInput,
        blurTextInput: module153.blurTextInput,
      },
    },
    propTypes: (function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {};
        if (n % 2)
          p(Object(o), true).forEach(function (n) {
            module46(t, n, o[n]);
          });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
        else
          p(Object(o)).forEach(function (n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
          });
      }

      return t;
    })({}, module253, {
      autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
      autoCompleteType: PropTypes.oneOf([
        'cc-csc',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-number',
        'email',
        'name',
        'password',
        'postal-code',
        'street-address',
        'tel',
        'username',
        'off',
      ]),
      autoCorrect: PropTypes.bool,
      spellCheck: PropTypes.bool,
      autoFocus: PropTypes.bool,
      allowFontScaling: PropTypes.bool,
      maxFontSizeMultiplier: PropTypes.number,
      editable: PropTypes.bool,
      keyboardType: PropTypes.oneOf([
        'default',
        'email-address',
        'numeric',
        'phone-pad',
        'number-pad',
        'ascii-capable',
        'numbers-and-punctuation',
        'url',
        'name-phone-pad',
        'decimal-pad',
        'twitter',
        'web-search',
        'visible-password',
      ]),
      keyboardAppearance: PropTypes.oneOf(['default', 'light', 'dark']),
      returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo']),
      returnKeyLabel: PropTypes.string,
      maxLength: PropTypes.number,
      numberOfLines: PropTypes.number,
      disableFullscreenUI: PropTypes.bool,
      enablesReturnKeyAutomatically: PropTypes.bool,
      multiline: PropTypes.bool,
      textBreakStrategy: PropTypes.oneOf(['simple', 'highQuality', 'balanced']),
      onBlur: PropTypes.func,
      onFocus: PropTypes.func,
      onChange: PropTypes.func,
      onChangeText: PropTypes.func,
      onContentSizeChange: PropTypes.func,
      onTextInput: PropTypes.func,
      onEndEditing: PropTypes.func,
      onSelectionChange: PropTypes.func,
      onSubmitEditing: PropTypes.func,
      onKeyPress: PropTypes.func,
      onLayout: PropTypes.func,
      onScroll: PropTypes.func,
      placeholder: PropTypes.string,
      placeholderTextColor: module58,
      scrollEnabled: PropTypes.bool,
      secureTextEntry: PropTypes.bool,
      selectionColor: module58,
      selectionState: PropTypes.instanceOf(module311),
      selection: PropTypes.shape({
        start: PropTypes.number.isRequired,
        end: PropTypes.number,
      }),
      value: PropTypes.string,
      defaultValue: PropTypes.string,
      clearButtonMode: PropTypes.oneOf(['never', 'while-editing', 'unless-editing', 'always']),
      clearTextOnFocus: PropTypes.bool,
      selectTextOnFocus: PropTypes.bool,
      blurOnSubmit: PropTypes.bool,
      style: module180.propTypes.style,
      underlineColorAndroid: module58,
      inlineImageLeft: PropTypes.string,
      inlineImagePadding: PropTypes.number,
      rejectResponderTermination: PropTypes.bool,
      dataDetectorTypes: PropTypes.oneOfType([PropTypes.oneOf(E), PropTypes.arrayOf(PropTypes.oneOf(E))]),
      caretHidden: PropTypes.bool,
      contextMenuHidden: PropTypes.bool,
      inputAccessoryViewID: PropTypes.string,
      textContentType: PropTypes.oneOf([
        'none',
        'URL',
        'addressCity',
        'addressCityAndState',
        'addressState',
        'countryName',
        'creditCardNumber',
        'emailAddress',
        'familyName',
        'fullStreetAddress',
        'givenName',
        'jobTitle',
        'location',
        'middleName',
        'name',
        'namePrefix',
        'nameSuffix',
        'nickname',
        'organizationName',
        'postalCode',
        'streetAddressLine1',
        'streetAddressLine2',
        'sublocality',
        'telephoneNumber',
        'username',
        'password',
        'newPassword',
        'oneTimeCode',
      ]),
    }),
    getDefaultProps: function () {
      return {
        allowFontScaling: true,
        rejectResponderTermination: true,
        underlineColorAndroid: 'transparent',
      };
    },
    mixins: [module263],
    isFocused: function () {
      return module153.currentlyFocusedField() === module78.findNodeHandle(this._inputRef);
    },
    _inputRef: undefined,
    _focusSubscription: undefined,
    _lastNativeText: undefined,
    _lastNativeSelection: undefined,
    _rafId: null,
    componentDidMount: function () {
      this._lastNativeText = this.props.value;
      var t = module78.findNodeHandle(this._inputRef);
      if (null != t) module153.registerInput(t);
      if (this.props.autoFocus) this._rafId = requestAnimationFrame(this.focus);
    },
    componentWillUnmount: function () {
      if (this._focusSubscription) this._focusSubscription.remove();
      if (this.isFocused()) this.blur();
      var t = module78.findNodeHandle(this._inputRef);
      if (null != t) module153.unregisterInput(t);
      if (null != this._rafId) cancelAnimationFrame(this._rafId);
    },
    clear: function () {
      this.setNativeProps({
        text: '',
      });
    },
    render: function () {
      var module22;
      module22 = this._renderAndroid();
      return <module76.Provider value>{module22}</module76.Provider>;
    },
    _getText: function () {
      return 'string' == typeof this.props.value ? this.props.value : 'string' == typeof this.props.defaultValue ? this.props.defaultValue : '';
    },
    _setNativeRef: function (t) {
      this._inputRef = t;
    },
    _renderIOSLegacy: function () {
      var t,
        n = module11({}, this.props);

      if (
        ((n.style = [this.props.style]),
        n.selection &&
          null == n.selection.end &&
          (n.selection = {
            start: n.selection.start,
            end: n.selection.start,
          }),
        n.multiline)
      ) {
        var o = n.children,
          s = 0;
        React.Children.forEach(o, function () {
          return ++s;
        });
        module3(!(n.value && s), 'Cannot specify both value and children.');
        if (s >= 1)
          o = (
            <module180 style={n.style} allowFontScaling={n.allowFontScaling} maxFontSizeMultiplier={n.maxFontSizeMultiplier}>
              {o}
            </module180>
          );
        if (n.inputView) o = [o, n.inputView];
        n.style.unshift(A.multilineInput);
        t = <undefined />;
      } else t = <undefined />;

      return (
        <module194
          onLayout={n.onLayout}
          onPress={this._onPress}
          rejectResponderTermination
          accessible={n.accessible}
          accessibilityLabel={n.accessibilityLabel}
          accessibilityRole={n.accessibilityRole}
          accessibilityStates={n.accessibilityStates}
          nativeID={this.props.nativeID}
          testID={n.testID}
        >
          {t}
        </module194>
      );
    },
    _renderIOS: function () {
      var t = module11({}, this.props);
      t.style = [this.props.style];
      if (t.selection && null == t.selection.end)
        t.selection = {
          start: t.selection.start,
          end: t.selection.start,
        };
      var n = void t.multiline;
      if (t.multiline) t.style.unshift(A.multilineInput);
      var o = <n />;
      return (
        <module194
          onLayout={t.onLayout}
          onPress={this._onPress}
          rejectResponderTermination={t.rejectResponderTermination}
          accessible={t.accessible}
          accessibilityLabel={t.accessibilityLabel}
          accessibilityRole={t.accessibilityRole}
          accessibilityStates={t.accessibilityStates}
          nativeID={this.props.nativeID}
          testID={t.testID}
        >
          {o}
        </module194>
      );
    },
    _renderAndroid: function () {
      var t = module11({}, this.props);
      t.style = [this.props.style];
      t.autoCapitalize = module42.getViewManagerConfig('AndroidTextInput').Constants.AutoCapitalizationType[t.autoCapitalize || 'sentences'];
      var n = this.props.children,
        o = 0;
      React.Children.forEach(n, function () {
        return ++o;
      });
      module3(!(this.props.value && o), 'Cannot specify both value and children.');
      if (o > 1) n = <module180>{n}</module180>;
      if (t.selection && null == t.selection.end)
        t.selection = {
          start: t.selection.start,
          end: t.selection.start,
        };
      var s = <h />;
      return (
        <module194
          onLayout={t.onLayout}
          onPress={this._onPress}
          accessible={this.props.accessible}
          accessibilityLabel={this.props.accessibilityLabel}
          accessibilityRole={this.props.accessibilityRole}
          accessibilityStates={this.props.accessibilityStates}
          nativeID={this.props.nativeID}
          testID={this.props.testID}
        >
          {s}
        </module194>
      );
    },
    _onFocus: function (t) {
      if (this.props.onFocus) this.props.onFocus(t);
      if (this.props.selectionState) this.props.selectionState.focus();
    },
    _onPress: function (t) {
      if (this.props.editable || undefined === this.props.editable) this.focus();
    },
    _onChange: function (t) {
      if (this._inputRef && this._inputRef.setNativeProps)
        this._inputRef.setNativeProps({
          mostRecentEventCount: t.nativeEvent.eventCount,
        });
      var n = t.nativeEvent.text;
      if (this.props.onChange) this.props.onChange(t);
      if (this.props.onChangeText) this.props.onChangeText(n);

      if (this._inputRef) {
        this._lastNativeText = n;
        this.forceUpdate();
      }
    },
    _onSelectionChange: function (t) {
      if (this.props.onSelectionChange) this.props.onSelectionChange(t);

      if (this._inputRef) {
        this._lastNativeSelection = t.nativeEvent.selection;
        if (this.props.selection || this.props.selectionState) this.forceUpdate();
      }
    },
    componentDidUpdate: function () {
      var t = {};
      if (this._lastNativeText !== this.props.value && 'string' == typeof this.props.value) t.text = this.props.value;
      var n = this.props.selection;
      if (this._lastNativeSelection && n && (this._lastNativeSelection.start !== n.start || this._lastNativeSelection.end !== n.end)) t.selection = this.props.selection;
      if (Object.keys(t).length > 0 && this._inputRef && this._inputRef.setNativeProps) this._inputRef.setNativeProps(t);
      if (this.props.selectionState && n) this.props.selectionState.update(n.start, n.end);
    },
    _onBlur: function (t) {
      this.blur();
      if (this.props.onBlur) this.props.onBlur(t);
      if (this.props.selectionState) this.props.selectionState.blur();
    },
    _onTextInput: function (t) {
      if (this.props.onTextInput) this.props.onTextInput(t);
    },
    _onScroll: function (t) {
      if (this.props.onScroll) this.props.onScroll(t);
    },
  }),
  j = L,
  A = module52.create({
    multilineInput: {
      paddingTop: 5,
    },
  });

module.exports = j;
