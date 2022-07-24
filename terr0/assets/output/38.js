var module22 = require('./22'),
  module39 = require('./39'),
  module41 = require('./41'),
  module3 = require('./3'),
  c = function () {
    return true;
  };

class b {
  constructor(n) {
    module22(this, b);
    this._subscriber = n || new module41();
  }

  addListener(t, n, u) {
    return this._subscriber.addSubscription(t, new module39(this, this._subscriber, n, u));
  }

  once(t, n, s) {
    var u = this;
    return this.addListener(t, function (...args) {
      u.removeCurrentListener();
      n.apply(s, args);
    });
  }

  removeAllListeners(t) {
    this._subscriber.removeAllSubscriptions(t);
  }

  removeCurrentListener() {
    module3(!!this._currentSubscription, 'Not in an emitting cycle; there is no current subscription');
    this.removeSubscription(this._currentSubscription);
  }

  removeSubscription(t) {
    module3(t.emitter === this, 'Subscription does not belong to this emitter.');

    this._subscriber.removeSubscription(t);
  }

  listeners(t) {
    var n = this._subscriber.getSubscriptionsForType(t);

    return n
      ? n.filter(c).map(function (t) {
          return t.listener;
        })
      : [];
  }

  emit(t) {
    var n = this._subscriber.getSubscriptionsForType(t);

    if (n) {
      for (var s = 0, u = n.length; s < u; s++) {
        var o = n[s];

        if (o && o.listener) {
          this._currentSubscription = o;
          o.listener.apply(o.context, Array.prototype.slice.call(arguments, 1));
        }
      }

      this._currentSubscription = null;
    }
  }

  removeListener(t, n) {
    var s = this._subscriber.getSubscriptionsForType(t);

    if (s)
      for (var u = 0, o = s.length; u < o; u++) {
        var c = s[u];
        if (c && c.listener === n) c.remove();
      }
  }
}

module.exports = b;
