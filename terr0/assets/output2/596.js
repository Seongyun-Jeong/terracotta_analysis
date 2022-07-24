import module2 from './2';

var module373 = require('./373'),
  module366 = require('./366'),
  module597 = require('./597');

var v = function (t) {
  var v = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {},
    f = module373.StackRouter(t, v),
    c = module373.createNavigator(module597.default, f, v);
  if (!(v.disableKeyboardHandling || 'web' === module2.Platform.OS)) c = module366.createKeyboardAwareNavigator(c, v);
  return c;
};

export default v;
