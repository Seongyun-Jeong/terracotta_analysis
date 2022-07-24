export function createAnimatedStopClock(t) {
  return new k(t);
}

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module527 = require('./527'),
  module535 = require('./535'),
  module191 = require('./191');

class k {
  constructor(t) {
    var module357;
    module356.default(this, f);
    module357 = module358.default(
      this,
      module361.default(f).call(this, {
        type: 'clockStop',
        clock: t.__nodeID,
      })
    );
    module191.default(t instanceof module535.default, 'Node is not of an AnimatedClock type');
    module357._clockNode = t;
    return module357;
  }

  __onEvaluate() {
    this._clockNode.stop();

    return 0;
  }
}
