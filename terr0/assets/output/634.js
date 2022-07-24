var module404 = require('./404');

Object.defineProperty(exports, 'registerAnimation', {
  enumerable: true,
  get: function () {
    return module641.registerAnimation;
  },
});
Object.defineProperty(exports, 'initializeRegistryWithDefinitions', {
  enumerable: true,
  get: function () {
    return module641.initializeRegistryWithDefinitions;
  },
});
Object.defineProperty(exports, 'createAnimation', {
  enumerable: true,
  get: function () {
    return module640.default;
  },
});

var module2 = require('./2'),
  module635 = require('./635'),
  module641 = require('./641'),
  module643 = module404(require('./643')),
  module640 = require('./640');

module641.initializeRegistryWithDefinitions(module643);
var b = module635.default;
exports.createAnimatableComponent = b;
var s = module635.default(module2.View);
exports.View = s;
var v = module635.default(module2.Text);
exports.Text = v;
var y = module635.default(module2.Image);
exports.Image = y;
