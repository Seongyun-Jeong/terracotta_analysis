var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  React = require('react'),
  module52 = require('./52'),
  module180 = require('./180'),
  module75 = require('./75'),
  y = module52.create({
    dummyDatePickerIOS: {
      height: 100,
      width: 300,
      backgroundColor: '#ffbcbc',
      borderWidth: 1,
      borderColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    datePickerText: {
      color: '#333333',
      margin: 20,
    },
  });

class f {
  constructor() {
    module22(this, f);
    return module30(this, module33(f).apply(this, arguments));
  }

  render() {
    return (
      <module75 style={[y.dummyDatePickerIOS, this.props.style]}>
        <module180 style={y.datePickerText}>DatePickerIOS is not supported on this platform!</module180>
      </module75>
    );
  }
}

module.exports = f;
