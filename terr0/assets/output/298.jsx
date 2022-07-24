var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  React = require('react'),
  module52 = require('./52'),
  module180 = require('./180'),
  module75 = require('./75'),
  y = module52.create({
    dummy: {
      width: 120,
      height: 50,
      backgroundColor: '#ffbcbc',
      borderWidth: 1,
      borderColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#333333',
      margin: 5,
      fontSize: 10,
    },
  });

class p {
  constructor() {
    module22(this, p);
    return module30(this, module33(p).apply(this, arguments));
  }

  render() {
    return (
      <module75 style={[y.dummy, this.props.style]}>
        <module180 style={y.text}>SegmentedControlIOS is not supported on this platform!</module180>
      </module75>
    );
  }
}

module.exports = p;
