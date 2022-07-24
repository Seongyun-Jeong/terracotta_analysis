var module404 = require('./404');

exports.default = function (t) {
  return function (n) {
    var o = n.route,
      u = n.jumpTo,
      c = n.position;
    return (
      <k
        key={o.key}
        component={t[o.key]}
        route={o}
        jumpTo={u}
        position={c}
        __source={{
          fileName: v,
          lineNumber: 16,
        }}
      />
    );
  };
};

var module370 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = module404(require('react')),
  v = '/Users/osdnk/work/react-native-tab-view/src/SceneMap.tsx',
  k = (function (t) {
    function n() {
      module356.default(this, n);
      return module358.default(this, module361.default(n).apply(this, arguments));
    }

    module362.default(n, t);
    module357.default(n, [
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.component,
            u = module370.default(t, ['component']);
          return <n />;
        },
      },
    ]);
    return n;
  })(React.PureComponent);
