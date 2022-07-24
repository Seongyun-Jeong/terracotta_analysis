var module404 = require('./404');

import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import PropTypes from 'prop-types';

var module284 = require('./284'),
  module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module456 = require('./456');

function v(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (o)
      u = u.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, u);
  }

  return n;
}

function j(t) {
  for (var o = 1; o < arguments.length; o++) {
    var u = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      v(Object(u), true).forEach(function (o) {
        module284.default(t, o, u[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(u));
    else
      v(Object(u)).forEach(function (o) {
        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(u, o));
      });
  }

  return t;
}

class B {
  constructor() {
    var t, n;
    module356.default(this, o);

    (n = module358.default(this, (t = module361.default(o)).call.apply(t, [this].concat(args)))).getExtraButtonProps = function () {
      var t = {},
        o = n.props.background;
      if (o) 'Ripple' === o.type ? ((t.borderless = o.borderless), (t.rippleColor = o.color)) : 'SelectableBackgroundBorderless' === o.type && (t.borderless = true);
      t.foreground = n.props.useForeground;
      return t;
    };

    return n;
  }

  static SelectableBackground() {
    return {
      type: 'SelectableBackground',
    };
  }

  static SelectableBackgroundBorderless() {
    return {
      type: 'SelectableBackgroundBorderless',
    };
  }

  static Ripple(t, o) {
    return {
      type: 'Ripple',
      color: t,
      borderless: o,
    };
  }

  static canUseNativeForeground() {
    return Platform.Version >= 23;
  }

  render() {
    var t = this.props,
      o = t.style,
      n = undefined === o ? {} : o,
      c = module370(t, ['style']);
    return <module456.default />;
  }
}

export default B;
B.defaultProps = j({}, module456.default.defaultProps, {
  useForeground: true,
  extraButtonProps: {
    rippleColor: null,
  },
});
B.propTypes = j({}, module456.default.publicPropTypes, {
  useForeground: PropTypes.bool,
  background: PropTypes.object,
  style: PropTypes.any,
});
