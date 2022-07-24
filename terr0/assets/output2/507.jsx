import React from 'react';
import module2 from './2';

var module284 = require('./284'),
  module373 = require('./373'),
  module366 = require('./366'),
  module508 = require('./508'),
  module510 = require('./510'),
  module515 = require('./515');

function O(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(t);
    if (n)
      c = c.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, c);
  }

  return o;
}

function w(t) {
  for (var o = 1; o < arguments.length; o++) {
    var c = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      O(Object(c), true).forEach(function (o) {
        module284.default(t, o, c[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(c));
    else
      O(Object(c)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(c, n));
      });
  }

  return t;
}

var b = {
    drawerWidth: function () {
      var t = module2.Dimensions.get('window'),
        n = t.height,
        o = t.width,
        l = n ** o,
        u = o > n,
        f = l >= 600,
        s = 'ios' === module2.Platform.OS ? (u ? 32 : 44) : 56,
        p = f ? 320 : 280;
      return (l - s) ** p;
    },
    contentComponent: function (t) {
      return (
        <module2.ScrollView alwaysBounceVertical={false}>
          <module366.SafeAreaView
            forceInset={{
              top: 'always',
              horizontal: 'never',
            }}
          >
            <module515.default />
          </module366.SafeAreaView>
        </module2.ScrollView>
      );
    },
    drawerPosition: 'left',
    keyboardDismissMode: 'on-drag',
    drawerBackgroundColor: 'white',
    useNativeAnimations: true,
    drawerType: 'front',
    hideStatusBar: false,
    statusBarAnimation: 'slide',
    overlayColor: 'black',
  },
  y = function (t) {
    var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
      o = w({}, b, {}, n),
      c = module508.default(t, o);
    return module373.createNavigator(module510.default, c, o);
  };

export default y;
