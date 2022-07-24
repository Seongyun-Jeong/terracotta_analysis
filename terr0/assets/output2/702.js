var module392 = require('./392'),
  module356 = require('./356'),
  module672 = require('./672');

class l {
  constructor(f, o) {
    module356.default(this, t);
    this.modifiers = o ? module392.default(o) : [];
    this._reference = f;
  }

  orderBy(t, n) {
    this.modifiers.push({
      id: 'orderBy-' + t + ':' + (n || ''),
      type: 'orderBy',
      name: t,
      key: n,
    });
    return this._reference;
  }

  limit(t, n) {
    this.modifiers.push({
      id: 'limit-' + t + ':' + n,
      type: 'limit',
      name: t,
      limit: n,
    });
    return this._reference;
  }

  filter(t, n, u) {
    this.modifiers.push({
      id: 'filter-' + t + ':' + module672.objectToUniqueId(n) + ':' + (u || ''),
      type: 'filter',
      name: t,
      value: n,
      valueType: typeof n,
      key: u,
    });
    return this._reference;
  }

  getModifiers() {
    return module392.default(this.modifiers);
  }

  queryIdentifier() {
    for (
      var t = this.getModifiers().sort(function (t, n) {
          return t.id < n.id ? -1 : t.id > n.id ? 1 : 0;
        }),
        n = '{',
        u = 0;
      u < t.length;
      u++
    ) {
      if (0 !== u) n += ',';
      n += t[u].id;
    }

    n += '}';
    return n;
  }
}

export default l;
