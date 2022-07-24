var module51 = require('./51'),
  module356 = require('./356'),
  module761 = require('./761'),
  module672 = require('./672');

exports.UPLOAD_TASK = 'upload';
exports.DOWNLOAD_TASK = 'download';

class h {
  constructor(n, o, u) {
    module356.default(this, t);
    this.type = n;
    this.ref = u;
    this.storage = u._storage;
    this.path = u.path;
    this.then = o.then.bind(o);
    this.catch = o.catch.bind(o);
  }

  _interceptSnapshotEvent(t) {
    var s = this;
    return module672.isFunction(t)
      ? function (o) {
          var u = module51.default({}, o);
          u.task = s;
          u.ref = s.ref;
          return t && t(u);
        }
      : null;
  }

  _interceptErrorEvent(t) {
    return module672.isFunction(t)
      ? function (n) {
          var s = new Error(n.message);
          s.code = n.code;
          return t && t(s);
        }
      : null;
  }

  _subscribe(t, n, s) {
    var o,
      c,
      h,
      v = this;

    if ('function' == typeof t) {
      o = this._interceptErrorEvent(n);
      c = this._interceptSnapshotEvent(t);
      h = this._interceptSnapshotEvent(s);
    } else if (t) {
      o = this._interceptErrorEvent(t.error);
      c = this._interceptSnapshotEvent(t.next);
      h = this._interceptSnapshotEvent(t.complete);
    }

    if (c) this.storage._addListener(this.path, module761.statics.TaskEvent.STATE_CHANGED, c);
    if (o) this.storage._addListener(this.path, this.type + '_failure', o);
    if (h) this.storage._addListener(this.path, this.type + '_success', h);
    return function () {
      if (c) v.storage._removeListener(v.path, module761.statics.TaskEvent.STATE_CHANGED, c);
      if (o) v.storage._removeListener(v.path, v.type + '_failure', o);
      if (h) v.storage._removeListener(v.path, v.type + '_success', h);
    };
  }

  on() {
    var t = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : module761.statics.TaskEvent.STATE_CHANGED,
      n = arguments.length > 1 ? arguments[1] : undefined,
      s = arguments.length > 2 ? arguments[2] : undefined,
      o = arguments.length > 3 ? arguments[3] : undefined;
    if (!t) throw new Error("StorageTask.on listener is missing required string argument 'event'.");
    if (t !== module761.statics.TaskEvent.STATE_CHANGED)
      throw new Error("StorageTask.on event argument must be a string with a value of '" + module761.statics.TaskEvent.STATE_CHANGED + "'");
    return n || s || o ? this._subscribe(n, s, o) : this._subscribe.bind(this);
  }

  pause() {
    throw new Error('.pause() is not currently supported by react-native-firebase');
  }

  resume() {
    throw new Error('.resume() is not currently supported by react-native-firebase');
  }

  cancel() {
    throw new Error('.cancel() is not currently supported by react-native-firebase');
  }
}

export default h;
