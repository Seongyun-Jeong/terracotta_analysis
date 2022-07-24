var module404 = require('./404');

import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';

var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module464 = require('./464');

class y {
  constructor() {
    module356.default(this, l);
    return module358.default(this, module361.default(l).apply(this, arguments));
  }

  render() {
    if (module464.screensEnabled && module464.screensEnabled()) {
      var t = this.props,
        l = t.isVisible,
        u = module370(t, ['isVisible']);
      return <module464.Screen />;
    }

    var o = this.props,
      c = o.isVisible,
      f = o.children,
      h = o.style,
      y = module370(o, ['isVisible', 'children', 'style']);
    return (
      <module2.View>
        <module2.View style={c ? E.attached : E.detached}>{f}</module2.View>
      </module2.View>
    );
  }
}

export default y;
var E = module2.StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  attached: {
    flex: 1,
  },
  detached: {
    flex: 1,
    top: 3e3,
  },
});
