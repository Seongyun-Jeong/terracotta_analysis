var module716 = require('./716'),
  module723 = require('./723'),
  module712 = require('./712'),
  module725 = require('./725'),
  module727 = require('./727'),
  module728 = require('./728'),
  module672 = require('./672'),
  module729 = require('./729'),
  s = function (n) {
    var t = {};
    if (n)
      Object.keys(n).forEach(function (u) {
        var l = b(n[u]);
        if (l) t[u] = l;
      });
    return t;
  };

exports.buildNativeMap = s;

var y = function (n) {
  var t = [];
  if (n)
    n.forEach(function (n) {
      var u = b(n);
      if (u) t.push(u);
    });
  return t;
};

exports.buildNativeArray = y;

var b = function (n) {
  var f = module672.typeOf(n);
  return Number.isNaN(n)
    ? {
        type: 'nan',
        value: null,
      }
    : n === 1 / 0
    ? {
        type: 'infinity',
        value: null,
      }
    : null === n || undefined === n
    ? {
        type: 'null',
        value: null,
      }
    : n === module712.DOCUMENT_ID
    ? {
        type: 'documentid',
        value: null,
      }
    : 'boolean' === f || 'number' === f || 'string' === f
    ? {
        type: f,
        value: n,
      }
    : 'array' === f
    ? {
        type: f,
        value: y(n),
      }
    : 'object' === f
    ? n instanceof module716.default
      ? {
          type: 'reference',
          value: n.path,
        }
      : n instanceof module727.default
      ? {
          type: 'geopoint',
          value: {
            latitude: n.latitude,
            longitude: n.longitude,
          },
        }
      : n instanceof module729.default
      ? {
          type: 'timestamp',
          value: {
            seconds: n.seconds,
            nanoseconds: n.nanoseconds,
          },
        }
      : n instanceof Date
      ? {
          type: 'date',
          value: n.getTime(),
        }
      : n instanceof module723.default
      ? {
          type: 'blob',
          value: n.toBase64(),
        }
      : n instanceof module725.default
      ? {
          type: 'fieldvalue',
          value: {
            elements: n.elements,
            type: n.type,
          },
        }
      : {
          type: 'object',
          value: s(n),
        }
    : (console.warn('Unknown data type received ' + f), null);
};

exports.buildTypeMap = b;

var N = function (n, t) {
  var u;

  if (t) {
    u = {};
    Object.keys(t).forEach(function (l) {
      u[l] = M(n, t[l]);
    });
  }

  return u;
};

exports.parseNativeMap = N;

var w = function (n, t) {
    var u = [];
    if (t)
      t.forEach(function (t) {
        u.push(M(n, t));
      });
    return u;
  },
  M = function (n, l) {
    var o = l.type,
      v = l.value;
    return 'null' === o
      ? null
      : 'boolean' === o || 'number' === o || 'string' === o
      ? v
      : 'array' === o
      ? w(n, v)
      : 'object' === o
      ? N(n, v)
      : 'reference' === o
      ? new module716.default(n, module728.default.fromName(v))
      : 'geopoint' === o
      ? new module727.default(v.latitude, v.longitude)
      : 'timestamp' === o
      ? new module729.default(v.seconds, v.nanoseconds)
      : 'date' === o
      ? new Date(v)
      : 'blob' === o
      ? module723.default.fromBase64String(v)
      : 'infinity' === o
      ? 1 / 0
      : 'nan' === o
      ? NaN
      : (console.warn('Unknown data type received ' + o), v);
  };
