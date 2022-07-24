var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  React = require('react'),
  module52 = require('./52'),
  h = module52.create({
    unimplementedView: {},
  });

class l {
  constructor() {
    module22(this, l);
    return module30(this, module33(l).apply(this, arguments));
  }

  setNativeProps() {}

  render() {
    var module75 = require('./75');

    return <module75 style={[h.unimplementedView, this.props.style]}>{this.props.children}</module75>;
  }
}

module.exports = l;
