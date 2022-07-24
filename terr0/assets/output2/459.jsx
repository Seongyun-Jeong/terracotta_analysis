var module404 = require('./404');

import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';
import PropTypes from 'prop-types';

var module284 = require('./284'),
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module456 = module404(require('./456'));

function P(t, n) {
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

function U(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      P(Object(o), true).forEach(function (n) {
        module284.default(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      P(Object(o)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(o, n));
      });
  }

  return t;
}

var v = (function (t) {
  function n(t) {
    var l;
    module356.default(this, n);

    (l = module358.default(this, module361.default(n).call(this, t))).showUnderlay = function () {
      if (l.hasPressHandler()) {
        l.setState({
          extraChildStyle: {
            opacity: l.props.activeOpacity,
          },
          extraUnderlayStyle: {
            backgroundColor: l.props.underlayColor,
          },
        });
        if (l.props.onShowUnderlay) l.props.onShowUnderlay();
      }
    };

    l.hasPressHandler = function () {
      return l.props.onPress || l.props.onPressIn || l.props.onPressOut || l.props.onLongPress;
    };

    l.hideUnderlay = function () {
      l.setState({
        extraChildStyle: null,
        extraUnderlayStyle: null,
      });
      if (l.props.onHideUnderlay) l.props.onHideUnderlay();
    };

    l.onStateChange = function (t, n) {
      if (n === module456.TOUCHABLE_STATE.BEGAN) l.showUnderlay();
      else if (!(n !== module456.TOUCHABLE_STATE.UNDETERMINED && n !== module456.TOUCHABLE_STATE.MOVED_OUTSIDE)) l.hideUnderlay();
    };

    l.state = {
      extraChildStyle: null,
      extraUnderlayStyle: null,
    };
    return l;
  }

  module362.default(n, t);
  module357(n, [
    {
      key: 'renderChildren',
      value: function () {
        if (!this.props.children) return <module2.View />;
        var t = React.Children.only(this.props.children);
        return React.cloneElement(t, {
          style: module2.StyleSheet.compose(t.props.style, this.state.extraChildStyle),
        });
      },
    },
    {
      key: 'render',
      value: function () {
        var t = this.props,
          n = t.style,
          l = undefined === n ? {} : n,
          u = module370(t, ['style']),
          p = this.state.extraUnderlayStyle;
        return React.createElement(
          module456.default,
          module51.default({}, u, {
            style: [l, p],
            onStateChange: this.onStateChange,
          }),
          this.renderChildren()
        );
      },
    },
  ]);
  return n;
})(React.Component);

export default v;
v.defaultProps = U({}, module456.default.defaultProps, {
  activeOpacity: 0.85,
  delayPressOut: 100,
  underlayColor: 'black',
});
v.propTypes = U({}, module456.default.publicPropTypes, {
  activeOpacity: PropTypes.number,
  underlayColor: PropTypes.string,
  style: PropTypes.any,
  onShowUnderlay: PropTypes.func,
  onHideUnderlay: PropTypes.func,
});
