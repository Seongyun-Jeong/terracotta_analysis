var module356 = require('./356'),
  module717 = require('./717'),
  module715 = require('./715'),
  module709 = require('./709'),
  module721 = require('./721'),
  module722 = require('./722'),
  module675 = require('./675'),
  module672 = require('./672'),
  module670 = require('./670');

class w {
  constructor(o, u) {
    module356.default(this, t);
    this._documentPath = u;
    this._firestore = o;
  }

  isEqual(n) {
    if (!(n instanceof t)) throw new Error('firebase.firestore.DocumentReference.isEqual(*) expects an instance of DocumentReference.');
    return this.path === n.path && this._firestore.app.name === n._firestore.app.name && this._firestore.app.options.projectId === n._firestore.app.options.projectId;
  }

  collection(t) {
    var n = this._documentPath.child(t);

    if (!n.isCollection) throw new Error('Argument "collectionPath" must point to a collection.');
    return new module709.default(this._firestore, n);
  }

  delete() {
    return module675.getNativeModule(this._firestore).documentDelete(this.path);
  }

  get(t) {
    var n = this;

    if (t) {
      if (!module672.isObject(t)) return Promise.reject(new Error('DocumentReference.get failed: First argument must be an object.'));
      if (t.source && 'default' !== t.source && 'server' !== t.source && 'cache' !== t.source)
        return Promise.reject(new Error('DocumentReference.get failed: GetOptions.source must be one of `default`, `server` or `cache`.'));
    }

    return module675
      .getNativeModule(this._firestore)
      .documentGet(this.path, t)
      .then(function (t) {
        return new module715.default(n._firestore, t);
      });
  }

  onSnapshot(t, n, o) {
    var c,
      f = this,
      h = {};

    if (module672.isFunction(t)) {
      if (n && !module672.isFunction(n)) throw new Error('DocumentReference.onSnapshot failed: Second argument must be a valid function.');
      c = {
        next: t,
        error: n,
      };
    } else {
      if (!t || !module672.isObject(t)) throw new Error('DocumentReference.onSnapshot failed: Called with invalid arguments.');

      if (t.next) {
        if (!module672.isFunction(t.next)) throw new Error('DocumentReference.onSnapshot failed: Observer.next must be a valid function.');
        if (t.error && !module672.isFunction(t.error)) throw new Error('DocumentReference.onSnapshot failed: Observer.error must be a valid function.');
        c = {
          next: t.next,
          error: t.error,
        };
      } else {
        if (!Object.prototype.hasOwnProperty.call(t, 'includeMetadataChanges'))
          throw new Error('DocumentReference.onSnapshot failed: First argument must be a function, observer or options.');

        if (((h = t), module672.isFunction(n))) {
          if (o && !module672.isFunction(o)) throw new Error('DocumentReference.onSnapshot failed: Third argument must be a valid function.');
          c = {
            next: n,
            error: o,
          };
        } else {
          if (!(n && module672.isObject(n) && n.next)) throw new Error('DocumentReference.onSnapshot failed: Second argument must be a function or observer.');
          if (!module672.isFunction(n.next)) throw new Error('DocumentReference.onSnapshot failed: Observer.next must be a valid function.');
          if (n.error && !module672.isFunction(n.error)) throw new Error('DocumentReference.onSnapshot failed: Observer.error must be a valid function.');
          c = {
            next: n.next,
            error: n.error,
          };
        }
      }
    }

    var w,
      _ = module672.firestoreAutoId(),
      b = module670.SharedEventEmitter.addListener(module670.getAppEventName(this._firestore, 'onDocumentSnapshot:' + _), function (t) {
        var n = new module715.default(f.firestore, t);
        c.next(n);
      }),
      E = module670.SharedEventEmitter.addListener(module670.getAppEventName(this._firestore, 'onDocumentSnapshotError:' + _), function (t) {
        if (w) w();
        var n = new module717.default(t);
        if (c.error) c.error(n);
        else f.firestore.log.error(n);
      });

    module675.getNativeModule(this._firestore).documentOnSnapshot(this.path, _, h);

    w = function () {
      b.remove();
      E.remove();
      module675.getNativeModule(f._firestore).documentOffSnapshot(f.path, _);
    };

    return w;
  }

  set(t, n) {
    var o = module722.buildNativeMap(t);
    return module675.getNativeModule(this._firestore).documentSet(this.path, o, n);
  }

  update(...args) {
    var u = module721.parseUpdateArgs(args, 'DocumentReference.update'),
      s = module722.buildNativeMap(u);
    return module675.getNativeModule(this._firestore).documentUpdate(this.path, s);
  }

  firestore() {
    return this._firestore;
  }

  id() {
    return this._documentPath.id;
  }

  parent() {
    var t = this._documentPath.parent();

    return new module709.default(this._firestore, t);
  }

  path() {
    return this._documentPath.relativeName;
  }
}

export default w;
