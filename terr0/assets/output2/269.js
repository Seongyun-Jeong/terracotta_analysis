require('./43');

import React from 'react';
import module8 from './8';

var t,
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module11 = require('./11'),
  module69 = require('./69');

function y(t) {
  return {
    backgroundColor:
      null != t.backgroundColor
        ? {
            value: t.backgroundColor,
            animated: t.animated,
          }
        : null,
    barStyle:
      null != t.barStyle
        ? {
            value: t.barStyle,
            animated: t.animated,
          }
        : null,
    translucent: t.translucent,
    hidden:
      null != t.hidden
        ? {
            value: t.hidden,
            animated: t.animated,
            transition: t.showHideTransition,
          }
        : null,
    networkActivityIndicatorVisible: t.networkActivityIndicatorVisible,
  };
}

var f = (function (t, ...args) {
  function s() {
    var t, l;
    module22(this, s);
    (l = module30(this, (t = module33(s)).call.apply(t, [this].concat(args))))._stackEntry = null;
    return l;
  }

  module36(s, t);
  module23(
    s,
    [
      {
        key: 'componentDidMount',
        value: function () {
          this._stackEntry = s.pushStackEntry(this.props);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          s.popStackEntry(this._stackEntry);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          this._stackEntry = s.replaceStackEntry(this._stackEntry, this.props);
        },
      },
      {
        key: 'render',
        value: function () {
          return null;
        },
      },
    ],
    [
      {
        key: 'setHidden',
        value: function (t, n) {
          n = n || 'none';
          s._defaultProps.hidden.value = t;
          module8.setHidden(t);
        },
      },
      {
        key: 'setBarStyle',
        value: function (t, n) {
          n = n || false;
          s._defaultProps.barStyle.value = t;
          module8.setStyle(t);
        },
      },
      {
        key: 'setNetworkActivityIndicatorVisible',
        value: function (t) {
          console.warn('`setNetworkActivityIndicatorVisible` is only available on iOS');
        },
      },
      {
        key: 'setBackgroundColor',
        value: function (t, n) {
          n = n || false;
          s._defaultProps.backgroundColor.value = t;
          module8.setColor(module69(t), n);
        },
      },
      {
        key: 'setTranslucent',
        value: function (t) {
          s._defaultProps.translucent = t;
          module8.setTranslucent(t);
        },
      },
      {
        key: 'pushStackEntry',
        value: function (t) {
          var n = y(t);

          s._propsStack.push(n);

          s._updatePropsStack();

          return n;
        },
      },
      {
        key: 'popStackEntry',
        value: function (t) {
          var n = s._propsStack.indexOf(t);

          if (-1 !== n) s._propsStack.splice(n, 1);

          s._updatePropsStack();
        },
      },
      {
        key: 'replaceStackEntry',
        value: function (t, n) {
          var l = y(n),
            u = s._propsStack.indexOf(t);

          if (-1 !== u) s._propsStack[u] = l;

          s._updatePropsStack();

          return l;
        },
      },
    ]
  );
  return s;
})(React.Component);

f._propsStack = [];
f._defaultProps = y({
  animated: false,
  showHideTransition: 'fade',
  backgroundColor: null != (t = module8.DEFAULT_BACKGROUND_COLOR) ? t : 'black',
  barStyle: 'default',
  translucent: false,
  hidden: false,
  networkActivityIndicatorVisible: false,
});
f._updateImmediate = null;
f._currentValues = null;
f.currentHeight = module8.HEIGHT;
f.defaultProps = {
  animated: false,
  showHideTransition: 'fade',
};

f._updatePropsStack = function () {
  clearImmediate(f._updateImmediate);
  f._updateImmediate = setImmediate(function () {
    var t = f._propsStack,
      module22 = f._defaultProps,
      l = f._currentValues,
      u = t.reduce(function (t, n) {
        for (var l in n) null != n[l] && (t[l] = n[l]);

        return t;
      }, module11({}, module22));
    if (!(l && l.barStyle.value === u.barStyle.value)) module8.setStyle(u.barStyle.value);
    if (!(l && l.backgroundColor.value === u.backgroundColor.value)) module8.setColor(module69(u.backgroundColor.value), u.backgroundColor.animated);
    if (!(l && l.hidden.value === u.hidden.value)) module8.setHidden(u.hidden.value);
    if (!(l && l.translucent === u.translucent)) module8.setTranslucent(u.translucent);
    f._currentValues = u;
  });
};

module.exports = f;
