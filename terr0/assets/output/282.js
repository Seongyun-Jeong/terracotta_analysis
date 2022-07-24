var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36');

class React {
  constructor() {
    module22(this, c);
    return module30(this, module33(c).apply(this, arguments));
  }

  shouldComponentUpdate(n) {
    return n.shouldUpdate;
  }

  render() {
    return this.props.render();
  }
}

module.exports = React;
