var module11 = require('./11'),
  module38 = require('./38'),
  module313 = require('./313'),
  module314 = require('./314'),
  module3 = require('./3'),
  module315 = require('./315')({
    __types: true,
  });

var E = {
  emit: function (t, n, s, _, o, v, E) {
    return this.__getEventEmitter().emit(t, n, s, _, o, v, E);
  },
  emitAndHold: function (t, n, s, _, o, v, E) {
    return this.__getEventEmitter().emitAndHold(t, n, s, _, o, v, E);
  },
  addListener: function (t, n, s) {
    return this.__getEventEmitter().addListener(t, n, s);
  },
  once: function (t, n, s) {
    return this.__getEventEmitter().once(t, n, s);
  },
  addRetroactiveListener: function (t, n, s) {
    return this.__getEventEmitter().addRetroactiveListener(t, n, s);
  },
  addListenerMap: function (t, n) {
    return this.__getEventEmitter().addListenerMap(t, n);
  },
  addRetroactiveListenerMap: function (t, n) {
    return this.__getEventEmitter().addListenerMap(t, n);
  },
  removeAllListeners: function () {
    this.__getEventEmitter().removeAllListeners();
  },
  removeCurrentListener: function () {
    this.__getEventEmitter().removeCurrentListener();
  },
  releaseHeldEventType: function (t) {
    this.__getEventEmitter().releaseHeldEventType(t);
  },
  __getEventEmitter: function () {
    if (!this.__eventEmitter) {
      var t = new module38(),
        o = new module314();
      this.__eventEmitter = new module313(t, o);
    }

    return this.__eventEmitter;
  },
};

module.exports = function (n, s) {
  module3(s, 'Must supply set of valid event types');

  var _ = n.prototype || n;

  module3(!_.__eventEmitter, 'An active emitter is already mixed in');
  var u = n.constructor;
  if (u) module3(u === Object || u === Function, 'Mix EventEmitter into a class, not an instance');
  if (_.hasOwnProperty(module315)) module11(_.__types, s);
  else if (_.__types) _.__types = module11({}, _.__types, s);
  else _.__types = s;
  module11(_, E);
};
