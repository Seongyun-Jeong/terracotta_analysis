var module404 = require('./404');

import React from 'react';
import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module622 = require('./622');

class y {
  constructor() {
    module356.default(this, n);
    return module358.default(this, module361.default(n).apply(this, arguments));
  }

  updateState(t) {
    return this.props.screenProps.updateState(t);
  }

  render() {
    return (
      <module2.View style={v.container} header={null}>
        <module2.View>
          <module622.default
            style={v.slider}
            screenProps={this.props.screenProps.mens}
            secondProps={this.props.screenProps.womans}
            gender="male"
            updateState={this.updateState.bind(this)}
          />
        </module2.View>
      </module2.View>
    );
  }
}

export default y;
var v = module2.StyleSheet.create({
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
});
