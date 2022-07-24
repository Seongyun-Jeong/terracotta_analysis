import React from 'react';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module416 = require('./416');

class c {
  constructor() {
    module356.default(this, c);
    return module358.default(this, module361.default(c).apply(this, arguments));
  }

  render() {
    var t = this.props.navigation.state,
      n = t.routes[t.index].key,
      o = this.props.descriptors[n],
      u = o.getComponent();
    return <module416.default component={u} navigation={o.navigation} screenProps={this.props.screenProps} />;
  }
}

export default c;
