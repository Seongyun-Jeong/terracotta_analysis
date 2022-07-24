require('./11');

require('./43');

var t,
  module9 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  React = require('react'),
  module75 = require('./75');

t = (function (t) {
  'use strict';

  function h() {
    module22(this, h);
    return module30(this, module33(h).apply(this, arguments));
  }

  module36(h, t);
  module23(h, [
    {
      key: 'render',
      value: function () {
        var t = this.props,
          u = module9(t, ['emulateUnlessSupported']);
        return <module75 />;
      },
    },
  ]);
  return h;
})(React.Component);

module.exports = t;
