export function evaluateOnce(t) {
  var v = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [],
    h = arguments.length > 2 ? arguments[2] : undefined;
  if (!Array.isArray(v)) v = [v];

  for (
    var f = new module530.default(0),
      u = module525.createAnimatedCond(
        f,
        0,
        module541.createAnimatedCall([t, module533.createAnimatedSet(f, 1)], function () {
          if (h) h();

          for (var t = 0; t < v.length; t++) {
            v[t].__removeChild(A);

            A.__detach();
          }
        })
      ),
      A = module543.createAnimatedAlways(u),
      y = 0;
    y < v.length;
    y++
  ) {
    v[y].__addChild(A);

    A.__attach();
  }
}

var module530 = require('./530'),
  module533 = require('./533'),
  module541 = require('./541'),
  module543 = require('./543'),
  module525 = require('./525');
