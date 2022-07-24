export function createOrReuseTransformNode(n, t) {
  var u = s(n);
  if (t && module442.default(u, t._config)) return t;
  return new p(n, u);
}

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module527 = require('./527'),
  module442 = require('./442');

function s(n) {
  var t = [];
  n.forEach(function (n) {
    for (var u in n) {
      var f = n[u];
      if (f instanceof module527.default)
        t.push({
          property: u,
          nodeID: f.__nodeID,
        });
      else
        t.push({
          property: u,
          value: f,
        });
    }
  });
  return t;
}

function _(n) {
  var t = [];
  n.forEach(function (n) {
    for (var u in n) {
      var f = n[u];
      if (f instanceof module527.default) t.push(f);
    }
  });
  return t;
}

class p {
  constructor(n, u) {
    var c;
    module356.default(this, v);
    (c = module358.default(
      this,
      module361.default(v).call(
        this,
        {
          type: 'transform',
          transform: u,
        },
        _(n)
      )
    ))._config = u;
    c._transform = n;
    return c;
  }

  __onEvaluate() {
    return this._transform.map(function (n) {
      var t = {};

      for (var u in n) {
        var f = n[u];
        if (f instanceof module527.default) t[u] = f.__getValue();
      }

      return t;
    });
  }
}
