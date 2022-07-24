export function createAnimatedConcat(...args) {
  return new p(args.map(module529.adapt));
}

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module527 = require('./527'),
  module529 = require('./529'),
  p = (function (t) {
    function o(t) {
      module356.default(this, o);
      return module358.default(
        this,
        module361.default(o).call(
          this,
          {
            type: 'concat',
            input: t.map(function (t) {
              return t.__nodeID;
            }),
          },
          t
        )
      );
    }

    module362.default(o, t);
    return o;
  })(module527.default);
