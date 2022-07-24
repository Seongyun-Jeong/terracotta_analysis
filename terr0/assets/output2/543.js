export function createAnimatedAlways(t) {
  return new module527(t);
}

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362');

class module527 {
  constructor(t) {
    var u;
    module356.default(this, _);
    (u = module358.default(
      this,
      module361.default(_).call(
        this,
        {
          type: 'always',
          what: t.__nodeID,
        },
        [t]
      )
    ))._what = t;
    return u;
  }

  __onEvaluate() {
    return 0;
  }
}
