import module11 from './11';
import module9 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module252 = require('./252'),
  module52 = require('./52'),
  module75 = require('./75'),
  module272 = require('./272');

class R {
  constructor() {
    var t, n;
    module22(this, _);
    (n = module30(this, (t = module33(_)).call.apply(t, [this].concat(args))))._viewRef = null;

    n._captureRef = function (t) {
      n._viewRef = t;
    };

    return n;
  }

  setNativeProps(t) {
    var n = this._viewRef;

    if (n) {
      module272(n);
      n.setNativeProps(t);
    }
  }

  render() {
    var l = this.props,
      s = l.children,
      c = l.style,
      o = l.imageStyle,
      f = l.imageRef,
      p = module9(l, ['children', 'style', 'imageStyle', 'imageRef']);
    return (
      <module75 accessibilityIgnoresInvertColors style={c} ref={this._captureRef}>
        <module252 />
        {s}
      </module75>
    );
  }
}

module.exports = R;
