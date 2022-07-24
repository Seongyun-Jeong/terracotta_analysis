var module8 = require('./8'),
  module29 = require('./29'),
  module42 = require('./42'),
  s = module8.AccessibilityInfo,
  o = new Map(),
  u = {
    fetch: function () {
      return new Promise(function (n, t) {
        s.isTouchExplorationEnabled(function (t) {
          n(t);
        });
      });
    },
    addEventListener: function (n, c) {
      var s = module29.addListener('touchExplorationDidChange', function (n) {
        c(n);
      });
      o.set(c, s);
    },
    removeEventListener: function (n, t) {
      var c = o.get(t);

      if (c) {
        c.remove();
        o.delete(t);
      }
    },
    setAccessibilityFocus: function (n) {
      module42.sendAccessibilityEvent(n, module42.AccessibilityEventTypes.typeViewFocused);
    },
  };

module.exports = u;
