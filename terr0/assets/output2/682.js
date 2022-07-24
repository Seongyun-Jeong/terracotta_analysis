var module404 = require('./404');

import React from 'react';
import module2 from './2';
import PropTypes from 'prop-types';

var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module284 = require('./284'),
  module683 = module404(require('./683')),
  module672 = require('./672'),
  module678 = require('./678'),
  module680 = require('./680');

function P(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    if (n)
      u = u.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, u);
  }

  return o;
}

function S(t) {
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

var T = S({}, module2.ViewPropTypes, {
  size: PropTypes.string.isRequired,
  unitId: PropTypes.string.isRequired,
  request: PropTypes.object,
  video: PropTypes.object,
});
Object.keys(module683.default).forEach(function (t) {
  T[t] = PropTypes.func;
});
Object.keys(module683.NativeExpressEventTypes).forEach(function (t) {
  T[t] = PropTypes.func;
});
var q = {};

function z(t) {
  if (q[t]) return q[t];
  var n = module2.requireNativeComponent(t, D, {
    nativeOnly: {
      onBannerEvent: true,
    },
  });
  q[t] = n;
  return n;
}

var D = (function (t) {
  function n(t) {
    var o;
    module356.default(this, n);

    (o = module358.default(this, module361.default(n).call(this, t))).onBannerEvent = function (t) {
      var n = t.nativeEvent,
        u = module360.default(o).props;
      if (u[n.type])
        if ('onAdFailedToLoad' === n.type) {
          var f = n.payload,
            s = f.code,
            l = f.message;
          u[n.type](module672.nativeToJSError(s, l));
        } else u[n.type](n.payload || {});
      if ('onSizeChange' === n.type) o.updateSize(n.payload);
      if ('onAdLoaded' === n.type && 'ios' === module2.Platform.OS) o.updateSize(n.payload);
    };

    o.updateSize = function (t) {
      var n = t.width,
        u = t.height;
      if (undefined !== n && undefined !== u)
        o.setState({
          width: n,
          height: u,
        });
    };

    o.state = {
      width: 0,
      height: 0,
    };
    o.nativeView = z(t.class);
    return o;
  }

  module362.default(n, t);
  module357(n, [
    {
      key: 'render',
      value: function () {
        var t = this.props.style;
        return React.createElement(
          this.nativeView,
          module51.default({}, this.props, {
            style: [t, S({}, this.state)],
            onBannerEvent: this.onBannerEvent,
          })
        );
      },
    },
  ]);
  return n;
})(React.Component);

D.propTypes = T;
D.defaultProps = {
  request: new module678.default().addTestDevice().build(),
  video: new module680.default().build(),
};
var k = D;
export default k;
