require('./43');

var module42 = require('./42'),
  t = null,
  u = new Set();

module.exports = {
  currentlyFocusedField: function () {
    return t;
  },
  focusTextInput: function (u) {
    if (t !== u && null !== u) {
      t = u;
      module42.dispatchViewManagerCommand(u, module42.getViewManagerConfig('AndroidTextInput').Commands.focusTextInput, null);
    }
  },
  blurTextInput: function (u) {
    if (t === u && null !== u) {
      t = null;
      module42.dispatchViewManagerCommand(u, module42.getViewManagerConfig('AndroidTextInput').Commands.blurTextInput, null);
    }
  },
  registerInput: function (n) {
    u.add(n);
  },
  unregisterInput: function (n) {
    u.delete(n);
  },
  isTextInput: function (n) {
    return u.has(n);
  },
};
