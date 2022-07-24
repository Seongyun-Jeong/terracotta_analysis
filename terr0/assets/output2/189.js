require('./43');

var module8 = require('./8').TVNavigationEventEmitter,
  module117 = require('./117');

function v() {
  this.__nativeTVNavigationEventListener = null;
  this.__nativeTVNavigationEventEmitter = null;
}

v.prototype.enable = function (v, o) {
  this.__nativeTVNavigationEventEmitter = new module117(module8);
  this.__nativeTVNavigationEventListener = this.__nativeTVNavigationEventEmitter.addListener('onHWKeyEvent', function (t) {
    if (o) o(v, t);
  });
};

v.prototype.disable = function () {
  if (this.__nativeTVNavigationEventListener) {
    this.__nativeTVNavigationEventListener.remove();

    delete this.__nativeTVNavigationEventListener;
  }

  if (this.__nativeTVNavigationEventEmitter) delete this.__nativeTVNavigationEventEmitter;
};

module.exports = v;
