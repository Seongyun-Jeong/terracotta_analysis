var module356 = require('./356'),
  module672 = require('./672');

class n {
  constructor(l, s) {
    module356.default(this, t);
    this.key = s.key;
    if (l.key !== s.key) this.ref = l.child(s.key);
    else this.ref = l;
    this._value = s.value;
    this._priority = undefined === s.priority ? null : s.priority;
    this._childKeys = s.childKeys || [];
  }

  val() {
    return module672.isObject(this._value) || Array.isArray(this._value) ? JSON.parse(JSON.stringify(this._value)) : this._value;
  }

  exportVal() {
    var t = this._value;
    if (module672.isObject(this._value) || Array.isArray(this._value)) t = JSON.parse(JSON.stringify(this._value));
    return {
      '.value': t,
      '.priority': this._priority,
    };
  }

  child(u) {
    var l = module672.deepGet(this._value, u);
    if (undefined === l) l = null;
    var n = this.ref.child(u);
    return new t(n, {
      value: l,
      key: n.key,
      exists: null !== l,
      childKeys: module672.isObject(l) && null !== l ? Object.keys(l) : [],
    });
  }

  exists() {
    return null !== this._value;
  }

  forEach(t) {
    if (!this._childKeys.length) return false;

    for (var u = false, l = 0, s = this._childKeys.length; l < s; l++) {
      var n = this._childKeys[l];

      if (true === t(this.child(n))) {
        u = true;
        break;
      }
    }

    return u;
  }

  getPriority() {
    return this._priority;
  }

  hasChild(t) {
    return module672.deepExists(this._value, t);
  }

  hasChildren() {
    return this.numChildren() > 0;
  }

  numChildren() {
    return module672.isObject(this._value) ? Object.keys(this._value).length : 0;
  }

  toJSON() {
    return this.val();
  }
}

export default n;
