import module11 from './11';
import module9 from '@babel/runtime/helpers/defineEnumerableProperties';

var module46 = require('./46'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36');

function h(o, t) {
  var n = Object.keys(o);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(o);
    if (t)
      c = c.filter(function (t) {
        return Object.getOwnPropertyDescriptor(o, t).enumerable;
      });
    n.push.apply(n, c);
  }

  return n;
}

function u(o) {
  for (var n = 1; n < arguments.length; n++) {
    var c = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      h(Object(c), true).forEach(function (n) {
        module46(o, n, c[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(c));
    else
      h(Object(c)).forEach(function (t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(c, t));
      });
  }

  return o;
}

import React from 'react';

var module42 = require('./42'),
  module317 = require('./317'),
  module162 = require('./162'),
  j = React.forwardRef(function (t, n) {
    return <y />;
  });

class y {
  constructor() {
    var o, t;
    module22(this, h);

    (t = module30(this, (o = module33(h)).call.apply(o, [this].concat(args))))._onSelect = function (o) {
      var n = o.nativeEvent.position;
      if (-1 === n) {
        if (t.props.onIconClicked) t.props.onIconClicked();
      } else if (t.props.onActionSelected) t.props.onActionSelected(n);
    };

    return t;
  }

  render() {
    var t = this.props,
      c = t.forwardedRef,
      s = u({}, module9(t, ['onIconClicked', 'onActionSelected', 'forwardedRef']));

    if (
      (this.props.logo && (s.logo = module162(this.props.logo)),
      this.props.navIcon && (s.navIcon = module162(this.props.navIcon)),
      this.props.overflowIcon && (s.overflowIcon = module162(this.props.overflowIcon)),
      this.props.actions)
    ) {
      for (var p = [], f = 0; f < this.props.actions.length; f++) {
        var l = {
          icon: this.props.actions[f].icon,
          show: this.props.actions[f].show,
        };
        if (l.icon) l.icon = module162(l.icon);
        if (l.show) l.show = module42.getViewManagerConfig('ToolbarAndroid').Constants.ShowAsAction[l.show];
        p.push(u({}, this.props.actions[f], {}, l));
      }

      s.nativeActions = p;
    }

    return <module317 />;
  }
}

module.exports = j;
