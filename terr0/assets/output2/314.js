var module22 = require('./22'),
  module3 = require('./3');

class v {
  constructor() {
    module22(this, v);
    this._heldEvents = {};
    this._currentEventKey = null;
  }

  holdEvent(t) {
    this._heldEvents[t] = this._heldEvents[t] || [];

    for (
      var n = this._heldEvents[t],
        s = {
          eventType: t,
          index: n.length,
        },
        v = arguments.length,
        h = new Array(v > 1 ? v - 1 : 0),
        u = 1;
      u < v;
      u++
    )
      h[u - 1] = arguments[u];

    n.push(h);
    return s;
  }

  emitToListener(t, n, s) {
    var v = this,
      h = this._heldEvents[t];

    if (h) {
      var u = this._currentEventKey;
      h.forEach(function (h, u) {
        if (h) {
          v._currentEventKey = {
            eventType: t,
            index: u,
          };
          n.apply(s, h);
        }
      });
      this._currentEventKey = u;
    }
  }

  releaseCurrentEvent() {
    module3(null !== this._currentEventKey, 'Not in an emitting cycle; there is no current event');
    if (this._currentEventKey) this.releaseEvent(this._currentEventKey);
  }

  releaseEvent(t) {
    delete this._heldEvents[t.eventType][t.index];
  }

  releaseEventType(t) {
    this._heldEvents[t] = [];
  }
}

module.exports = v;
