require('./116');

import module8 from './8';
import module3 from './3';

var module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module36 = require('./36'),
  module117 = require('./117'),
  module139 = require('./139');

class l {
  constructor() {
    var n;
    module22(this, _);
    (n = module30(this, module33(_).call(this, module8))).isAvailable = true;
    n.isAvailable = true;
    n._eventHandlers = {
      change: new Map(),
      memoryWarning: new Map(),
    };
    n.currentState = module8.initialAppState || 'active';
    var p = false;
    n.addListener('appStateDidChange', function (t) {
      p = true;
      n.currentState = t.app_state;
    });
    module8.getCurrentAppState(function (t) {
      if (!(p || n.currentState === t.app_state)) {
        n.currentState = t.app_state;
        n.emit('appStateDidChange', t);
      }
    }, module139);
    return n;
  }

  addEventListener(t, n) {
    module3(-1 !== ['change', 'memoryWarning'].indexOf(t), 'Trying to subscribe to unknown event: "%s"', t);
    if ('change' === t)
      this._eventHandlers[t].set(
        n,
        this.addListener('appStateDidChange', function (t) {
          n(t.app_state);
        })
      );
    else if ('memoryWarning' === t) this._eventHandlers[t].set(n, this.addListener('memoryWarning', n));
  }

  removeEventListener(t, n) {
    module3(-1 !== ['change', 'memoryWarning'].indexOf(t), 'Trying to remove listener for unknown event: "%s"', t);

    if (this._eventHandlers[t].has(n)) {
      this._eventHandlers[t].get(n).remove();

      this._eventHandlers[t].delete(n);
    }
  }
}

l = new l();
module.exports = l;
