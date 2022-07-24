var module46 = require('./46'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36');

function b(t, o) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (o)
      s = s.filter(function (o) {
        return Object.getOwnPropertyDescriptor(t, o).enumerable;
      });
    n.push.apply(n, s);
  }

  return n;
}

require('./43');

require('./201');

import React from 'react';
import module3 from './3';

var module52 = require('./52'),
  module180 = require('./180'),
  module193 = require('./193'),
  module75 = require('./75'),
  P = module52.create({
    button: {
      elevation: 4,
      backgroundColor: '#2196F3',
      borderRadius: 2,
    },
    text: (function (o) {
      for (var n = 1; n < arguments.length; n++) {
        var s = null != arguments[n] ? arguments[n] : {};
        if (n % 2)
          b(Object(s), true).forEach(function (n) {
            module46(o, n, s[n]);
          });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(o, Object.getOwnPropertyDescriptors(s));
        else
          b(Object(s)).forEach(function (t) {
            Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(s, t));
          });
      }

      return o;
    })(
      {
        textAlign: 'center',
        padding: 8,
      },
      {
        color: 'white',
        fontWeight: '500',
      }
    ),
    buttonDisabled: {
      elevation: 0,
      backgroundColor: '#dfdfdf',
    },
    textDisabled: {
      color: '#a1a1a1',
    },
  });

class v {
  constructor() {
    module22(this, b);
    return module30(this, module33(b).apply(this, arguments));
  }

  render() {
    var t = this.props,
      o = t.accessibilityLabel,
      n = t.color,
      s = t.onPress,
      c = t.title,
      l = t.hasTVPreferredFocus,
      b = t.disabled,
      p = t.testID,
      v = [P.button],
      j = [P.text];
    if (n)
      v.push({
        backgroundColor: n,
      });
    var D = [];

    if (b) {
      v.push(P.buttonDisabled);
      j.push(P.textDisabled);
      D.push('disabled');
    }

    module3('string' == typeof c, 'The title prop of a Button must be a string');
    var w = c.toUpperCase(),
      x = module193;
    return (
      <x accessibilityLabel={o} accessibilityRole="button" accessibilityStates={D} hasTVPreferredFocus={l} testID={p} disabled={b} onPress={s}>
        <module75 style={v}>
          <module180 style={j} disabled={b}>
            {w}
          </module180>
        </module75>
      </x>
    );
  }
}

module.exports = v;
