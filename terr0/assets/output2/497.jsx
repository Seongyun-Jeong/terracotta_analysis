var module404 = require('./404');

import module370 from '@babel/runtime/helpers/defineEnumerableProperties';
import React from 'react';
import PropTypes from 'prop-types';
import module2 from './2';

var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362');

class v {
  constructor() {
    module356.default(this, l);
    return module358.default(this, module361.default(l).apply(this, arguments));
  }

  render() {
    var t = this.props,
      l = t.style,
      n = t.pressOpacity,
      u = t.pressColor,
      p = t.borderless,
      c = module370(t, ['style', 'pressOpacity', 'pressColor', 'borderless']);
    return 'android' === module2.Platform.OS && module2.Platform.Version >= 21 ? (
      <module2.TouchableNativeFeedback>
        <module2.View style={l}>{React.Children.only(this.props.children)}</module2.View>
      </module2.TouchableNativeFeedback>
    ) : (
      <module2.TouchableOpacity>{this.props.children}</module2.TouchableOpacity>
    );
  }
}

export default v;
v.propTypes = {
  onPress: PropTypes.func.isRequired,
  delayPressIn: PropTypes.number,
  borderless: PropTypes.bool,
  pressColor: PropTypes.string,
  pressOpacity: PropTypes.number,
  children: PropTypes.node.isRequired,
};
v.defaultProps = {
  pressColor: 'rgba(255, 255, 255, .4)',
};
