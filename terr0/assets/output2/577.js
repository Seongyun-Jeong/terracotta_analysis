export default function default(n, t) {
  return function (o, s, l) {
    return undefined !== l ? n(o, s, l) : c(n, t, o, s);
  };
}

var module524 = require("./524"),
    module535 = require("./535"),
    module540 = require("./540");

function c(n, c, l, f) {
  var u,
      h,
      _ = new module535.default(),
      p = c.getDefaultState(),
      v = false,
      y = false,
      C = false,
      b = {
    start: function (o) {
      h = o;
      if (v) {
        if (h) h({
          finished: false
        });
      } else if (y) console.warn('Animation has been finished before');else if (l.isNativelyInitialized()) {
        v = true;
        module540.evaluateOnce(module524.set(p.position, l), p.position, function () {
          u = module524.always(module524.set(l, module524.block([module524.cond(module524.clockRunning(_), 0, module524.startClock(_)), n(_, p, f), module524.cond(p.finished, [module524.call([], function () {
            v = false;
            if (!C) y = true;

            l.__detachAnimation(b);

            y = true;
            if (!C) C = false;
          }), module524.stopClock(_)]), p.position])));

          l.__attachAnimation(b);

          u.__addChild(l);
        });
      }
    },
    __detach: function () {
      if (h) h({
        finished: y
      });
      h = null;

      u.__removeChild(l);
    },
    stop: function () {
      if (y) console.warn('Calling stop has no effect as the animation has already completed');else if (v) {
        C = true;
        module540.evaluateOnce(module524.set(p.finished, 1), p.finished);
      } else console.warn("Calling stop has no effect as the animation hasn't been started");
    },
    __stopImmediately_testOnly: function (n) {
      b.stop();
      y = n;

      l.__detachAnimation(b);
    }
  };

  return b;
}