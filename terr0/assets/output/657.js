var module404 = require('./404');

Object.defineProperty(exports, 'defaultStyles', {
  enumerable: true,
  get: function () {
    return module659.defaultStyles;
  },
});

var module51 = require('./51'),
  module284 = require('./284'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  PropTypes = require('prop-types'),
  module658 = require('./658'),
  module659 = require('./659');

function w(t, n) {
  var l = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (n)
      o = o.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    l.push.apply(l, o);
  }

  return l;
}

function I(t) {
  for (var n = 1; n < arguments.length; n++) {
    var l = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      w(Object(l), true).forEach(function (n) {
        module284.default(t, n, l[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(l));
    else
      w(Object(l)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(l, n));
      });
  }

  return t;
}

var C = (function (t) {
  function n(t) {
    var l;
    module356.default(this, n);
    l = module358.default(this, module361.default(n).call(this, t));
    var o = n
        .handlePlaceholder({
          placeholder: l.props.placeholder,
        })
        .concat(l.props.items),
      p = n.getSelectedItem({
        items: o,
        key: l.props.itemKey,
        value: l.props.value,
      }).selectedItem;
    l.state = {
      items: o,
      selectedItem: p,
      showPicker: false,
      animationType: undefined,
      orientation: 'portrait',
    };
    l.onUpArrow = l.onUpArrow.bind(module360.default(l));
    l.onDownArrow = l.onDownArrow.bind(module360.default(l));
    l.onValueChange = l.onValueChange.bind(module360.default(l));
    l.onOrientationChange = l.onOrientationChange.bind(module360.default(l));
    l.setInputRef = l.setInputRef.bind(module360.default(l));
    l.togglePicker = l.togglePicker.bind(module360.default(l));
    l.triggerDoneCallback = l.triggerDoneCallback.bind(module360.default(l));
    l.renderInputAccessoryView = l.renderInputAccessoryView.bind(module360.default(l));
    return l;
  }

  module362.default(n, t);
  module357.default(n, null, [
    {
      key: 'handlePlaceholder',
      value: function (t) {
        var n = t.placeholder;
        return module658.default(n, {}) ? [] : [n];
      },
    },
    {
      key: 'getSelectedItem',
      value: function (t) {
        var n = t.items,
          l = t.key,
          o = t.value,
          s = n.findIndex(function (t) {
            return t.key && l ? module658.default(t.key, l) : module658.default(t.value, o);
          });
        if (-1 === s) s = 0;
        return {
          selectedItem: n[s] || {},
          idx: s,
        };
      },
    },
    {
      key: 'getDerivedStateFromProps',
      value: function (t, l) {
        var o = n
            .handlePlaceholder({
              placeholder: t.placeholder,
            })
            .concat(t.items),
          s = !module658.default(l.items, o),
          u = n.getSelectedItem({
            items: o,
            key: t.itemKey,
            value: t.value,
          }),
          c = u.selectedItem,
          f = u.idx,
          p = !module658.default(t.value, undefined) && !module658.default(l.selectedItem, c);

        if (s || p) {
          if (p) t.onValueChange(c.value, f);
          return I(
            {},
            s
              ? {
                  items: o,
                }
              : {},
            {},
            p
              ? {
                  selectedItem: c,
                }
              : {}
          );
        } else return null;
      },
    },
  ]);
  module357.default(n, [
    {
      key: 'onUpArrow',
      value: function () {
        var t = this.props.onUpArrow;
        this.togglePicker(false, t);
      },
    },
    {
      key: 'onDownArrow',
      value: function () {
        var t = this.props.onDownArrow;
        this.togglePicker(false, t);
      },
    },
    {
      key: 'onValueChange',
      value: function (t, n) {
        var l = this.props.onValueChange;
        l(t, n);
        this.setState(function (t) {
          return {
            selectedItem: t.items[n],
          };
        });
      },
    },
    {
      key: 'onOrientationChange',
      value: function (t) {
        var n = t.nativeEvent;
        this.setState({
          orientation: n.orientation,
        });
      },
    },
    {
      key: 'setInputRef',
      value: function (t) {
        this.inputRef = t;
      },
    },
    {
      key: 'getPlaceholderStyle',
      value: function () {
        var t = this.props,
          n = t.placeholder,
          l = t.placeholderTextColor,
          o = t.style;
        return module658.default(n, {}) || this.state.selectedItem.label !== n.label
          ? {}
          : I(
              {},
              module659.defaultStyles.placeholder,
              {
                color: l,
              },
              o.placeholder
            );
      },
    },
    {
      key: 'triggerOpenCloseCallbacks',
      value: function () {
        var t = this.props,
          n = t.onOpen,
          l = t.onClose;
        if (!this.state.showPicker && n) n();
        if (this.state.showPicker && l) l();
      },
    },
    {
      key: 'triggerDoneCallback',
      value: function () {
        var t = this.props,
          n = t.hideDoneBar,
          l = t.onDonePress;
        if (!n && l) l();
      },
    },
    {
      key: 'togglePicker',
      value: function () {
        var t = arguments.length > 0 && undefined !== arguments[0] && arguments[0],
          n = arguments.length > 1 ? arguments[1] : undefined,
          l = this.props,
          o = l.modalProps;

        if (!l.disabled) {
          if (!this.state.showPicker) module2.Keyboard.dismiss();
          var s = o && o.animationType ? o.animationType : 'slide';
          this.triggerOpenCloseCallbacks();
          this.setState(
            function (n) {
              return {
                animationType: t ? s : undefined,
                showPicker: !n.showPicker,
              };
            },
            function () {
              if (n) n();
            }
          );
        }
      },
    },
    {
      key: 'renderPickerItems',
      value: function () {
        return this.state.items.map(function (t) {
          return React.default.createElement(module2.Picker.Item, {
            label: t.label,
            value: t.value,
            key: t.key || t.label,
            color: t.color,
          });
        });
      },
    },
    {
      key: 'renderInputAccessoryView',
      value: function () {
        var t = this,
          n = this.props,
          l = n.InputAccessoryView,
          o = n.doneText,
          s = n.hideDoneBar,
          u = n.onUpArrow,
          c = n.onDownArrow,
          f = n.style;
        return s
          ? null
          : l
          ? React.default.createElement(l, {
              testID: 'custom_input_accessory_view',
            })
          : React.default.createElement(
              module2.View,
              {
                style: [module659.defaultStyles.modalViewMiddle, f.modalViewMiddle],
                testID: 'input_accessory_view',
              },
              React.default.createElement(
                module2.View,
                {
                  style: [module659.defaultStyles.chevronContainer, f.chevronContainer],
                },
                React.default.createElement(
                  module2.TouchableOpacity,
                  {
                    activeOpacity: u ? 0.5 : 1,
                    onPress: u ? this.onUpArrow : null,
                  },
                  React.default.createElement(module2.View, {
                    style: [
                      module659.defaultStyles.chevron,
                      f.chevron,
                      module659.defaultStyles.chevronUp,
                      f.chevronUp,
                      u ? [module659.defaultStyles.chevronActive, f.chevronActive] : {},
                    ],
                  })
                ),
                React.default.createElement(
                  module2.TouchableOpacity,
                  {
                    activeOpacity: c ? 0.5 : 1,
                    onPress: c ? this.onDownArrow : null,
                  },
                  React.default.createElement(module2.View, {
                    style: [
                      module659.defaultStyles.chevron,
                      f.chevron,
                      module659.defaultStyles.chevronDown,
                      f.chevronDown,
                      c ? [module659.defaultStyles.chevronActive, f.chevronActive] : {},
                    ],
                  })
                )
              ),
              React.default.createElement(
                module2.TouchableWithoutFeedback,
                {
                  onPress: function () {
                    t.togglePicker(true);
                  },
                  hitSlop: {
                    top: 4,
                    right: 4,
                    bottom: 4,
                    left: 4,
                  },
                  testID: 'done_button',
                },
                React.default.createElement(
                  module2.View,
                  {
                    testID: 'needed_for_touchable',
                  },
                  React.default.createElement(
                    module2.Text,
                    {
                      style: [module659.defaultStyles.done, f.done],
                    },
                    o
                  )
                )
              )
            );
      },
    },
    {
      key: 'renderIcon',
      value: function () {
        var t = this.props,
          n = t.style,
          l = t.Icon;
        return l
          ? React.default.createElement(
              module2.View,
              {
                testID: 'icon_container',
                style: [module659.defaultStyles.iconContainer, n.iconContainer],
              },
              React.default.createElement(l, {
                testID: 'icon',
              })
            )
          : null;
      },
    },
    {
      key: 'renderTextInputOrChildren',
      value: function () {
        var t = this.props,
          n = t.children,
          o = t.style,
          s = t.textInputProps,
          u = 'ios' === module2.Platform.OS ? o.inputIOSContainer : o.inputAndroidContainer;
        return n
          ? React.default.createElement(
              module2.View,
              {
                pointerEvents: 'box-only',
                style: u,
              },
              n
            )
          : React.default.createElement(
              module2.View,
              {
                pointerEvents: 'box-only',
                style: u,
              },
              React.default.createElement(
                module2.TextInput,
                module51.default(
                  {
                    style: ['ios' === module2.Platform.OS ? o.inputIOS : o.inputAndroid, this.getPlaceholderStyle()],
                    value: this.state.selectedItem.label,
                    ref: this.setInputRef,
                    editable: false,
                  },
                  s
                )
              ),
              this.renderIcon()
            );
      },
    },
    {
      key: 'renderIOS',
      value: function () {
        var t = this,
          n = this.props,
          o = n.style,
          s = n.modalProps,
          u = n.pickerProps;
        return React.default.createElement(
          module2.View,
          {
            style: [module659.defaultStyles.viewContainer, o.viewContainer],
          },
          React.default.createElement(
            module2.TouchableWithoutFeedback,
            {
              onPress: function () {
                t.togglePicker(true);
              },
              testID: 'ios_touchable_wrapper',
            },
            this.renderTextInputOrChildren()
          ),
          React.default.createElement(
            module2.Modal,
            module51.default(
              {
                testID: 'ios_modal',
                visible: this.state.showPicker,
                transparent: true,
                animationType: this.state.animationType,
                supportedOrientations: ['portrait', 'landscape'],
                onDismiss: this.triggerDoneCallback,
                onOrientationChange: this.onOrientationChange,
              },
              s
            ),
            React.default.createElement(module2.TouchableOpacity, {
              style: [module659.defaultStyles.modalViewTop, o.modalViewTop],
              testID: 'ios_modal_top',
              onPress: function () {
                t.togglePicker(true);
              },
            }),
            this.renderInputAccessoryView(),
            React.default.createElement(
              module2.View,
              {
                style: [
                  module659.defaultStyles.modalViewBottom,
                  {
                    height: 'portrait' === this.state.orientation ? 215 : 162,
                  },
                  o.modalViewBottom,
                ],
              },
              React.default.createElement(
                module2.Picker,
                module51.default(
                  {
                    testID: 'ios_picker',
                    onValueChange: this.onValueChange,
                    selectedValue: this.state.selectedItem.value,
                  },
                  u
                ),
                this.renderPickerItems()
              )
            )
          )
        );
      },
    },
    {
      key: 'renderAndroidHeadless',
      value: function () {
        var t = this.props,
          n = t.disabled,
          o = t.Icon,
          s = t.style,
          u = t.pickerProps;
        return React.default.createElement(
          module2.View,
          {
            style: s.headlessAndroidContainer,
          },
          this.renderTextInputOrChildren(),
          React.default.createElement(
            module2.Picker,
            module51.default(
              {
                style: [
                  o
                    ? {
                        backgroundColor: 'transparent',
                      }
                    : {},
                  module659.defaultStyles.headlessAndroidPicker,
                  s.headlessAndroidPicker,
                ],
                testID: 'android_picker_headless',
                enabled: !n,
                onValueChange: this.onValueChange,
                selectedValue: this.state.selectedItem.value,
              },
              u
            ),
            this.renderPickerItems()
          )
        );
      },
    },
    {
      key: 'renderAndroidNativePickerStyle',
      value: function () {
        var t = this.props,
          n = t.disabled,
          o = t.Icon,
          s = t.style,
          u = t.pickerProps;
        return React.default.createElement(
          module2.View,
          {
            style: [module659.defaultStyles.viewContainer, s.viewContainer],
          },
          React.default.createElement(
            module2.Picker,
            module51.default(
              {
                style: [
                  o
                    ? {
                        backgroundColor: 'transparent',
                      }
                    : {},
                  s.inputAndroid,
                  this.getPlaceholderStyle(),
                ],
                testID: 'android_picker',
                enabled: !n,
                onValueChange: this.onValueChange,
                selectedValue: this.state.selectedItem.value,
              },
              u
            ),
            this.renderPickerItems()
          ),
          this.renderIcon()
        );
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.children,
          l = t.useNativeAndroidPickerStyle;
        return 'ios' === module2.Platform.OS ? this.renderIOS() : n || !l ? this.renderAndroidHeadless() : this.renderAndroidNativePickerStyle();
      },
    },
  ]);
  return n;
})(React.PureComponent);

exports.default = C;
C.propTypes = {
  onValueChange: PropTypes.default.func.isRequired,
  items: PropTypes.default.arrayOf(
    PropTypes.default.shape({
      label: PropTypes.default.string.isRequired,
      value: PropTypes.default.any.isRequired,
      key: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
      color: module2.ColorPropType,
    })
  ).isRequired,
  value: PropTypes.default.any,
  placeholder: PropTypes.default.shape({
    label: PropTypes.default.string,
    value: PropTypes.default.any,
    key: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
    color: module2.ColorPropType,
  }),
  disabled: PropTypes.default.bool,
  itemKey: PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.number]),
  style: PropTypes.default.shape({}),
  children: PropTypes.default.any,
  placeholderTextColor: module2.ColorPropType,
  useNativeAndroidPickerStyle: PropTypes.default.bool,
  hideDoneBar: PropTypes.default.bool,
  doneText: PropTypes.default.string,
  onDonePress: PropTypes.default.func,
  onUpArrow: PropTypes.default.func,
  onDownArrow: PropTypes.default.func,
  onOpen: PropTypes.default.func,
  onClose: PropTypes.default.func,
  modalProps: PropTypes.default.shape({}),
  textInputProps: PropTypes.default.shape({}),
  pickerProps: PropTypes.default.shape({}),
  Icon: PropTypes.default.func,
  InputAccessoryView: PropTypes.default.func,
};
C.defaultProps = {
  value: undefined,
  placeholder: {
    label: 'Select an item...',
    value: null,
    color: '#9EA0A4',
  },
  disabled: false,
  itemKey: null,
  style: {},
  children: null,
  placeholderTextColor: '#C7C7CD',
  useNativeAndroidPickerStyle: true,
  hideDoneBar: false,
  doneText: 'Done',
  onDonePress: null,
  onUpArrow: null,
  onDownArrow: null,
  onOpen: null,
  onClose: null,
  modalProps: {},
  textInputProps: {},
  pickerProps: {},
  Icon: null,
  InputAccessoryView: null,
};
