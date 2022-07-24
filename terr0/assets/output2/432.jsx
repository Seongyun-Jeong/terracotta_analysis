import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';

var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module372 = require('./372'),
  module373 = require('./373'),
  b = module2.StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden',
    },
    innerAttached: {
      flex: 1,
    },
    innerDetached: {
      flex: 1,
      top: 3e3,
    },
  }),
  S = module372.polyfill(y);

class y {
  constructor(t) {
    var l;
    module356.default(this, h);

    (l = module358.default(this, module361.default(h).call(this)))._mustAlwaysBeVisible = function () {
      return l.props.animationEnabled || l.props.swipeEnabled;
    };

    l.state = {
      awake: !t.lazy || t.isFocused,
    };
    return l;
  }

  render() {
    var t = this.state.awake,
      u = this.props,
      o = u.isFocused,
      s = u.childNavigation,
      f = u.removeClippedSubviews,
      c = module370(u, ['isFocused', 'childNavigation', 'removeClippedSubviews']);
    return (
      <module2.View style={b.container} collapsable={false} removeClippedSubviews={'android' === module2.Platform.OS ? f : !o && f}>
        <module2.View style={this._mustAlwaysBeVisible() || o ? b.innerAttached : b.innerDetached}>{t ? <module373.SceneView /> : null}</module2.View>
      </module2.View>
    );
  }
}

export default S;
