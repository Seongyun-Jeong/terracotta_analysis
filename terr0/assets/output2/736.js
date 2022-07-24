import module2 from './2';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module360 = require('./360'),
  module362 = require('./362'),
  module737 = require('./737'),
  module670 = require('./670'),
  module674 = require('./674'),
  module676 = require('./676'),
  module675 = require('./675'),
  E = ['links_link_received'],
  p = 'RNFirebaseLinks';

exports.MODULE_NAME = p;
var M = 'links';
exports.NAMESPACE = M;

class S {
  constructor(t) {
    var module357;
    module356.default(this, y);
    module357 = module358.default(
      this,
      module361.default(y).call(this, t, {
        events: E,
        moduleName: p,
        hasMultiAppSupport: false,
        hasCustomUrlSupport: false,
        namespace: M,
      })
    );
    module670.SharedEventEmitter.addListener('links_link_received', function (t) {
      module670.SharedEventEmitter.emit('onLink', t);
    });
    if ('ios' === module2.Platform.OS) module675.getNativeModule(module360.default(module357)).jsInitialised();
    return module357;
  }

  createDynamicLink(t) {
    if (!(t instanceof module737.default)) return Promise.reject(new Error("Links:createDynamicLink expects a 'DynamicLink' but got type " + typeof t));

    try {
      return module675.getNativeModule(this).createDynamicLink(t.build());
    } catch (t) {
      return Promise.reject(t);
    }
  }

  createShortDynamicLink(t, n) {
    if (!(t instanceof module737.default)) return Promise.reject(new Error("Links:createShortDynamicLink expects a 'DynamicLink' but got type " + typeof t));

    try {
      return module675.getNativeModule(this).createShortDynamicLink(t.build(), n);
    } catch (t) {
      return Promise.reject(t);
    }
  }

  getInitialLink() {
    return module675.getNativeModule(this).getInitialLink();
  }

  onLink(t) {
    var n = this;
    module674.getLogger(this).info('Creating onLink listener');
    module670.SharedEventEmitter.addListener('onLink', t);
    return function () {
      module674.getLogger(n).info('Removing onLink listener');
      module670.SharedEventEmitter.removeListener('onLink', t);
    };
  }
}

export default S;
var D = {
  DynamicLink: module737.default,
};
exports.statics = D;
