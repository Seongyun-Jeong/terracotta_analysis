require('./286');

require('./43');

require('./286');

import React from 'react';

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module292 = require('./292');

class h {
  constructor() {
    module22(this, h);
    return module30(this, module33(h).apply(this, arguments));
  }

  render() {
    return <module292>{this.props.children}</module292>;
  }
}

class c {
  constructor() {
    module22(this, l);
    return module30(this, module33(l).apply(this, arguments));
  }

  render() {
    throw null;
  }
}

h.MODE_DIALOG = 'dialog';
h.MODE_DROPDOWN = 'dropdown';
h.Item = c;
h.defaultProps = {
  mode: 'dialog',
};
module.exports = h;
