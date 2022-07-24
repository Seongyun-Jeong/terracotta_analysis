var module22 = require('./22'),
  module3 = require('./3');

class o {
  constructor() {
    module22(this, o);
    this._subscriptionsForType = {};
    this._currentSubscription = null;
  }

  addSubscription(s, t) {
    module3(t.subscriber === this, 'The subscriber of the subscription is incorrectly set.');
    if (!this._subscriptionsForType[s]) this._subscriptionsForType[s] = [];
    var o = this._subscriptionsForType[s].length;

    this._subscriptionsForType[s].push(t);

    t.eventType = s;
    t.key = o;
    return t;
  }

  removeAllSubscriptions(s) {
    if (undefined === s) this._subscriptionsForType = {};
    else delete this._subscriptionsForType[s];
  }

  removeSubscription(s) {
    var t = s.eventType,
      n = s.key,
      o = this._subscriptionsForType[t];
    if (o) delete o[n];
  }

  getSubscriptionsForType(s) {
    return this._subscriptionsForType[s];
  }
}

module.exports = o;
