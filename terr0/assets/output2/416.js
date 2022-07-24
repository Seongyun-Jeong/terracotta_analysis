import React from 'react';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module384 = require('./384'),
  v = (function (t) {
    function v() {
      module356.default(this, v);
      return module358.default(this, module361.default(v).apply(this, arguments));
    }

    module362.default(v, t);
    module357(v, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.screenProps,
            u = t.component,
            l = t.navigation;
          return React.createElement(
            module384.default.Provider,
            {
              value: l,
            },
            React.createElement(u, {
              screenProps: n,
              navigation: l,
            })
          );
        },
      },
    ]);
    return v;
  })(React.PureComponent);

export default v;
