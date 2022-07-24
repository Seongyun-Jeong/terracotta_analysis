import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import module2 from './2';

var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362');

class b {
  constructor() {
    module356.default(this, b);
    return module358.default(this, module361.default(b).apply(this, arguments));
  }

  render() {
    if ('android' === module2.Platform.OS && module2.Platform.Version >= 21) {
      var t = this.props,
        u = t.style,
        s = module370(t, ['style']);
      return (
        <module2.TouchableNativeFeedback>
          <module2.View style={u}>{React.Children.only(this.props.children)}</module2.View>
        </module2.TouchableNativeFeedback>
      );
    }

    return <module2.TouchableOpacity>{this.props.children}</module2.TouchableOpacity>;
  }
}

export default b;
b.defaultProps = {
  borderless: false,
  pressColor: 'rgba(0, 0, 0, .32)',
};
