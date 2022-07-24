require('./58');

require('./43');

import React from 'react';

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module52 = require('./52'),
  module276 = require('./276'),
  y = module52.create({
    container: {
      position: 'absolute',
    },
  });

class h {
  constructor() {
    module22(this, h);
    return module30(this, module33(h).apply(this, arguments));
  }

  render() {
    console.warn('<InputAccessoryView> is only supported on iOS.');
    return 0 === React.Children.count(this.props.children) ? null : (
      <module276 style={[this.props.style, y.container]} nativeID={this.props.nativeID} backgroundColor={this.props.backgroundColor}>
        {this.props.children}
      </module276>
    );
  }
}

module.exports = h;
