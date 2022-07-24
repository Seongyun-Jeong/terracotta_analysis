var module404 = require('./404');

import React from 'react';
import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module662 = require('./662'),
  module622 = require('./622');

class v {
  constructor(t) {
    var module357;
    module356.default(this, n);
    module357 = module358.default(this, module361.default(n).call(this, t));
    module662.default.init(function (t, n) {
      n();
    });
    return module357;
  }

  updateState(t) {
    return this.props.screenProps.updateState(t);
  }

  render() {
    return (
      <module2.View style={x.container} header={null}>
        <module2.View>
          <module622.default
            style={x.slider}
            screenProps={this.props.screenProps.womans}
            secondProps={this.props.screenProps.mens}
            gender="female"
            updateState={this.updateState.bind(this)}
          />
        </module2.View>
      </module2.View>
    );
  }
}

export default v;
var x = module2.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slider: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  txtview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  txt: {
    padding: 5,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    marginRight: 5,
    marginLeft: 5,
  },
});
