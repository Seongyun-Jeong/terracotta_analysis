var module356 = require('./356'),
  module710 = require('./710'),
  module716 = require('./716'),
  module672 = require('./672');

class l {
  constructor(o, s) {
    module356.default(this, t);
    this._collectionPath = s;
    this._firestore = o;
    this._query = new module710.default(o, s);
  }

  isEqual(n) {
    if (!(n instanceof t)) throw new Error('firebase.firestore.CollectionReference.isEqual(*) expects an instance of CollectionReference.');
    return this.path === n.path && this._firestore.app.name === n._firestore.app.name && this._firestore.app.options.projectId === n._firestore.app.options.projectId;
  }

  add(t) {
    var n = this.doc();
    return n.set(t).then(function () {
      return Promise.resolve(n);
    });
  }

  doc(t) {
    var n = t || module672.firestoreAutoId(),
      o = this._collectionPath.child(n);

    if (!o.isDocument) throw new Error('Argument "documentPath" must point to a document.');
    return new module716.default(this._firestore, o);
  }

  endAt(...args) {
    return this._query.endAt(args);
  }

  endBefore(...args) {
    return this._query.endBefore(args);
  }

  get(t) {
    return this._query.get(t);
  }

  limit(t) {
    return this._query.limit(t);
  }

  onSnapshot(t, n, o) {
    return this._query.onSnapshot(t, n, o);
  }

  orderBy(t, n) {
    return this._query.orderBy(t, n);
  }

  startAfter(...args) {
    return this._query.startAfter(args);
  }

  startAt(...args) {
    return this._query.startAt(args);
  }

  where(t, n, o) {
    return this._query.where(t, n, o);
  }

  firestore() {
    return this._firestore;
  }

  id() {
    return this._collectionPath.id;
  }

  parent() {
    var t = this._collectionPath.parent();

    return t ? new module716.default(this._firestore, t) : null;
  }

  path() {
    return this._collectionPath.relativeName;
  }
}

export default l;
