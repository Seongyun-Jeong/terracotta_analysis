var module404 = require('./404');

var module284 = require('./284'),
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  module2 = require('./2'),
  module438 = require('./438'),
  PropTypes = require('prop-types');

function P(t, s) {
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

var y = {
  UNDETERMINED: 0,
  BEGAN: 1,
  MOVED_OUTSIDE: 2,
};
exports.TOUCHABLE_STATE = y;

var S = {
    accessible: PropTypes.default.bool,
    accessibilityLabel: PropTypes.default.node,
    accessibilityHint: PropTypes.default.string,
    hitSlop: PropTypes.default.shape({
      top: PropTypes.default.number,
      left: PropTypes.default.number,
      bottom: PropTypes.default.number,
      right: PropTypes.default.number,
    }),
    disabled: PropTypes.default.bool,
    onPress: PropTypes.default.func,
    onPressIn: PropTypes.default.func,
    onPressOut: PropTypes.default.func,
    onLayout: PropTypes.default.func,
    onLongPress: PropTypes.default.func,
    nativeID: PropTypes.default.string,
    testID: PropTypes.default.string,
    delayPressIn: PropTypes.default.number,
    delayPressOut: PropTypes.default.number,
    delayLongPress: PropTypes.default.number,
  },
  D = {
    extraButtonProps: PropTypes.default.object,
    onStateChange: PropTypes.default.func,
  },
  b = (function (t, ...args) {
    function s() {
      var t, o;
      module356.default(this, s);
      (o = module358.default(this, (t = module361.default(s)).call.apply(t, [this].concat(args)))).longPressDetected = false;
      o.pointerInside = true;
      o.STATE = y.UNDETERMINED;

      o.handlePressIn = function () {
        if (
          (o.props.delayPressIn
            ? (o.pressInTimeout = setTimeout(function () {
                o.moveToState(y.BEGAN);
                o.pressInTimeout = null;
              }, o.props.delayPressIn))
            : o.moveToState(y.BEGAN),
          o.props.onLongPress)
        ) {
          var t = (o.props.delayPressIn || 0) + (o.props.delayLongPress || 0);
          o.longPressTimeout = setTimeout(o.onLongPressDetected, t);
        }
      };

      o.handleMoveOutside = function () {
        if (o.props.delayPressOut)
          o.pressOutTimeout =
            o.pressOutTimeout ||
            setTimeout(function () {
              o.moveToState(y.MOVED_OUTSIDE);
              o.pressOutTimeout = null;
            }, o.props.delayPressOut);
        else o.moveToState(y.MOVED_OUTSIDE);
      };

      o.handleGoToUndetermined = function () {
        clearTimeout(o.pressOutTimeout);
        if (o.props.delayPressOut)
          o.pressOutTimeout = setTimeout(function () {
            if (o.STATE === y.UNDETERMINED) o.moveToState(y.BEGAN);
            o.moveToState(y.UNDETERMINED);
            o.pressOutTimeout = null;
          }, o.props.delayPressOut);
        else {
          if (o.STATE === y.UNDETERMINED) o.moveToState(y.BEGAN);
          o.moveToState(y.UNDETERMINED);
        }
      };

      o.moveToState = function (t) {
        if (t !== o.STATE) {
          if (t === y.BEGAN) {
            if (o.props.onPressIn) o.props.onPressIn();
          } else if (t === y.MOVED_OUTSIDE) {
            if (o.props.onPressOut) o.props.onPressOut();
          } else if (t === y.UNDETERMINED) {
            o.reset();
            if (o.STATE === y.BEGAN && o.props.onPressOut) o.props.onPressOut();
          }
          if (o.props.onStateChange) o.props.onStateChange(o.STATE, t);
          o.STATE = t;
        }
      };

      o.onGestureEvent = function (t) {
        var s = t.nativeEvent.pointerInside;
        if (o.pointerInside !== s) s ? o.onMoveIn() : o.onMoveOut();
        o.pointerInside = s;
      };

      o.onHandlerStateChange = function (t) {
        var s = t.nativeEvent.state;
        if (s === module438.State.CANCELLED || s === module438.State.FAILED) o.moveToState(y.UNDETERMINED);
        else if (s === ('ios' === module2.Platform.OS ? module438.State.ACTIVE : module438.State.BEGAN) && o.STATE === y.UNDETERMINED) o.handlePressIn();
        else if (s === module438.State.END) {
          var n = !o.longPressDetected && o.STATE !== y.MOVED_OUTSIDE && null === o.pressOutTimeout;
          o.handleGoToUndetermined();
          if (n && o.props.onPress) o.props.onPress();
        }
      };

      o.onLongPressDetected = function () {
        o.longPressDetected = true;
        o.props.onLongPress();
      };

      o.onMoveIn = function () {
        if (o.STATE === y.MOVED_OUTSIDE) o.moveToState(y.BEGAN);
      };

      o.onMoveOut = function () {
        clearTimeout(o.longPressTimeout);
        o.longPressTimeout = null;
        if (o.STATE === y.BEGAN) o.handleMoveOutside();
      };

      return o;
    }

    module362.default(s, t);
    module357.default(s, [
      {
        key: 'componentDidMount',
        value: function () {
          this.reset();
        },
      },
      {
        key: 'reset',
        value: function () {
          this.longPressDetected = false;
          this.pointerInside = true;
          clearTimeout(this.pressInTimeout);
          clearTimeout(this.pressOutTimeout);
          clearTimeout(this.longPressTimeout);
          this.pressOutTimeout = null;
          this.longPressTimeout = null;
          this.pressInTimeout = null;
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.reset();
        },
      },
      {
        key: 'render',
        value: function () {
          var t = {
            accessible: false !== this.props.accessible,
            accessibilityLabel: this.props.accessibilityLabel,
            accessibilityHint: this.props.accessibilityHint,
            accessibilityComponentType: this.props.accessibilityComponentType,
            accessibilityRole: this.props.accessibilityRole,
            accessibilityStates: this.props.accessibilityStates,
            accessibilityTraits: this.props.accessibilityTraits,
            nativeID: this.props.nativeID,
            testID: this.props.testID,
            onLayout: this.props.onLayout,
            hitSlop: this.props.hitSlop,
          };
          return React.default.createElement(
            module438.BaseButton,
            module51.default(
              {
                onHandlerStateChange: this.props.disabled ? null : this.onHandlerStateChange,
                onGestureEvent: this.onGestureEvent,
                hitSlop: this.props.hitSlop,
              },
              this.props.extraButtonProps
            ),
            React.default.createElement(
              module2.Animated.View,
              module51.default({}, t, {
                style: this.props.style,
              }),
              this.props.children
            )
          );
        },
      },
    ]);
    return s;
  })(React.Component);

exports.default = b;
b.publicPropTypes = S;
b.internalPropTypes = D;

b.propTypes = (function (t) {
  for (var s = 1; s < arguments.length; s++) {
    var n = null != arguments[s] ? arguments[s] : {};
    if (s % 2)
      P(Object(n), true).forEach(function (s) {
        module284.default(t, s, n[s]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(n));
    else
      P(Object(n)).forEach(function (s) {
        Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(n, s));
      });
  }

  return t;
})({}, D, {}, S);

b.defaultProps = {
  delayLongPress: 600,
  extraButtonProps: {
    rippleColor: 'transparent',
  },
};